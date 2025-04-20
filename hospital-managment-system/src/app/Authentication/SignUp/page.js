import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dbeafe] px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2 p-10 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#007BFF]">Sign Up</h2>
            <p className="text-gray-500 text-sm mt-1">Create an account and join the digital revolution in healthcare.</p>
          </div>

          <form className="space-y-4">
            <Input type="text" placeholder="Daniel Ahmad" />
            <Input type="email" placeholder="danielahmad@gmail.com" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />

            <Button className="w-full p-5 text-base bg-[#007BFF] hover:bg-[#005FCC]">
              Sign Up
            </Button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/Authentication/Login">
                <span className="text-blue-600 underline">Sign in</span>
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
            Welcome to <br/> Mansoori Hospital Management System <br/> crafted for efficiency, care, and the future of health tech.
          </p>
        </div>
      </div>
    </div>
  );
}
