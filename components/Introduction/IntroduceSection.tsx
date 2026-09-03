"use client"
import IMAGES from "@/assets/images";
import Image from "next/image";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";
import { motion } from "framer-motion";

/* ── Animation Variants ─────────────────────────────── */

/** Scroll-reveal: fades up from below with a slight blur */
const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/** Stagger container — children animate in sequence */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

/** Each button fades & slides up */
const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/** Word-by-word reveal for the hero title */
const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 30, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ── Helpers ────────────────────────────────────────── */

/** Split a heading into individually animated words */
function AnimatedWords({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      style={{ ...style, display: "flex", flexWrap: "wrap" }}
      variants={wordReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordItem}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ── Contact Button ─────────────────────────────────── */

function ContactButton({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary";
}) {
  const base =
    "text-[13px] sm:text-[14px] lg:text-[16px] leading-[100%] cursor-pointer transition-all duration-300 ease-in-out";

  const shared =
    variant === "primary"
      ? `${base} inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white bg-[#3B82F6]/50 backdrop-blur-xs border border-white/25 hover:bg-[#3B82F6]/75 hover:border-white/50 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)] active:scale-95`
      : `${base} bg-white/10 text-neutral-100 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/15 hover:border-white/40 hover:backdrop-blur-md hover:-translate-y-1 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4),0_12px_24px_-4px_rgba(0,0,0,0.5)]`;

  const boxShadow =
    variant === "primary"
      ? { boxShadow: "inset 0px 1px 1px 0px rgba(255,255,255,0.3), 0px 4px 12px 0px rgba(59, 130, 246, 0.3)" }
      : { boxShadow: "inset 0px 1px 1px 0px rgba(255,255,255,0.25), 0px 10px 20px 0px rgba(0, 0, 0, 0.3)" };

  return (
    <motion.div variants={staggerItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={shared}
        style={boxShadow}
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ── Main Component ─────────────────────────────────── */

export default function IntroduceSection() {
  return (
    <section className="min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] p-4 sm:p-6 lg:p-8 pt-0 relative overflow-hidden">
      <img
        src={IMAGES.bgHero}
        className="w-full h-full object-cover absolute inset-0 -z-1"
        alt="bgHero"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-full">
        {/* ── Left Column ──────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
          {/* Hero Title — word-by-word reveal */}
          <h1 className="text-neutral-300 flex flex-col relative">
            <AnimatedWords
              text="WEB & MINI APPS"
              className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] z-0"
              style={{ lineHeight: "100%" }}
            />
            <AnimatedWords
              text="DEVELOPER"
              className="text-[64px] sm:text-[120px] md:text-[150px] lg:text-[210px] z-2"
              style={{ lineHeight: "100%" }}
            />

            {/* Experience badge — scroll reveal */}
            <motion.span
              className="absolute top-12 sm:top-20 md:top-24 lg:top-35 left-0 z-1 -translate-y-1/2 rotate-2 w-fit px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-2xl lg:rounded-3xl text-[18px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-tight lg:leading-12 text-[#E5E5E5] bg-black/80 backdrop-blur-xs border border-white/20"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              style={{
                boxShadow:
                  "inset 0px 2px 8px 0px #3B82F6, inset 0px 1px 1px 0px rgba(255, 255, 255, 0.3), 0px 8px 33px 0px rgba(0, 0, 0, 0.37)",
              }}
            >
              2+ YEARS EXPERIENCE
            </motion.span>
          </h1>

          {/* Subtitle — scroll reveal */}
          <motion.p
            className="text-[14px] sm:text-[18px] lg:text-[24px] leading-5 sm:leading-6 w-full sm:w-8/12 md:w-6/12 lg:w-5/12 mt-2 sm:mt-3 text-neutral-600 text-uppercase"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            _Building clean, scalable web experiences with modern frontend technologies_
          </motion.p>

          {/* Contact section — staggered children */}
          <motion.div
            className="mt-6 sm:mt-8 lg:mt-auto"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm sm:text-base text-neutral-500 mb-2 sm:mb-3">LET&apos;S CONTACT</p>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactButton href="https://github.com/NguyenAnPhu">GITHUB</ContactButton>
              <ContactButton href="https://www.facebook.com/NguyenAnPhu.2910/">FACEBOOK</ContactButton>
              <ContactButton href="https://zalo.me/0907086510">ZALO</ContactButton>
              <ContactButton
                href="https://www.topcv.vn/xem-cv/BlYACVJcCwxRAgJQUQFVUAQCAAAIBgZWDVdUUAd145"
                variant="primary"
              >
                READ RESUME
                <OpenInNewIcon sx={{ width: 20, height: 20 }} />
              </ContactButton>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Right Column (Avatar) ────────────────── */}
        <motion.div
          className="lg:col-span-5 relative h-62.5 sm:h-87.5 md:h-100 lg:h-auto order-1 lg:order-2 flex justify-center items-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={IMAGES.avatar}
            className="w-full h-full object-contain"
            alt="avatar"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 600px"
          />
          <motion.p
            className="hidden sm:block text-uppercase text-[20px] sm:text-[24px] lg:text-[32px] leading-[100%] text-neutral-800 absolute bottom-0 right-0"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
