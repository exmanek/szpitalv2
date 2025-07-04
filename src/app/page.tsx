'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Department {
name: string
icon: string
doctors: number
link: string
}

interface StatItem {
value: string
label: string
icon: string
}

export default function HomePage() {
const [departments] = useState<Department[]>([
{ name: 'Emergency', icon: '🚑', doctors: 12, link: '/emergency' },
{ name: 'Cardiology', icon: '❤️', doctors: 8, link: '/cardiology' },
{ name: 'Pediatrics', icon: '👶', doctors: 6, link: '/pediatrics' },
{ name: 'Neurology', icon: '🧠', doctors: 5, link: '/neurology' },
])

const [stats] = useState<StatItem[]>([
{ value: '24/7', label: 'Emergency Service', icon: '⏰' },
{ value: '150+', label: 'Specialized Doctors', icon: '👨‍⚕️' },
{ value: '500+', label: 'Happy Patients', icon: '😊' },
{ value: '10+', label: 'Medical Departments', icon: '🏥' },
])

return (
<div className="min-h-screen flex flex-col">
{/* Navigation */}
<nav className="bg-white shadow-sm py-4">
<div className="container mx-auto px-4 flex justify-between items-center">
<Link href="/" className="flex items-center space-x-2">
<Image
           src="https://placehold.co/40x40"
           alt="Hospital logo - modern abstract medical cross symbol"
           width={40}
           height={40}
           className="rounded-full"
         />
<span className="text-xl font-bold text-blue-600">City General Hospital</span>
</Link>
<div className="hidden md:flex space-x-6">
<Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
<Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
<Link href="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Doctors</Link>
<Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
</div>
<Link href="/login" className="btn-secondary">
Patient Portal
</Link>
</div>
</nav>

  {/* Hero Section */}

  <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

      <div className="md:w-1/2 mb-10 md:mb-0">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">

          Advanced Medical Care <br />With Compassion

        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-lg">

          Our hospital provides the highest quality healthcare services using cutting-edge technology and personalized approach.

        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link href="/appointment" className="btn-primary">

            Book Appointment

          </Link>

          <Link 

            href="/departments" 

            className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-blue-600"

          >

            Our Departments

          </Link>

        </div>

      </div>

      <div className="md:w-1/2 flex justify-center">

      <Image

        src="https://placehold.co/40x40"

        alt="Hospital logo - modern abstract medical cross symbol"

        width={40}

        height={40}

        className="rounded-full"

      />


      </div>

    </div>

  </section>


  {/* Stats Section */}

  <section className="py-16 bg-white">

    <div className="container mx-auto px-4">

      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Hospital</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((stat, index) => (

          <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">

            <div className="text-3xl mb-3">{stat.icon}</div>

            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>

            <div className="text-gray-600">{stat.label}</div>

          </div>

        ))}

      </div>

    </div>

  </section>


  {/* Departments Section */}

  <section className="py-16 bg-gray-50">

    <div className="container mx-auto px-4">

      <h2 className="text-3xl font-bold text-center mb-12">Medical Departments</h2>

      

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {departments.map((dept, index) => (

          <Link 

            href={dept.link} 

            key={index} 

            className="hospital-card hover:-translate-y-1"

          >

            <div className="p-6">

              <div className="text-4xl mb-4">{dept.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>

              <p className="text-gray-600 mb-4">

                {dept.doctors} specialist {dept.doctors === 1 ? 'doctor' : 'doctors'} available

              </p>

              <div className="text-blue-600 hover:underline font-medium flex items-center">

                View Details 

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">

                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />

                </svg>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  </section>


  {/* Emergency Section */}

  <section className="py-16 bg-white">

    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

      <div className="md:w-1/2 mb-8 md:mb-0">

           <Image

              src="https://placehold.co/40x40"

              alt="Hospital logo - modern abstract medical cross symbol"

              width={40}

              height={40}

              className="rounded-full"

            />


      </div>

      <div className="md:w-1/2 md:pl-12">

        <h2 className="text-3xl font-bold mb-6">24/7 Emergency Services</h2>

        <p className="text-lg mb-6 text-gray-700">

          Our emergency department is staffed by board-certified emergency physicians ready to provide immediate care for serious illnesses and injuries.

        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">

          <p className="font-semibold text-red-800">In case of emergency:</p>

          <p className="text-2xl font-bold text-red-600">Call +48 123 456 789</p>

        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link href="/emergency" className="btn-primary bg-red-600 hover:bg-red-700">

            Emergency Information

          </Link>

          <Link href="/emergency-contacts" className="btn-secondary border-red-600 text-red-600 hover:bg-red-50">

            Emergency Contacts

          </Link>

        </div>

      </div>

    </div>

  </section>


  {/* Footer */}

  <footer className="bg-gray-800 text-white py-12 mt-auto">

    <div className="container mx-auto px-4">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>

          <h3 className="text-xl font-bold mb-4">City General Hospital</h3>

          <p className="text-gray-300">Providing exceptional healthcare since 1985.</p>

        </div>

        <div>

          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2">

            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>

            <li><Link href="/doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</Link></li>

            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>

            <li><Link href="/appointment" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link></li>

          </ul>

        </div>

        <div>

          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          <address className="text-gray-300 not-italic">

            <p>123 Medical Avenue</p>

            <p>Warsaw, Poland</p>

            <p>Phone: +48 123 456 789</p>

            <p>Email: contact@hospital.example</p>

          </address>

        </div>

        <div>

          <h4 className="text-lg font-semibold mb-4">Emergency</h4>

          <p className="text-gray-300 mb-2">24/7 Emergency Department</p>

          <p className="text-xl font-bold text-red-400">+48 987 654 321</p>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">

        <p>© {new Date().getFullYear()} City General Hospital. All rights reserved.</p>

      </div>

    </div>

  </footer>

</div>

)
}

