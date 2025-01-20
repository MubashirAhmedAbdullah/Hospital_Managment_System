import Image from "next/image";
import { FaCalendarCheck, FaHeartbeat, FaRegHandshake, FaTag, FaUserMd, FaUsers } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { Card, Button, Row, Col } from 'antd';
import { doctors, quickAction } from "@/lib/data";
import Link from "next/link";




export default function Home() {
  return (
    <div>
      <section className="hero-section  py-20 px-6 md:px-12 lg:px-24 text-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:justify-between gap-16">
          {/* Text Content */}
          <div className="text-content lg:w-1/2 mb-10 mt-5 lg:mb-0">
            <h1 className="text-4xl font-bold text-[#22A3FE] mb-6 leading-tight">
              Effortless Healthcare Management at Your Fingertips
            </h1>
            <p className="text-gray-700 text-lg mb-8 mx-auto lg:mx-0 max-w-xl">
              Experience a seamless connection between patients and doctors with instant appointment booking, insightful articles, and personalized healthcare management.
            </p>
            <div className="flex justify-center lg:justify-start gap-6">
              <button className="bg-[#22A3FE] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300">
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
          <h2 className="text-4xl font-bold text-[#22A3FE] mb-6">Key Features</h2>
          <p className="text-gray-600 text-lg">
            Discover how our system makes healthcare management simple and efficient for everyone.
          </p>
        </div>

        <div className="features-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Easy Appointment Scheduling */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaCalendarCheck className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />

            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Easy Appointment Scheduling</h3>
            <p className="text-gray-600">
              Book or manage appointments instantly with a seamless interface designed for convenience.
            </p>
          </div>

          {/* Feature 2: Doctor Directory */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaHospitalUser className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />
            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Doctor Directory</h3>
            <p className="text-gray-600">
              Browse and connect with qualified doctors easily for a wide range of healthcare needs.
            </p>
          </div>

          {/* Feature 3: Health Articles */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <GiOpenBook className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />
            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Health Articles</h3>
            <p className="text-gray-600">
              Access valuable health tips and articles to stay informed and take control of your health.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-gary-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#22A3FE] mb-6">User Guide</h2>
          <p className="text-gray-600 text-lg">
            Follow these simple steps to start managing your healthcare seamlessly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaUserPlus className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />

            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Create an Account</h3>
            <p className="text-gray-600">
              Sign up with your personal information to start your healthcare journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              <FaStethoscope className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />
            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Choose a Doctor or Browse Articles</h3>
            <p className="text-gray-600">
              Find the right doctor or explore informative articles to stay healthy.
            </p>
          </div>

          {/* Step 3 */}

          <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="icon mb-4">
              {/* <i className="fas fa-calendar-check text-orange-600 text-5xl"></i> */}
              <FaCalendarCheck className="w-12 h-12 mx-auto" style={{ color: "#22A3FE" }} />
            </div>
            <h3 className="text-2xl font-semibold text-[#22A3FE] mb-4">Book or Manage Appointments</h3>
            <p className="text-gray-600">
              Schedule, view, or manage your appointments conveniently online.
            </p>
          </div>

        </div>
      </section>



      <section className="doctors-list-section bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-8">Meet Our Experts</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Our highly skilled and experienced doctors are here to provide you with the best care.
          </p>

          {/* Display doctors as cards using Ant Design Card component */}
          <Row gutter={[16, 16]} justify="center">
            {doctors.map((doctor) => (
              <Col xs={24} sm={12} md={8} lg={6} key={doctor.id}>
                <Card
                  hoverable
                  cover={
                    // <img
                    //   alt={doctor.name}
                    //   src={doctor.image}
                    //   className="w-full h-48 object-cover rounded-lg"
                    // />
                    <Image src={doctor.image} alt={doctor.name} height={80} width={1000} className="w-full h-48 object-cover rounded-lg"/>
                  }
                  className="doctor-card"
                  style={{ width: '100%' }}
                >
                  <h3 className="text-xl font-semibold text-blue-700">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <Link href={`/doctor-details/${doctor.id}`}>
                    <Button type="primary" className="w-full mt-4">
                      View Details
                    </Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="quick-access bg-gray-100 py-12 px-6 md:px-16 lg:px-20">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-[#22A3FE] mb-8">Quick Access Toolbar</h2>
        </div>

        <div className="flex gap-6 px-4">
          {quickAction.map((item, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-w-[250px]"
            >
              <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full">
                <item.icon className="text-3xl text-[#22A3FE]" />
              </div>
              <p className="mt-4 text-center text-lg font-medium text-gray-700">{item.label}</p>
              <p className="text-center text-sm text-gray-600 mb-4">{item.description}</p>
              <Button
                type="primary"
                className="w-full bg-[#22A3FE] text-white hover:bg-blue-700"
              >
                {item.action}
              </Button>
            </Card>
          ))}
        </div>
      </section>


      <section className="py-12 px-6 md:px-16 lg:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#22A3FE] mb-6">Exclusive Offers & Promotions</h2>
          <p className="text-lg text-gray-700 mb-10">
            Enhance your healthcare journey with our limited-time offers and personalized deals.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Offer Card 1 */}
            <div className="offer-card bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
              <div className="flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
                <FaRegHandshake className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#22A3FE] mb-2">Free Consultation</h3>
              <p className="text-gray-600 mb-4">
                Enjoy your first consultation at zero cost with top-rated healthcare professionals.
              </p>
              <Button type="primary" className="w-full bg-[#22A3FE] text-white hover:bg-blue-700">
                Book Now
              </Button>
            </div>

            {/* Offer Card 2 */}
            <div className="offer-card bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
              <div className="icon-container flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
                <FaTag className="text-[#22A3FE] text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#22A3FE] mb-2">Appointment Discounts</h3>
              <p className="text-gray-600 mb-4">
                Save up to 30% on specialist consultations this month. Don't miss out!
              </p>
              <Button type="primary" className="w-full bg-[#22A3FE] text-white hover:bg-blue-700">
                Get Discount
              </Button>
            </div>

            {/* Offer Card 3 */}
            <div className="offer-card bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
              <div className="icon-container flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
                <FaHeartbeat className="text-[#22A3FE] text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#22A3FE] mb-2">Health Packages</h3>
              <p className="text-gray-600 mb-4">
                Explore affordable health checkup bundles for you and your family.
              </p>
              <Button type="primary" className="w-full bg-[#22A3FE] text-white hover:bg-blue-700">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>


      







    </div>
  );
}
