import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#007BFF] text-white pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <Image
            src="/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png" // Replace with the correct path to your logo
            alt="Mansoori HMS Logo"
            width={80}
            height={80}
            className="mb-4 rounded-full"
          />
          <h2 className="text-2xl font-bold mb-2">Mansoori HMS</h2>
          <p className="text-gray-200">
            Empowering hospitals with smart, tech-driven healthcare solutions — faster, safer, smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-white pb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white/80 transition">Home</a></li>
            <li><a href="#about" className="hover:text-white/80 transition">About</a></li>
            <li><a href="#features" className="hover:text-white/80 transition">Features</a></li>
            <li><a href="#contact" className="hover:text-white/80 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        {/* <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-white pb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white/80 transition">User Guide</a></li>
            <li><a href="#" className="hover:text-white/80 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white/80 transition">Support</a></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-white pb-2">Contact Us</h3>
          <p>Email: <a href="mailto:support@mansoorihms.com" className="underline">support@mansoorihms.com</a></p>
          <p className="mt-2">Phone: +91 12345 67890</p>
          <p className="mt-2">Location: New Delhi, India</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-200 border-t border-white/20 pt-6 text-sm">
        © {new Date().getFullYear()} Mansoori Hospital Management. All rights reserved.
      </div>
    </footer>
  );
}
