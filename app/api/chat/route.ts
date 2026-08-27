import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

import { certificates } from "@/data/certificates";
import { contactLinks } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

// Initialize Gemini client with the API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Compile the context dynamically from the data files
let cachedSystemPrompt: string | null = null;

// Simple in‑memory cache for replies (key -> {reply, expiry})
const replyCache = new Map<string, { reply: string; expiry: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Helper: generate cache key from message + history
function makeCacheKey(message: string, history: any[]): string {
  // JSON.stringify is sufficient for our simple use case
  return `${message}|${JSON.stringify(history)}`;
}

// Choose max tokens based on request length (simple heuristic)
function chooseMaxTokens(message: string): number {
  const trimmed = message.trim().toLowerCase();
  const longKeywords = ["chi tiết", "mô tả", "list", "đánh giá", "các dự án", "thông tin"];
  const isLong = longKeywords.some(k => trimmed.includes(k));
  return isLong ? 2000 : 500; // short answers need far fewer tokens
}

const getSystemPrompt = () => {
  if (cachedSystemPrompt) return cachedSystemPrompt;
  const skillsText = skillGroups
    .map((group) => `- ${group.title}: ${group.skills.map((s) => s.name).join(", ")}`)
    .join("\n");

  const experienceText = experiences
    .map(
      (exp) =>
        `- ${exp.position} tại ${exp.company} (${exp.period}):\n  ${exp.responsibilityGroups
          .map((group) => `  * ${group.title}`)
          .join("\n")}`,
    )
    .join("\n");

  const projectsText = projects
    .map((p) => `- ${p.title} (${p.category}): ${p.role}. Công nghệ: ${p.shortDescription}.${p.previewUrl ? ` Đường dẫn: ${p.previewUrl}` : ""}`)
    .join("\n");

  const contactText = contactLinks.map((c) => `- ${c.label}: ${c.value}`).join("\n");

  const certificatesText = certificates.map((c) => `- ${c.title}`).join("\n");

  cachedSystemPrompt = `Bạn là một trợ lý AI đại diện cho Nguyễn An Phú. Mục đích duy nhất của bạn là trả lời các câu hỏi về Nguyễn An Phú dựa trên tài liệu sau đây. Nếu người dùng hỏi những thông tin không có trong tài liệu, hãy trả lời lịch sự rằng bạn không biết hoặc thông tin không được cung cấp. Không bịa đặt thông tin. Luôn trả lời ngắn gọn, lịch sự, thân thiện và mặc định bằng Tiếng Việt hoặc dùng Tiếng Anh khi trao đổi với ngôn ngữ khác.
--- TÀI LIỆU VỀ NGUYỄN AN PHÚ ---
# GIỚI THIỆU
${experienceText ? "" : ""}
# KỸ NĂNG:
${skillsText}
# KINH NGHIỆM LÀM VIỆC:
${experienceText}
# DỰ ÁN NỔI BẬT:
${projectsText}
# CHỨNG CHỈ:
${certificatesText}
# THÔNG TIN LIÊN HỆ:
${contactText}`;
  return cachedSystemPrompt;
};

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API Key chưa được cấu hình. Vui lòng thêm GEMINI_API_KEY vào .env.local" },
        { status: 500 },
      );
    }

    const fallbackModels = [
      "gemini-flash-lite-latest",
      "gemini-2.5-flash",
      "gemini-3.5-flash",
      "gemini-flash-latest"
    ];

    let responseText = "";

    for (const modelName of fallbackModels) {
      try {
        // Try to serve from cache before hitting the model
        const cacheKey = makeCacheKey(message, history || []);
        const cached = replyCache.get(cacheKey);
        if (cached && Date.now() < cached.expiry) {
          responseText = cached.reply;
          break; // use cached response, skip model loop
        }

        // ---- model call (unchanged) ----
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: getSystemPrompt(),
          generationConfig: {
            temperature: 0.1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: chooseMaxTokens(message),
          },
        });

        const chat = model.startChat({
          history: history || [],
        });

        const result = await chat.sendMessage(message);
        responseText = result.response.text();

        // Store in cache for future identical requests
        replyCache.set(cacheKey, { reply: responseText, expiry: Date.now() + CACHE_TTL_MS });
        // Break out of loop if successful
        break;
      } catch (e: any) {
        console.warn(`Model ${modelName} failed:`, e.message);
        const errorMessage = e.message ? e.message.toLowerCase() : "";
        if (
          e.status === 503 || 
          e.status === 429 || 
          errorMessage.includes("503") || 
          errorMessage.includes("429") || 
          errorMessage.includes("quota") || 
          errorMessage.includes("exhausted") ||
          errorMessage.includes("too many requests") ||
          errorMessage.includes("token")
        ) {
          continue;
        } else {
          throw e;
        }
      }
    }

    if (!responseText) {
      throw new Error("Tất cả các model đều đang bận, không thể trả lời lúc này.");
    }

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
