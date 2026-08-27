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
const getSystemPrompt = () => {
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
    .map((p) => `- ${p.title} (${p.category}): ${p.role}. Công nghệ: ${p.shortDescription}`)
    .join("\n");

  const contactText = contactLinks.map((c) => `- ${c.label}: ${c.value}`).join("\n");

  const certificatesText = certificates.map((c) => `- ${c.title}`).join("\n");

  return `Bạn là một trợ lý AI đại diện cho Nguyễn An Phú. Mục đích duy nhất của bạn là trả lời các câu hỏi về Nguyễn An Phú dựa trên tài liệu sau đây. Nếu người dùng hỏi những thông tin không có trong tài liệu, hãy trả lời lịch sự rằng bạn không biết hoặc thông tin không được cung cấp. Không bịa đặt thông tin. Luôn trả lời ngắn gọn, lịch sự, thân thiện và mặc định bằng Tiếng Việt hoặc dùng Tiếng Anh khi trao đổi với ngôn ngữ khác. Khi được hỏi và trả lời liên quan đến dự án hãy đính kèm đường dẫn dự án.
--- TÀI LIỆU VỀ NGUYỄN AN PHÚ ---
# GIỚI THIỆU
As a software developer with 2 years of hands-on experience, I focus on developing and deploying Website and Zalo Mini App solutions, alongside experience in Native App development. My technical strengths lie in building user interfaces and integrating APIs using TypeScript, ReactJS, Redux Toolkit, RTK Query, complemented by backend development using PHP.I consistently prioritize SEO-standard structures, page load performance optimization, and writing clean, maintainable code designed for easy structural upgrades and future scalability. To maximize efficiency, I actively leverage AI tools (GitHub Copilot, Gemini) for coding, debugging, and solution analysis.Beyond technical capabilities, I am proactive in organizing tasks, bridging business requirements across departments, and managing time to meet project deadlines. My goal is to continuously refine my expertise and evolve into a well-rounded Fullstack Developer.

# KỸ NĂNG:
${skillsText}

# KINH NGHIỆM LÀM VIỆC:
${experienceText}

# DỰ ÁN NỔI BẬT:
${projectsText}

# CHỨNG CHỈ:
${certificatesText}

# THÔNG TIN LIÊN HỆ:
${contactText}
`;
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
      "gemini-flash-latest",
      "gemini-3.5-flash",
      "gemini-2.5-flash",
      "gemini-flash-lite-latest"
    ];

    let responseText = "";

    for (const modelName of fallbackModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: getSystemPrompt(),
          generationConfig: {
            temperature: 0.1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 500,
          },
        });

        const chat = model.startChat({
          history: history || [],
        });

        const result = await chat.sendMessage(message);
        responseText = result.response.text();
        
        // Break out of loop if successful
        break;
      } catch (e: any) {
        console.warn(`Model ${modelName} failed:`, e.message);
        if (e.status === 503 || e.message.includes("503") || e.message.includes("quota") || e.message.includes("exhausted")) {
          // If it's a 503 or quota error, try the next model
          continue;
        } else {
          // For other errors like 400 Bad Request, throw directly
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
