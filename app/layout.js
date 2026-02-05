import Script from "next/script";
import Header from "@/components/Header";

export const metadata = {
  title: "AI Art Prompt Gallery - AI图像生成提示词灵感库",
  description: "精选 12,000+ Gemini、ChatGPT、Midjourney、Stable Diffusion 提示词。覆盖文案、设计、绘画全场景，免费复制，激发 AI 创作灵感。",
  keywords: ["AI art", "prompts", "Midjourney", "Stable Diffusion", "ChatGPT", "Gemini", "AI绘画", "提示词"],
  authors: [{ name: "AI Art Gallery" }],
  openGraph: {
    title: "AI Art Prompt Gallery",
    description: "精选 AI 图像生成提示词灵感库",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" data-bs-theme="dark">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="bg-black">
        <Header/>
        {children}
        <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/js/bootstrap.bundle.min.js"/>
      </body>
    </html>
  );
}
