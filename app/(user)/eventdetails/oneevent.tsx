// // pages/events.js
// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";

// export default function Event1() {
//   const pathname = usePathname();
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigationItems = [
//     { name: "Home", href: "/" },
//     { name: "Our Mission", href: "/mission" },
//     { name: "Shop", href: "/shop" },
//     { name: "Resources", href: "/resources" },
//     { name: "Outlets", href: "/outlets" },
//     { name: "Surveys", href: "/surveys" },
//     { name: "Events", href: "/events" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const eventData = [
//     {
//       title: "Getting Started with Organic Farming",
//       date: "18",
//       month: "July",
//       description:
//         "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
//       category: "Trainings & Workshops",
//       image: "farm.png",
//       datetime: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
//       cta: "Register Now",
//     },
//     {
//       title: "Organic Soil Health & Composting Workshop",
//       date: "18",
//       month: "July",
//       description:
//         "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
//       category: "Trainings & Workshops",
//       image: "soil-workshop.png",
//       datetime: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Kenya",
//       cta: "Register Now",
//     },
//     {
//       title: "AE/EOA in Practice: Online Webinar for Consumers & Advocates",
//       date: "01",
//       month: "Aug",
//       description:
//         "How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.",
//       category: "Trainings & Workshops",
//       image: "consumer-webinar.png",
//       datetime: "August 1, 2025 | 4:00 PM EAT | Online via Zoom",
//       cta: "Register Now",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
//       {/* Navbar */}
//       <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//           <div className="flex-shrink-0">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//               alt="Biovision Africa Trust"
//               className="h-12 md:h-14 object-contain"
//             />
//           </div>
//           <nav className="hidden lg:flex items-center space-x-2">
//             {navigationItems.map((item, index) => (
//               <div key={item.name} className="flex items-center">
//                 <Link
//                   href={item.href}
//                   className={`text-sm font-semibold px-2 transition ${
//                     pathname === item.href
//                       ? "text-green-500"
//                       : "text-white hover:text-green-400"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//                 {index < navigationItems.length - 1 && (
//                   <span className="h-6 w-px bg-white/40 mx-2" />
//                 )}
//               </div>
//             ))}
//           </nav>
//           <div className="flex items-center gap-4">
//             <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="bg-transparent text-white placeholder-white/50 text-sm px-4 py-2 w-32 focus:outline-none"
//               />
//               <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 transition">
//                 Search
//               </button>
//             </div>
//             <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </header>
//       {/* Upcoming Events Section */}
//       <section className="pt-28 pb-16 px-4 md:px-6 max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
//           <Link
//             href="/events"
//             className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {eventData.slice(0, 3).map((event, i) => (
//             <div
//               key={i}
//               className="relative group overflow-hidden rounded-xl shadow-lg"
//               style={{ height: "400px" }}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
//                 style={{
//                   backgroundImage: `url("/images/${event.image}")`,
//                 }}
//               />

//               {/* Dark Gradient Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1C4C36] via-[#1C4C36cc] to-transparent" />

//               {/* Date Badge */}
//               <div className="absolute top-4 right-4 bg-white rounded-lg text-green-600 text-center font-bold px-3 py-2 shadow-lg">
//                 <div className="text-2xl">{event.date}</div>
//                 <div className="text-xs uppercase">{event.month}</div>
//               </div>

//               {/* Content */}
//               <div className="absolute bottom-0 p-6 text-white">
//                 <h3 className="text-xl font-bold leading-tight mb-3">
//                   {event.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed mb-4 opacity-90">
//                   {event.description}
//                 </p>
//                 <p className="text-xs mb-4 opacity-80">{event.datetime}</p>
//                 <button className="bg-white text-green-600 text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-50 transition">
//                   {event.cta}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Page Title */}
//       <div className="text-center pb-12">
//         <h1 className="text-4xl font-bold leading-tight text-gray-800">
//           All Events & <br /> Trainings
//         </h1>
//       </div>

      

      

//       {/* CTA */}
// <div
//   className="max-w-3xl mx-auto mt-20 px-6 py-10 rounded-[20px] text-center bg-green-600 text-white mr-50"
//   style={{
//     backgroundImage: 'url("/images/veggie-pattern.png")',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//   }}
// >
//   <h3 className="text-2xl md:text-3xl font-bold mb-3">
//     Don’t Miss Our Upcoming Trainings
//   </h3>
//   <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
//     Join free webinars and in-person workshops to learn agroecology techniques from
//     experts and farmers like you.
//   </p>
//   <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition">
//     View Events
//   </button>
// </div>


//       {/* Newsletter */}
//       <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 mt-16">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="flex items-center gap-4 text-white">
//             <svg
//               className="w-12 h-12 text-green-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                                 d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>
//             <div>
//               <h2 className="text-xl font-semibold mb-1">Subscribe to Our Newsletter</h2>
//               <p className="text-sm max-w-sm">
//                 Get updates on upcoming events and trainings delivered to your inbox.
//               </p>
//             </div>
//           </div>

//           {/* Newsletter Form */}
//           <form
//             className="flex gap-2"
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Thank you for subscribing!");
//             }}
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
//             />
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 rounded-r-md hover:bg-green-700 transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//        {/* Main Footer Section */}
//     <footer className="bg-[#24231D] py-16 px-4 md:px-8 lg:px-12">
//         <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                
//                 {/* Company Info */}
//                 <div className="lg:col-span-1">
//                     {/* Logo */}
//                     <div className="mb-6">
//                         <div className="flex items-center gap-3">
//                             <div className="flex-shrink-0">
//                                 <img
//                                     src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//                                     alt="Biovision Africa Trust"
//                                     className="h-16 object-contain filter brightness-0 invert"
//                                 />
//                             </div>
//                         </div>
//                     </div>
                    
//                     <h4 className="text-xl font-bold text-white mb-4">
//                         Growing Africa's Future Through Sustainable Agriculture
//                     </h4>
//                     <p className="text-white font-bold text-base leading-relaxed mb-6">
//                         We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
//                     </p>
                    
//                     {/* Social Media Links */}
//                     <div className="flex gap-3">
//                         <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                             </svg>
//                         </button>
//                         <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                             </svg>
//                         </button>
//                         <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
//                             </svg>
//                         </button>
//                         <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Explore Links */}
//                 <div>
//                     <h5 className="text-lg font-semibold text-white mb-6">Explore</h5>
//                     <ul className="space-y-4">
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Our Mission</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Shop</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Learn</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> FAQs</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Press & Media</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Career</a></li>
//                         <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Become a Partner</a></li>
//                     </ul>
//                 </div>

//                 {/* Contact Info */}
//                 <div>
//                     <h5 className="text-lg font-semibold text-white mb-6">Contact</h5>
//                     <div className="space-y-4 text-white font-bold">
//                         <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                             </svg>
//                             <span>+254 (0) 20 632 4806</span>
//                         </div>
                        
//                         <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                             <span>info@biovisionafricatrust.org</span>
//                         </div>
                        
//                         <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             <div>
//                                 <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             <div>
//                                 <p>P.O. Box 12345, Nairobi, Kenya</p>
//                             </div>
//                         </div>
                        
//                         <div className="pt-2 space-y-1 text-sm">
//                             <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
//                             <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
//                             <p><span className="text-white font-bold">Sunday:</span> Closed</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className="text-yellow-500 text-sm font-medium">
//                     © 2025 BioVision Africa Trust. All Rights Reserved.
//                 </p>
//                 <div className="flex gap-4 text-sm">
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
//                 </div>
//             </div>
//         </div>
//     </footer>
//     </div>
//   );
// }
// pages/event-detail.js
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function EventDetail() {
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

  const upcomingEvents = [
    {
      title: "Getting Started with Organic Farming",
      date: "18",
      month: "July",
      description:
        "Discover the basics of AE/EOA, ask live questions, and connect with certified producers.",
      category: "Trainings & Workshops",
      image: "farm.png",
      datetime: "July 18, 2025 | 10:00 AM EAT | Online via Zoom",
      cta: "Register Now",
    },
    {
      title: "Organic Soil Health & Composting Workshop",
      date: "18",
      month: "July",
      description:
        "Learn how to build healthy, living soil through composting, mulching, and crop rotation.",
      category: "Trainings & Workshops",
      image: "soil-workshop.png",
      datetime: "July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Kenya",
      cta: "Register Now",
    },
    {
      title: "AE/EOA in Practice: Online Webinar for Consumers & Advocates",
      date: "01",
      month: "Aug",
      description:
        "How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and tools for conscious consumption.",
      category: "Trainings & Workshops",
      image: "consumer-webinar.png",
      datetime: "August 1, 2025 | 4:00 PM EAT | Online via Zoom",
      cta: "Register Now",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
              alt="Biovision Africa Trust"
              className="h-12 md:h-14 object-contain"
            />
          </div>
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

      

     {/* Event Header */}
<div className="mt-20 bg-[#f9fafb] min-h-screen">
  {/* Top Row: Back Button + Event Details */}
  <div className="flex items-center space-x-4 px-6 pt-6">
    {/* Back Button */}
<Link href="/events">
  <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:border-gray-500">
    &larr;
  </button>
</Link>

    {/* Event Details Label */}
    <div className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
      Event Details
    </div>
  </div>

  {/* Main Content Centered */}
  <div className="max-w-3xl mx-auto px-4 pt-10 pb-16">
    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
      Organic Soil Health &<br />
      Composting Workshop –<br />
      Karen, Nairobi
    </h1>

    {/* Image */}
    <div className="mb-10">
      <img 
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Hands holding rich soil" 
        className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Details */}
    <div className="text-base text-gray-800 space-y-2">
      <div>
        <span className="font-semibold">Category:</span> Training Workshop
      </div>
      <div>
        <span className="font-semibold">Date:</span> 18 July 2025
      </div>
    </div>
  </div>
</div>




      {/* Event Summary */}
      <section className="ml-60 px-4 md:px-6 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Summary</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Biovision Africa Trust invites farmers, agricultural educators, and curious consumers to a hands-on workshop focused on improving soil health through natural composting, cover cropping, and biological pest control.
        </p>
      </section>

      {/* What You'll Learn */}
      <section className="ml-60 px-4 md:px-6 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
        <ul className="space-y-3 text-gray-600 max-w-4xl">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>How to make and manage compost at home or on your farm</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Tips on natural fertilizers & nutrient cycling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Soil structure testing (hands-on demo)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Benefits of organic matter for climate resilience</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>AE/EOA standards and where to get certified</span>
          </li>
        </ul>
      </section>

      {/* Who Should Attend */}
      <section className="ml-60 px-4 md:px-6 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Should Attend</h2>
        <ul className="space-y-3 text-gray-600 max-w-4xl">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Smallholder farmers and gardeners</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>AE/EOA practitioners and advocates</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Community group leaders</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Agricultural extension workers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>Students in environmental/agricultural fields</span>
          </li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="ml-60 px-4 md:px-6 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why It Matters</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Healthy soil is the foundation of agroecology. This workshop helps equip farmers with simple, cost-effective methods to regenerate degraded soils and reduce dependency on synthetic inputs.
        </p>
      </section>

      {/* Register Now */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-12">
        <div className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Register Now</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Seats are limited to 40 participants. Refreshments and printed materials will be provided.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Add to Calendar
          </button>
        </div>
      </section>

      {/* Need Help */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Help or Have Questions?</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <span className="inline-block w-4 mr-2">✉</span>
              Email: events@biovisionafricatrust.org
            </p>
            <p>
              <span className="inline-block w-4 mr-2">📞</span>
              Phone: +254 20 692 4006
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          <Link
            href="/events"
            className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              style={{ height: "400px" }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
                style={{
                  backgroundImage: `url("/images/${event.image}")`,
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1C4C36] via-[#1C4C36cc] to-transparent" />

              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-lg text-green-600 text-center font-bold px-3 py-2 shadow-lg">
                <div className="text-2xl">{event.date}</div>
                <div className="text-xs uppercase">{event.month}</div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold leading-tight mb-3">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 opacity-90">
                  {event.description}
                </p>
                <p className="text-xs mb-4 opacity-80">{event.datetime}</p>
                <button className="bg-white text-green-600 text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-50 transition">
                  {event.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-white">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h2 className="text-xl font-semibold mb-1">Subscribe to Our Newsletter</h2>
              <p className="text-sm max-w-sm">
                Get updates on upcoming events and trainings delivered to your inbox.
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 rounded-r-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="bg-[#24231D] py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
                      alt="Biovision Africa Trust"
                      className="h-16 object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">
                Growing Africa's Future Through Sustainable Agriculture
              </h4>
              <p className="text-white font-bold text-base leading-relaxed mb-6">
                We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-6">Explore</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Our Mission</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Shop</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Learn</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> FAQs</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Press & Media</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Career</a></li>
                <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">•</span> Become a Partner</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-6">Contact</h5>
              <div className="space-y-4 text-white font-bold">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@biovisionafricatrust.org</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>P.O. Box 12345, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="pt-2 space-y-1 text-sm">
                  <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
                  <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
                  <p><span className="text-white font-bold">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

           {/* Bottom Section */}
             <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                 <p className="text-yellow-500 text-sm font-medium">
                     © 2025 BioVision Africa Trust. All Rights Reserved.
                </p>
                 <div className="flex gap-4 text-sm">
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
