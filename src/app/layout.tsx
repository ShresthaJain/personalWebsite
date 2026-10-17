import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Book from "@/components/book/Book";

export const metadata: Metadata = {
  title: "Shrestha Jain",
  description:
    "Computer science student at Georgia Tech working in AI/ML, software engineering, and medical technology.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#BEE3CD", color: "#0F4A33" }}>
        <Book />
        {children}
      </body>
    </html>
  );
}
