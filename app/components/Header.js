"use client"

import React from "react"
import Link from "next/link"

export function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" href="/about">
            About
          </Link>
          <Link className="mr-5 hover:text-white" href="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-5 hover:text-white" href="/signup">
            Sign Up
          </Link>
          <Link className="mr-5 hover:text-white" href="/login">
            Login
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button</button>
      </div>
    </header>
  )

  return null
}
