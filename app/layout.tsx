import type { Metadata } from "next";
import { ReactNode } from "react";
import './globals.css';

export const metadata: Metadata = {
  title: "Final Fantasy Menu",
  description: "FFVII Retro UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}