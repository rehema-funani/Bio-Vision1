// pages/contact.js
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, DollarSign, GraduationCap, Heart, Leaf, Smile, Sprout, Users } from "lucide-react";


export default function Contact() {
    const pathname = usePathname();
      const [searchQuery, setSearchQuery] = useState("");
       const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Our Mission", href: "/mission" },
        { name: "Shop", href: "/shop" },
        { name: "Resources", href: "/resources" },
        { name: "Outlets", href: "/outlets" },
        { name: "Surveys", href: "/surveys" },
        { name: "Events", href: "/events" },
        { name: "Contact Us", href: "/contact" },
      ];
  return (
    <div className="min-h-screen bg-white text-gray-800">
         {/* ✅ Fixed Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
              alt="Biovision Africa Trust"
              className="h-12 md:h-14 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  className={`text-sm font-semibold px-2 transition ${
                    pathname === item.href
                      ? "text-green-500"
                      : "text-white hover:text-green-400"
                  }`}
                >
                  {item.name}
                </Link>
                {index < navigationItems.length - 1 && (
                  <span className="h-6 w-px bg-white/40 mx-2" />
                )}
              </div>
            ))}
          </nav>

          {/* Search + Sign Up */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-white/50 text-sm px-4 py-2 w-32 focus:outline-none"
              />
              <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 transition">
                Search
              </button>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      {/* Contact Form */}
      <div className="mt-24 max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Get in Touch with Us.</h1>
        <p className="text-2xl text-green-600 font-semibold mb-8">We’re here to help.</p>

        <form className="space-y-6">
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Contact Us
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="bg-green-100 py-10 px-4 mt-12 h-60">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
          {/* Message */}
          <div>
            <p className="text-xl font-semibold">
              We are always <span className="text-green-600">happy</span> to assist you.
            </p>
          </div>

          {/* Address & Email */}
          <div className="space-y-2 text-gray-700 text-sm">
            <p><strong>Email:</strong> info@biovisionafricatrust.org</p>
            <p><strong>Location:</strong><br />Duduville Campus,<br />Kasarani, Nairobi, Kenya</p>
          </div>

          {/* Phone & Hours */}
          <div className="space-y-2 text-gray-700 text-sm">
            <p><strong>Phone:</strong> +254 (0) 20 632 4806</p>
            <p><strong>Hours:</strong><br />
              Mon - Fri: 8:00 AM – 5:00 PM EAT<br />
              Sat: 9:00 AM – 1:00 PM EAT<br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
{/* ✅ Newsletter Section */}
<section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* Left side - Newsletter info */}
    <div className="flex items-center gap-4 text-white">
      <div className="flex-shrink-0">
        {/* Email icon */}
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Join the Movement
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          Get updates on AE/EOA events, stories, outlets, and resources that empower African farmers.
        </p>
      </div>
    </div>

    {/* Right side - Email signup form */}
    <div className="flex w-full md:w-auto min-w-80">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      />
      <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-full font-medium text-sm transition-colors duration-300">
        Subscribe
      </button>
    </div>
  </div>
</section>
{/* ✅ Footer Section */}
{/* ✅ Footer Section */}
        {/* Main Footer Section */}
     {/* ✅ Footer Section */}
<footer className="bg-[#24231D] py-8 px-4 md:px-8 lg:px-12">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
                {/* Logo */}
                <div className="mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
                                alt="Biovision Africa Trust"
                                className="h-12 object-contain filter brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">
                    Growing Africa's Future Through Sustainable Agriculture
                </h4>
                <p className="text-white font-bold text-sm leading-relaxed mb-4">
                    We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
                </p>
                
                {/* Social Media Links */}
                <div className="flex gap-2">
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                    </button>
                    <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Explore Links */}
            <div>
                <h5 className="text-base font-semibold text-white mb-4">Explore</h5>
                <ul className="space-y-2">
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Our Mission</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Shop</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Learn</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> FAQs</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Press & Media</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Career</a></li>
                    <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Become a Partner</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h5 className="text-base font-semibold text-white mb-4">Contact</h5>
                <div className="space-y-2 text-white font-bold text-sm">
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+254 (0) 20 632 4806</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>info@biovisionafricatrust.org</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <p>P.O. Box 12345, Nairobi, Kenya</p>
                        </div>
                    </div>
                    
                    <div className="pt-2 space-y-0.5 text-xs">
                        <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
                        <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
                        <p><span className="text-white font-bold">Sunday:</span> Closed</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-yellow-500 text-xs font-medium">
                © 2025 BioVision Africa Trust. All Rights Reserved.
            </p>
            <div className="flex gap-3 text-xs">
                <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
    </div>
  );
}
