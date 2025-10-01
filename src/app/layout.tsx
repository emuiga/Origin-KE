import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "../components/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next"

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
      <body className="antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
