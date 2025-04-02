import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Quill | Seamless Writing & Real-Time Collaboration",
  description:
    "Quill is an advanced, AI-powered document editor designed for effortless writing, editing, and real-time collaboration. Whether you're drafting reports, brainstorming ideas, or co-writing with a team, Quill keeps everything fluid and organized. With intelligent formatting, seamless cloud sync, and distraction-free design, you can focus on what truly matters—your words. Write smarter, collaborate faster, and bring ideas to life with Quill. ✍️🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <NuqsAdapter>
        <html lang="en">
          <body className={`${poppins.className} antialiased`}>{children}</body>
        </html>
      </NuqsAdapter>
    </ClerkProvider>
  );
}
