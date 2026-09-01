import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat Road Intelligence | Fleet Control Centre",
  description: "Predictive road quality, live hazard mapping, and fleet risk intelligence for Indian roads.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "BRI",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
