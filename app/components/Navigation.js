"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { getCurrentUser, signOutUser } from "./../firebase/auth"

function Navigation() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user)
      console.log(user)
    })
  }, [])

  if (user) {
    return (
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Flexi</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href="/about">
              About
            </Link>
            <Link className="mr-5 hover:text-white" href="/dashboard">
              Dashboard
            </Link>
            <button
              className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4"
              onClick={async () => {
                await signOutUser()
                window.location.reload()
              }}
            >
              Sign Out
            </button>
          </nav>
        </div>
      </div>
    )
  } else {
    return (
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Flexi</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href="/about">
              About
            </Link>
            <Link className="mr-5 hover:text-white" href="/dashboard">
              Dashboard
            </Link>
            <Link className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4" href="/signup">
              Sign Up
            </Link>
            <Link className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4" href="/signin">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navigation
