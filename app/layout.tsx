import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "KO MartialartsUnit (KOMAU) | Muay Thai & BJJ",
  description: "Join KO MartialartsUnit for authentic Muay Thai and Brazilian Jiu-Jitsu training. Strength, discipline, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} bg-dark-900 text-text-primary font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
