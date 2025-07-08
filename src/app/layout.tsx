import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
