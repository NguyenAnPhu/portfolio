import "@/app/globals.css";
import "@/assets/sass/index.scss";

import type { Metadata } from "next";

import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "FullStack Developer",
    "Frontend Developer",
    "ReactJS",
    "TypeScript",
    "PHP",
    "Zalo Mini App",
    "React Native",
    "NextJS",
  ],
  authors: [
    {
      name: "Nguyễn An Phú",
      url: "https://nguyenanphu.dev",
    },
  ],
  creator: "Nguyễn An Phú",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nguyenanphu",
  },
  icons: {
    icon: [
      { url: '/assets/icon/favicon.ico' },
      { url: '/assets/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/icon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/icon/apple-icon.png' },
      { url: '/assets/icon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/assets/icon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/assets/icon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/assets/icon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/assets/icon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/assets/icon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/assets/icon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/assets/icon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/assets/icon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/assets/icon/apple-icon-precomposed.png',
      },
    ],
  },
  manifest: '/assets/icon/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/assets/icon/ms-icon-144x144.png',
    'msapplication-config': '/assets/icon/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
