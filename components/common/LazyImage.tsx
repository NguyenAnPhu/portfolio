"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface LazyImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  alt: string;
}

export function LazyImage({ alt, src, ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      placeholder="empty"
      loading="lazy"
      onLoadingComplete={() => setIsLoading(false)}
      className={`transition-opacity duration-300 ${isLoading ? "opacity-60 bg-muted" : "opacity-100"} ${props.className || ""}`}
    />
  );
}
