import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dbeafe] px-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Sign Up Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <p className="text-muted-foreground mb-6">Sign up for free and experience our ecosystem</p>

          <form className="space-y-4">
            <Input type="text" placeholder="Daniel Ahmad" />
            <Input type="email" placeholder="danielahmad@gmail.com" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />

            <Button className="w-full">Sign Up</Button>

            <p className="text-sm text-center text-muted-foreground pt-2">
              Already have an account? <a href="#" className="text-blue-600 underline">Sign in</a>
            </p>

            <div className="flex justify-center space-x-4 pt-4">
              <Image src="/icons/google.png" width={24} height={24} alt="Google" className="cursor-pointer" />
              <Image src="/icons/facebook.png" width={24} height={24} alt="Facebook" className="cursor-pointer" />
            </div>
          </form>
        </div>

        {/* Right Side: Decorative Content */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-blue-500 text-white relative p-10 flex flex-col justify-between gap-6">
          {/* Top Social Icons */}
          <div className="absolute top-5 right-5 flex space-x-4">
            <Image src="/icons/instagram.png" width={24} height={24} alt="Instagram" />
            <Image src="/icons/tiktok.png" width={24} height={24} alt="TikTok" />
          </div>

          {/* Main Card with Graph Placeholder */}
          <div className="flex justify-center items-center flex-grow">
            <Card className="w-60">
              <CardContent className="text-center pt-6">
                <p className="text-2xl font-bold text-black">176.18</p>
                <div className="h-24 mt-4 bg-gray-100 rounded-md text-gray-500 flex items-center justify-center">
                  📊 Chart
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Card */}
          <Card className="w-64">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-black mb-1">Your data, your rules</h4>
              <p className="text-sm text-muted-foreground">
                We care about your privacy and how your personal data is used.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
