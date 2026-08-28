"use client"
import IMAGES from "@/assets/images";
import Image from "next/image";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";

export default function IntroduceSection() {
  return (
    <section className="min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] p-4 sm:p-6 lg:p-8 pt-0 relative overflow-hidden">
        <img src={IMAGES.bgHero} className="w-full h-full object-cover absolute inset-0 -z-1" alt="bgHero" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-full">
            <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
                <h1 className="text-neutral-300 flex flex-col relative">
                    <span className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[140px] z-0" style={{lineHeight: "100%"}}>WEB & MINI APPS</span>
                    <span className="text-[64px] sm:text-[120px] md:text-[150px] lg:text-[210px] z-2" style={{lineHeight: "100%"}}>DEVELOPER</span>
                    <span 
                        className="absolute top-12 sm:top-20 md:top-24 lg:top-35 left-0 z-1 -translate-y-1/2 rotate-2 w-fit px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-2xl lg:rounded-3xl text-[18px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-tight lg:leading-12 text-[#E5E5E5] bg-black/80 backdrop-blur-xs border border-white/20"
                        style={{ 
                            boxShadow: `
                            inset 0px 2px 8px 0px #3B82F6, 
                            inset 0px 1px 1px 0px rgba(255, 255, 255, 0.3), 
                            0px 8px 33px 0px rgba(0, 0, 0, 0.37)
                            `
                        }}
                        >
                        2+ YEARS EXPERIENCE
                    </span>
                </h1>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] leading-5 sm:leading-6 w-full sm:w-8/12 md:w-6/12 lg:w-5/12 mt-2 sm:mt-3 text-neutral-600 text-uppercase">_Building clean, scalable web experiences with modern frontend technologies_</p>
                <div className="mt-6 sm:mt-8 lg:mt-auto">
                    <p className="text-sm sm:text-base text-neutral-500 mb-2 sm:mb-3">LET&apos;S CONTACT</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                        <Link 
                        href="https://github.com/NguyenAnPhu" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-white/10 
                            text-neutral-100 
                            backdrop-blur-sm 
                            border border-white/20 
                            rounded-xl sm:rounded-2xl 
                            px-3 sm:px-4
                            py-1.5 sm:py-2
                            text-[13px] sm:text-[14px] lg:text-[16px] leading-[100%]
                            transition-all duration-300 ease-in-out
                            hover:bg-white/15 
                            hover:border-white/40 
                            hover:backdrop-blur-md
                            hover:-translate-y-1 
                            hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4),0_12px_24px_-4px_rgba(0,0,0,0.5)]
                            cursor-pointer
                        "
                        style={{
                            boxShadow: `
                            inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25),
                            0px 10px 20px 0px rgba(0, 0, 0, 0.3)
                            `
                        }}>
                            GITHUB
                        </Link>
                        <Link 
                        href="https://www.facebook.com/NguyenAnPhu.2910/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-white/10 
                            text-neutral-100 
                            backdrop-blur-sm 
                            border border-white/20 
                            rounded-xl sm:rounded-2xl 
                            px-3 sm:px-4
                            py-1.5 sm:py-2
                            text-[13px] sm:text-[14px] lg:text-[16px] leading-[100%]
                            transition-all duration-300 ease-in-out
                            hover:bg-white/15 
                            hover:border-white/40 
                            hover:backdrop-blur-md
                            hover:-translate-y-1 
                            hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4),0_12px_24px_-4px_rgba(0,0,0,0.5)]
                            cursor-pointer
                        "
                        style={{
                            boxShadow: `
                            inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25),
                            0px 10px 20px 0px rgba(0, 0, 0, 0.3)
                            `
                        }}>FACEBOOK</Link>
                        <Link 
                        href="https://zalo.me/0907086510" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-white/10 
                            text-neutral-100 
                            backdrop-blur-sm 
                            border border-white/20 
                            rounded-xl sm:rounded-2xl 
                            px-3 sm:px-4
                            py-1.5 sm:py-2
                            text-[13px] sm:text-[14px] lg:text-[16px] leading-[100%]
                            transition-all duration-300 ease-in-out
                            hover:bg-white/15 
                            hover:border-white/40 
                            hover:backdrop-blur-md
                            hover:-translate-y-1 
                            hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4),0_12px_24px_-4px_rgba(0,0,0,0.5)]
                            cursor-pointer
                        "
                        style={{
                            boxShadow: `
                            inset 0px 1px 1px 0px rgba(255, 255, 255, 0.25),
                            0px 10px 20px 0px rgba(0, 0, 0, 0.3)
                            `
                        }}>ZALO</Link>
                        <Link
                            href="https://www.topcv.vn/xem-cv/BlYACVJcCwxRAgJQUQFVUAQCAAAIBgZWDVdUUAd145"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-[13px] sm:text-[14px] lg:text-[16px] leading-[100%]
                                inline-flex items-center justify-center gap-1.5 sm:gap-2
                                px-3 sm:px-4 py-1.5 sm:py-2
                                rounded-full 
                                text-white 

                                bg-[#3B82F6]/50 
                                backdrop-blur-xs 
                                border border-white/25

                                transition-all duration-300 ease-in-out
                                cursor-pointer

                                hover:bg-[#3B82F6]/75 
                                hover:border-white/50 
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(59,130,246,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)]

                                active:scale-95
                            "
                            style={{
                                boxShadow: `
                                inset 0px 1px 1px 0px rgba(255, 255, 255, 0.3),
                                0px 4px 12px 0px rgba(59, 130, 246, 0.3)
                                `
                            }}
                            >
                            READ RESUME
                            <OpenInNewIcon sx={{width: 20, height: 20}}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-5 relative h-62.5 sm:h-87.5 md:h-100 lg:h-auto order-1 lg:order-2 flex justify-center items-center">
                <Image src={IMAGES.avatar} className="w-full h-full object-contain" alt="avatar" fill sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 600px"/>
                <p className="hidden sm:block text-uppercase text-[20px] sm:text-[24px] lg:text-[32px] leading-[100%] text-neutral-800 absolute bottom-0 right-0">Scroll</p>
            </div>
        </div>
    </section>
  );
}
