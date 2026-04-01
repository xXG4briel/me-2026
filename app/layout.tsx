import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import "./globals.scss";
import CustomCursor from "@/components/CustomCursor";
import { personal, ui } from "@/lib/portfolio-data";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personal.name} — ${ui.en.role}`,
  description: `Portfolio of ${personal.name}, ${ui.en.tagline}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-primary font-mono antialiased cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
