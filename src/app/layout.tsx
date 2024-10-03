import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./../components/navbar/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SouthZone Tech Solution",
  description:
    "SouthZone Tech Solution offers expert electrical control systems, HVAC services, security solutions, and full-stack web development. Enhance your business efficiency, security, and digital presence with our customized solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen flex flex-col ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
