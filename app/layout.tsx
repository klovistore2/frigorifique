import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JumpArena - Unleash the Bounce",
  description: "Experience the ultimate trampoline adventure at JumpArena!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen`}
      >
        <Menu />
          
        <main>{children}</main>

        

        <Footer />  
        <Breadcrumb />
      </body>
    </html>
  );
}
