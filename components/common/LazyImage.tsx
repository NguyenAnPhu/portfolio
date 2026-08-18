"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

import IMAGES from "@/assets/images";

interface LazyImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  alt: string;
}

export function LazyImage({ alt, src, ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if this is a fill image
  const isFill = props.fill;

  if (isFill) {
    return (
      <>
        <Image
          {...props}
          src={src}
          alt={alt}
          placeholder="empty"
          loading="lazy"
          onLoadingComplete={() => setIsLoading(false)}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${props.className || ""}`}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
            <Image
              src={IMAGES.loading}
              alt="Loading"
              width={48}
              height={48}
              className="object-contain"
              unoptimized
            />
          </div>
        )}
      </>
    );
  }

  // For non-fill images
  return (
    <div className="relative w-full h-full">
      <Image
        {...props}
        src={src}
        alt={alt}
        placeholder="empty"
        loading="lazy"
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${props.className || ""}`}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
          <Image
            src={IMAGES.loading}
            alt="Loading"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
