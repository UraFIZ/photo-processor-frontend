import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenCard Photo Processor",
  description: "Professional photo processing for GreenCard applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add base tag for correct asset paths */}
        <base href="/photo-processor-frontend/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}