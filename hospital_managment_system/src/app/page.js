import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaCalendarAlt, FaUserMd, FaFileMedical, FaBook, FaCommentMedical, FaCog } from 'react-icons/fa';




export default function Home() {
  return (
    <div>
      <section className="hero-section  py-20 px-6 md:px-12 lg:px-24 text-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:justify-between gap-16">
          {/* Text Content */}
          <div className="text-content lg:w-1/2 mb-10 mt-5 lg:mb-0">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 leading-tight">
              Effortless Healthcare Management at Your Fingertips
            </h1>
            <p className="text-gray-700 text-lg mb-8 mx-auto lg:mx-0 max-w-xl">
              Experience a seamless connection between patients and doctors with instant appointment booking, insightful articles, and personalized healthcare management.
            </p>
            <div className="flex justify-center lg:justify-start gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300">
                Book an Appointment
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300">
                Join as a Doctor
              </button>
            </div>
          </div>

          <div className="image-content lg:w-1/2">
            <Image
              src={'/hero.jpg'}
              height={500}
              width={500}
              alt="hero Image"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="key-features-section bg-gary-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Key Features</h2>
          <p className="text-gray-600 text-lg">
            Discover how our system makes healthcare management simple and efficient for everyone.
          </p>
        </div>

        <div className="features-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Easy Appointment Scheduling */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaCalendarCheck className="w-12 h-12 mx-auto" style={{ color: "blue" }} />

            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Easy Appointment Scheduling</h3>
            <p className="text-gray-600">
              Book or manage appointments instantly with a seamless interface designed for convenience.
            </p>
          </div>

          {/* Feature 2: Doctor Directory */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaHospitalUser className="w-12 h-12 mx-auto" style={{ color: "blue" }} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Doctor Directory</h3>
            <p className="text-gray-600">
              Browse and connect with qualified doctors easily for a wide range of healthcare needs.
            </p>
          </div>

          {/* Feature 3: Health Articles */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <GiOpenBook className="w-12 h-12 mx-auto" style={{ color: "blue" }} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Health Articles</h3>
            <p className="text-gray-600">
              Access valuable health tips and articles to stay informed and take control of your health.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-gary-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">User Guide</h2>
          <p className="text-gray-600 text-lg">
            Follow these simple steps to start managing your healthcare seamlessly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaUserPlus className="w-12 h-12 mx-auto" style={{ color: "blue"}} />

            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Create an Account</h3>
            <p className="text-gray-600">
              Sign up with your personal information to start your healthcare journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaStethoscope className="w-12 h-12 mx-auto" style={{color: "blue"}}/>
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Choose a Doctor or Browse Articles</h3>
            <p className="text-gray-600">
              Find the right doctor or explore informative articles to stay healthy.
            </p>
          </div>

          {/* Step 3 */}

          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              {/* <i className="fas fa-calendar-check text-orange-600 text-5xl"></i> */}
              <FaCalendarCheck className="w-12 h-12 mx-auto" style={{color: "blue"}}/>
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Book or Manage Appointments</h3>
            <p className="text-gray-600">
              Schedule, view, or manage your appointments conveniently online.
            </p>
          </div>

        </div>
      </section>

      <section className="quick-access bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
  <div className="container mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold text-blue-900 mb-8">Quick Access Toolbar</h2>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {/* Toolbar Item Template */}
    {[
      { icon: FaCalendarAlt, label: "Appointments" },
      { icon: FaUserMd, label: "Find Doctors" },
      { icon: FaFileMedical, label: "My Records" },
      { icon: FaBook, label: "Articles" },
      { icon: FaCommentMedical, label: "Consultations" },
      { icon: FaCog, label: "Settings" },
    ].map((item, index) => (
      <div key={index} className="toolbar-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg text-center">
        <div className="icon mb-4 inline-block p-4 bg-blue-100 rounded-full">
          <item.icon className="text-blue-600 text-4xl" />
        </div>
        <h3 className="text-lg font-semibold text-blue-800">{item.label}</h3>
      </div>
    ))}
  </div>
</section>



    </div>
  );
}
