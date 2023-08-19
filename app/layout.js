"use client"

import "./globals.css"
import { Suspense } from "react"
import localFont from "next/font/local"
import { useRef } from "react"
///////////////// COMPONENTS
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Navigation from "./components/Navigation"
import { SignInForm } from "./components/signInForm"
//////////////// META DATA
export const metadata = {
  title: "Flexi Fitness AI",
  description: "Achieve your fitness goals with Flexi AI"
}

//////////////// FONTS
const chipen = localFont({
  subsets: ["latin"],
  src: "./public/fonts/Chipen-Regular.woff",
  display: "swap",
  variable: "--font-chipen"
})
const blackpast = localFont({
  subsets: ["latin"],
  src: "./public/fonts/blackpast-blackpast-400.ttf",
  display: "swap",
  variable: "--font-blackpast"
})
const simplifica = localFont({
  subsets: ["latin"],
  src: "./public/fonts/simplifica.ttf",
  display: "swap",
  variable: "--font-simplifica"
})
////////////////////////////////////////////////////////////////////////////////////////////

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chipen.variable} ${blackpast.variable} ${simplifica.variable}`}>
      <body className="">
        <Navigation />

        {children}
        <Suspense fallback={null}></Suspense>
        <Footer />
      </body>
    </html>
  )
}
