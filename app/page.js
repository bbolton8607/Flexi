"use client"

import Link from "next/link"
import Image from "next/image"
import heroImage from "./public/images/GangstaLyfe.jpg"
import mountain from "./public/images/automatemelogo.png"
import localFont from "next/font/local"
import React, { useRef } from "react"
import { addDoc, collection } from "@firebase/firestore"

// FONTS
const myFont = localFont({
  subsets: ["latin"],
  src: "./public/fonts/Chipen-Regular.woff",
  display: "swap"
})

export default function Home() {
  const messageRef = useRef()
  // const ref = collection(firestore, "messages")

  const handleSave = async (e) => {
    e.preventDefault()
    console.log(messageRef.current.value)

    let data = {
      message: messageRef.current.value
    }

    try {
      addDoc(ref, data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={`font-simplifica`}>
      <section>
        <form onSubmit={handleSave}>
          <label htmlFor="">Enter Message</label>
          <input type="text" ref={messageRef} />
          <button type="submit">Save</button>
        </form>
      </section>
      <section className={` hero bg-orange`}>
        <div className="container mx-auto flex space-between">
          <div className="hero-description">
            <h1>#1 AI Driven Fitness App!!!!!!!</h1>
            <h2>
              <strong>Reach your goals</strong> with your personal PT!
            </h2>
            <h4>customize your workout, nutrition, & calorie tracker</h4>
            <Link href="/register">
              <button className="bg-slate-400 rounded-full">Sign Up</button>
            </Link>
          </div>
          <div className="hero-image">
            <Image src={heroImage} alt="gangsta" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="reviews bg-blue-700" style={{ height: 700 + "px" }}>
        <Image src={mountain} alt="Mountain Logo" width={500} height={500} />
        <div className="container mx-auto px-4 place-items-center">
          <h2>Over 5 million users!</h2>
          <h3>Voted best fitness AI!</h3>
        </div>
      </section>
    </div>
  )
}
