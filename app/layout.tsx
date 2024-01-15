import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import NextAuthProvider from "./context/next-auth-provider";
import ClientFont from "./components/atoms/client-font";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
const dmMono = DM_Mono({
  weight: ["400"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "AstroQuiz",
  description: "Jugá y aprendé astrología!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-mb-light-gray ${inter.variable} ${dmMono.variable}`}>
        <ClientFont />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
