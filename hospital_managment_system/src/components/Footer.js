import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#22A3FE] text-white py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">

          {/* Logo and Description Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 items-center text-center lg:text-left">
            <Image
              src="/logo.png" // Replace with the correct path to your logo image
              alt="HealthPlus Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            <div className="mt-4 lg:mt-0">
              <h2 className="text-3xl font-bold">HealthPlus</h2>
              <p className="text-lg mt-2 text-gray-100">
                Providing healthcare management solutions for a better tomorrow.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-12 text-center lg:text-left space-y-6 lg:space-y-0">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-100">
                <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                <li><a href="#doctors" className="hover:text-gray-300">Doctors</a></li>
                <li><a href="#appointments" className="hover:text-gray-300">Appointments</a></li>
                <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-gray-100">
                <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#faq" className="hover:text-gray-300">FAQs</a></li>
                <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-300">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <ul className="text-gray-100">
                <li className="flex items-center mb-2">
                  <FaPhone size={20} className="mr-3" />
                  +1 800 123 4567
                </li>
                <li className="flex items-center">
                  <FaEnvelope size={20} className="mr-3" />
                  support@healthplus.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8 text-gray-100">
          <p className="text-sm">
            &copy; 2025 HealthPlus. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with care to improve your healthcare experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
