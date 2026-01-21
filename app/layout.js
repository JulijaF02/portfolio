import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata = {
  title: "Julija Filipović | Unity Developer",
  description: "Unity Developer specializing in high-end mobile game advertising and modular production systems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${spaceMono.variable} bg-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
