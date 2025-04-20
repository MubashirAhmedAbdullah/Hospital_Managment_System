"use client"

import { useState } from 'react'
import { ArrowRight, Lock, User } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import Image from 'next/image'
import { Checkbox } from '@/Components/ui/checkbox'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempted with:', email, password, 'Remember me:', rememberMe)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dbeafe] px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-10 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#007BFF]">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Login to access your Mansoori Hospital account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="doctor@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]" size={18} />
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]" size={18} />
            </div>

            <div className="flex items-center justify-between text-sm text-[#007BFF]">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                />
                <label htmlFor="remember" className="cursor-pointer">Remember me</label>
              </div>
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
            </div>

            <Button type="submit" className="w-full p-5 text-base bg-[#007BFF] hover:bg-[#005FCC]">
              Log In
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <Link href="/Authentication/SignUp">
                <span className="text-blue-600 underline">Create one here</span>
              </Link>
            </p>

            <div className="flex justify-center">
              <Button className="flex items-center space-x-3 bg-white border text-[#007BFF] hover:bg-gray-100 px-4 py-5 w-full">
                <Image
                  src="/Google_Icons-09-512.jpg"
                  alt="Google"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm font-semibold">Continue with Google</span>
              </Button>
            </div>
          </form>
        </div>

        {/* Right: Image + Slogan */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex flex-col items-center justify-center p-8 space-y-6">
          <Image
            src="/istockphoto-2158610739-612x612-removebg-preview.png"
            height={320}
            width={320}
            alt="Doctor Illustration"
            className="mx-auto"
          />
          <h3 className="text-2xl font-semibold text-center leading-snug">
            Empowering Smart Care<br /> Through Digital Innovation
          </h3>
          <p className="text-sm text-center text-blue-100 max-w-xs">
            Welcome to <br /> Mansoori Hospital Management System <br /> crafted for efficiency, care, and the future of health tech.
          </p>
        </div>
      </div>
    </div>
  )
}
