import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./../components/navbar/Navbar";

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
  title: "Barishal Tech Support",
  description: "Barishal Tech Support offers expert services tailored to diverse business needs, including Electrical Control & Power Circuit Support, AC Services, CCTV Surveillance, Fire System Solutions, and IT Support for Web Development",
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
        </div>
      </body>
    </html>
  );
}
