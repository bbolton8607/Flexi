"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { signUpUserWithEmailAndPassword, getCurrentUser } from "../firebase/auth.js"

function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" })

  const onFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onFormDataSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
    } else {
      await signUpUserWithEmailAndPassword(formData.email, formData.password)
      router.push("/")
    }
  }

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        router.replace("/")
      }
    })
  }, [router])

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
        </div>
        <form action="" id="signup-form">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="p-2">
              <div className="relative">
                <label htmlFor="signup-email" className="leading-7 text-sm text-gray-600">
                  Email Address
                </label>
                <input type="email" name="email" id="signup-email" value={formData["email"]} onChange={onFormDataChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label htmlFor="signup-password" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input type="password" name="password" id="signup-password" value={formData["password"]} onChange={onFormDataChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label htmlFor="confirmPassword" className="leading-7 text-sm text-gray-600">
                  Confirm Password
                </label>
                <input type="password" name="confirmPassword" id="" value={formData["confirmPassword"]} onChange={onFormDataChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="button" onClick={onFormDataSubmit} className="flex mx-auto text-white bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-purple rounded text-lg">
                Sign Up!
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUpForm
