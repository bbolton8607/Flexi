"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <Link href="/">Logo</Link>
          <Link href="/login">Sign Up</Link>
          <Link href="/about">about</Link>
          <Link href="/dashboard">dashboard</Link>
        </div>
      </div>
    </footer>
  )

  return null
}
