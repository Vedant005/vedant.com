import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OnekoCat from "./components/OnekoCat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedantk.vercel.app/"),
  title: {
    default: "Vedant's Portfolio",
    template: "%s | Vedant",
  },
  description:
    "Vedant — Full Stack Developer. Building scalable web applications with React, Next.js, Node.js, and modern tech.",

  openGraph: {
    title: "Vedant's Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects, blogs, and experience.",
    url: "https://vedantk.vercel.app/",
    siteName: "Vedant's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vedant's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vedant's Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects, blogs, and experience.",
    images: ["/og-image.jpg"],
    creator: "@VedantKane56217",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  authors: [{ name: "Vedant" }],
  creator: "Vedant",
  publisher: "Vedant",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        {children}
        <OnekoCat/>
      </body>
    </html>
  );
}