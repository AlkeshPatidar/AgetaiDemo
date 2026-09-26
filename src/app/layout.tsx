import type { Metadata } from "next";
import { Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--nf-jakarta",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--nf-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--nf-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo application built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Sidebar />
        <div className="flex min-h-screen flex-col md:pl-20">
          <TopBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
