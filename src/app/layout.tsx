import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "../components/SmoothScrollProvider";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Origin - Digital Agency",
  description: "We blend culture and technology to create digital experiences that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/Aeonik Font/New Aeonik Trials/AeonikTRIAL-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Aeonik Font/New Aeonik Trials/AeonikTRIAL-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <PerformanceOptimizer />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
