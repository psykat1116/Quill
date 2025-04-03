import "./globals.css";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ConvexClientProvider } from "@/store/ConvexClientProvider";
import { Toaster } from "sonner";

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
  applicationName: "Quill",
  authors: {
    name: "Saikat Samanta",
    url: "https://portfolio-one-gilt-34.vercel.app/",
  },
  creator: "Saikat Samanta",
  keywords: [
    "Quill",
    "Document Writer",
    "Google Docs Clone",
    "Liveblocks Application",
    "covex application",
    "document",
    "document writer",
    "tiptap editor",
    "tiptap editor application",
    "document generator",
  ],
  openGraph: {
    title: "Quill | Seamless Writing & Real-Time Collaboration",
    description:
      "Quill is an advanced, AI-powered document editor designed for effortless writing, editing, and real-time collaboration. Whether you're drafting reports, brainstorming ideas, or co-writing with a team, Quill keeps everything fluid and organized. With intelligent formatting, seamless cloud sync, and distraction-free design, you can focus on what truly matters—your words. Write smarter, collaborate faster, and bring ideas to life with Quill. ✍️🚀",
    url: "",
    siteName: "Quill",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Quill - Document Writer",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ConvexClientProvider>
          <NuqsAdapter>
            <Toaster duration={7000} closeButton />
            {children}
          </NuqsAdapter>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
