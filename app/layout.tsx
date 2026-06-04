import type { Metadata } from "next";
import { ReactNode } from "react";
import './globals.css';
import {Press_Start_2P} from "next/font/google"

export const metadata: Metadata = {
  title: "Final Fantasy Menu",
  description: "FFVII Retro UI",
};


const font = Press_Start_2P({
    weight: '400',
    subsets: ['latin']    
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning className={font.className}>
        {children}
      </body>
    </html>
  )
}