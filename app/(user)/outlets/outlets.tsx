
// "use client";

// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { FaStar } from 'react-icons/fa';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { BookOpen, DollarSign, GraduationCap, Heart, Leaf, Smile, Sprout, Users } from "lucide-react";

// export default function Outlets() {
//   const [currentPage, setCurrentPage] = useState('outlets');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const pathname = usePathname();
//           const [searchQuery, setSearchQuery] = useState("");
//            const navigationItems = [
//             { name: "Home", href: "/" },
//             { name: "Mission", href: "/mission" },
//             { name: "Shop", href: "/shop" },
//             { name: "Resources", href: "/resources" },
//             { name: "Outlets", href: "/outlets" },
//             { name: "Surveys", href: "/surveys" },
//             { name: "Events", href: "/events" },
//             { name: "Contacts", href: "/contact" },
//           ];
//   const sampleOutlets = Array(6).fill({
//     name: "Kampala Sunrise Café",
//     address: "32 Acacia Avenue, Kololo, Kampala",
//     phone: "+256 79 234 5678",
//     tags: ["Chinese", "Takeaway"],
//     rating: 4.5,
//     image: "/images/cafe.png", // Add this image to public folder
//   });

//   return (
    
//     <div className="min-h-screen bg-white text-gray-800">
//         <div className="fixed inset-0 bg-black/2  " />

//       {/* ✅ Fixed Navbar */}
//       {/* Fixed Navbar */}
//       <header className="fixed top-0 w-full z-50 bg-white border-b border-white/10">
//   <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//     {/* Logo */}
//     <div className="flex-shrink-0">
//       <img
//         src="/images/greenlogo.png"
//         alt="Biovision Africa Trust"
//         className="h-12 md:h-14 object-contain"
//       />
//     </div>

    

//     {/* Desktop Navigation */}
//     <nav className="hidden lg:flex items-center space-x-2">
//       {navigationItems.map((item, index) => (
//         <div key={item.name} className="flex items-center">
//           <Link
//             href={item.href}
//             className={`text-sm font-semibold px-2 transition ${
//               currentPage === item.name.toLowerCase()
//                 ? "text-green-400"
//                 : "text-black hover:text-green-300"
//             }`}
//           >
//             {item.name}
//           </Link>
//           {index < navigationItems.length - 1 && (
//             <span className="h-6 w-px bg-black/20 mx-2" />

//           )}
//         </div>
//       ))}
//     </nav>

//     {/* Hamburger button */}
//     <div className="block lg:hidden">
//       <button
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         className="text-green-500 focus:outline-none"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={
//               mobileMenuOpen
//                 ? "M6 18L18 6M6 6l12 12" // X icon
//                 : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
//             }
//           />
//         </svg>
//       </button>
//     </div>

//     {/* Search + Sign Up */}
//     <div className="hidden md:flex items-center gap-4">
//       {/* Search with circular button */}
//       <div className="flex items-center gap-2">
//         <div className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center cursor-pointer hover:bg-green-100/10 transition">

//           <svg 
//             className="w-5 h-5 text-green-500" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
//             />
//           </svg>
//         </div>
//       </div>
      
//       {/* Sign Up Button */}
//       <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition">
//         Sign Up
//       </button>
      
//       {/* Language Selector */}
//       <div className="flex items-center gap-1 text-green-500 cursor-pointer">
//   <span className="text-sm font-medium">EN</span>
//   <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//   </svg>
// </div>

//     </div>
//   </div>

//   {/* Mobile Menu Panel */}
//   {mobileMenuOpen && (
//     <div className="block lg:hidden px-4 pt-4 pb-6 bg-black/80 backdrop-blur-sm border-t border-white/10">
//       <nav className="space-y-3">
//         {navigationItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`block text-sm font-semibold ${
//               currentPage === item.name.toLowerCase()
//                 ? "text-green-400"
//                 : "text-white hover:text-green-300"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>
      
//       {/* Mobile Search and Sign Up */}
//       <div className="mt-4 space-y-3">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
//             <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//         <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   )}
// </header>
//       {/* Header */}
// <div className="text-center px-6 py-16 max-w-3xl mx-auto mt-15">
//   <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//     Explore Certified Outlets <br />
//     Across Africa
//   </h1>
//   <p className="text-lg text-gray-700 leading-relaxed">
//     Discover a growing network of agroecological and ecological organic agriculture producers, retailers, and marketplaces. All listings are verified to meet sustainable farming principles — offering you trusted access to healthier, ethical, and environmentally sound products.
//   </p>
// </div>

// <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto px-4 py-8">
//   {/* Left Column - Map and View Buttons */}
//   <div className="w-full lg:w-2/3 flex flex-col">
//     {/* Toggle Buttons ABOVE the map */}
//     <div className="flex gap-2 mb-4">
//       <button className="flex items-center gap-2 border text-sm px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100">
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//         </svg>
//         List View
//       </button>
//       <button className="flex items-center gap-2 border text-sm px-4 py-2 rounded-md bg-green-600 text-white shadow hover:bg-green-700">
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 01.553-1.382L9 2m6 18l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-.553-1.382L15 2" />
//         </svg>
//         Map View
//       </button>
//     </div>

//     {/* Map Embed (Kenya) */}
//     <div className="h-[600px] w-full rounded-xl overflow-hidden shadow border">
//       <iframe
//         title="Kenya Map"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.635984352418!2d36.8219467!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d83281d997%3A0x4a6b8dd22bd62df0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1698492348234!5m2!1sen!2ske"
//         className="w-full h-full"
//         allowFullScreen
//         loading="lazy"
//       />
//     </div>
//   </div>

//   {/* Right Column - All Results List */}
//  <div className="bg-[#fdfcf9] p-4 w-full md:w-[400px] max-h-[600px] overflow-y-auto">
//   {/* Header */}
//   <h2 className="text-lg font-semibold mb-4">All Results</h2>
  
//   {/* Filters */}
//   <div className="flex items-center justify-between mb-4">
//     <div className="flex items-center gap-2">
//       <button className="border px-3 py-1 rounded-md text-sm flex items-center gap-1">
//         📍 Nairobi, Kenya
//       </button>
//       <button className="border px-3 py-1 rounded-md text-sm flex items-center gap-1">
//         Sort By ▾
//       </button>
//     </div>
//     <button className="relative bg-green-600 text-white w-8 h-8 flex items-center justify-center text-xs rounded-full">
//       3
//     </button>
//   </div>
  
//   {/* Results Count */}
//   <p className="text-sm text-gray-600 mb-4">Showing 95 results</p>
  
//   {/* Card 1 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 5 - Special Ad Card */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <h3 className="text-base font-medium text-green-600 mb-1">
//       Kampala Sunrise Café
//     </h3>
//     <p className="text-base font-medium text-gray-900 mb-1">+256 79 234 5678</p>
//     <p className="text-sm text-gray-500 mb-2">
//       32 Acacia Avenue,<br />
//       Kololo, Kampala
//     </p>
//     <p className="text-sm text-gray-600 mb-3">
//       Cozy café with a wide selection of coffee, pastries, and local Ugandan cuisine. Perfect for breakfast and brunch.
//     </p>
//     <div className="flex gap-4 text-sm">
//       <a href="#" className="text-green-600 underline">Website</a>
//       <a href="#" className="text-green-600 underline">Directions</a>
//       <a href="#" className="text-green-600 underline">More Info</a>
//     </div>
//     <div className="text-right text-xs text-gray-400 mt-2">Ad</div>
//   </div>

//   {/* Card 6 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 7 */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* Card 8 (partially visible due to scrolling) */}
//   <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//     <div className="flex justify-between items-start gap-3 mb-3">
//       <div className="flex-1 min-w-0">
//         <h3 className="text-base font-medium text-gray-900 mb-1">
//           Kampala Sunrise Café
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           32 Acacia Avenue, Kololo, Kampala
//         </p>
//         <div className="flex gap-2">
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Chinese
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//             Takeaway
//           </span>
//         </div>
//       </div>
//       <img
//         src="/api/placeholder/60/60"
//         alt="Restaurant"
//         className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//       />
//     </div>
//     <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//       <span className="text-sm font-medium text-gray-900">
//         +256 79 234 5678
//       </span>
//       <div className="flex items-center gap-1">
//         <span className="text-sm font-medium text-gray-900">4.5</span>
//         <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//           <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//         </svg>
//       </div>
//     </div>
//   </div>
// </div>



// </div>



//      {/* CTA Section */}
// <div className=" mx-auto max-w-7xl bg-green-600 mb-20 w-200 px-6 py-12 text-center rounded-xl">
//   <h2 className="text-2xl font-bold mb-4 text-white">Your Story Could Inspire Thousands</h2>
//   <p className="text-white mb-6">
//     Have you started your agroecology journey? Share your experience and become part
//     of a growing movement across Africa.
//   </p>
//   <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
//     Share your Story
//   </button>
// </div>

//       {/* Newsletter Section */}
//       <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
//           {/* Left side - Newsletter info */}
//           <div className="flex items-center gap-4 text-white">
//             <div className="flex-shrink-0">
//               {/* Email icon */}
//               <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl md:text-2xl font-bold mb-2">
//                 Join the Movement
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base">
//                 Get updates on AE/EOA events, stories, outlets, and resources that empower African farmers.
//               </p>
//             </div>
//           </div>

//           {/* Right side - Email signup form */}
//           <div className="flex w-full md:w-auto min-w-80">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
//             />
//             <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-full font-medium text-sm transition-colors duration-300">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

      
//      {/* ✅ Footer Section */}
// <footer className="bg-[#24231D] py-8 px-4 md:px-8 lg:px-12">
//     <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            
//             {/* ✅ Left Section - Logo and Description */}
// <div className="w-full lg:w-[421px] flex flex-col items-start gap-3">
//   <img 
//     src="https://api.builder.io/api/v1/image/assets/TEMP/a516e3e257957bba69588e0c195041412cec5913?width=494" 
//     alt="Biovision Africa Trust" 
//     className="w-[220px] h-auto object-contain"
//   />

//   <h3 className="text-[#fdfbf6] text-lg font-bold leading-6">
//     Growing Africa's Future Through <br/>Sustainable Agriculture
//   </h3>

//   <p className="text-[#fdfbf6] text-sm font-normal leading-[22px]">
//     We partner with farmers across Africa to build sustainable<br/> food
//     systems through agroecology, creating premium <br/>
//     products that
//     support rural communities.
//   </p>

//   {/* ✅ Social Media Icons */}
//   <div className="flex items-center gap-4 mt-1">
//      {/* Twitter */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35c-.84.5-1.77.84-2.76 1.03a4.26 4.26 0 0 0-7.26 3.88 12.1 12.1 0 0 1-8.78-4.45 4.25 4.25 0 0 0 1.32 5.67A4.22 4.22 0 0 1 2.8 9v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.93.07 4.26 4.26 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 18.58 12.07 12.07 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.27 8.27 0 0 0 22.46 6z"/>
//       </svg>
//     </div>

//     {/* Facebook */}
//      {/* Facebook */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
//       </svg>
//     </div>

//     {/* Pinterest */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.14 2.57 7.67 6.2 9.13-.08-.78-.15-1.97.03-2.82.17-.79 1.1-5.04 1.1-5.04s-.28-.57-.28-1.41c0-1.32.77-2.3 1.73-2.3.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.79 3.19-.23.97.48 1.76 1.42 1.76 1.71 0 3.03-1.8 3.03-4.39 0-2.3-1.65-3.91-4.01-3.91-2.73 0-4.34 2.05-4.34 4.18 0 .83.32 1.72.72 2.2a.29.29 0 0 1 .07.28c-.07.31-.23.97-.26 1.1-.04.17-.14.21-.31.13-1.17-.54-1.9-2.22-1.9-3.57 0-2.91 2.12-5.58 6.12-5.58 3.21 0 5.71 2.29 5.71 5.36 0 3.18-2 5.74-4.77 5.74-1.1 0-2.14-.57-2.5-1.23l-.68 2.61c-.25.97-.94 2.2-1.41 2.94 1.06.33 2.18.51 3.34.51 5.51 0 9.96-4.45 9.96-9.96S17.51 2.04 12 2.04z"/>
//       </svg>
//     </div>

//     {/* Instagram */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.25.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
//       </svg>
//     </div>

//   </div>
// </div>

// {/* ✅ Middle Section - Explore Links */}
// <div className="w-full lg:w-[187.25px] flex flex-col items-start gap-2 mt-18 ml-16">
//   <h3 className="text-[#FDFBF6] font-semibold text-lg ml-5 leading-tight">
//     Explore
//   </h3>
  
//   {/* Green underline with dot */}
//   <div className="flex ml-5 items-center gap-1 mt-1 mb-4">
//     <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
//     <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
//   </div>
  
//   {/* Links */}
//   <div className="ml-4 flex flex-col items-start gap-2 w-full">
//     {[
//       { text: "Our Mission", icon: "🚀" },
//       { text: "Sustainability Reports", icon: "🚀" },
//       { text: "Become a Partner", icon: "🚀" },
//       { text: "Press & Media", icon: "🚀" },
//       { text: "Careers", icon: "🚀" },
//       { text: "FAQs", icon: "🚀" }
//     ].map((item, index) => (
//       <div key={index} className="flex items-center gap-2 text-[#FDFBF6] text-sm leading-[22px]">
//         <span className="text-[#FDFBF6] filter brightness-0 invert">{item.icon}</span>
//         <span>{item.text}</span>
//       </div>
//     ))}
//   </div>
// </div>

//             {/* ✅ Right Section - Contact Information */}
// <div className="ml-9 w-full lg:w-[345px] flex flex-col gap-3 mt-18">
//   <h3 className="text-[#FDFBF6] font-semibold text-lg ml-5 leading-tight">
//     Contact
//   </h3>

//   {/* Green underline with dot */}
//   <div className="flex ml-5 items-center gap-1 mt-1 mb-4">
//     <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
//     <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
//   </div>

//   <div className="ml-5 flex flex-col gap-2 text-[#fdfbf6] text-sm leading-[22px] font-normal font-sans">

//     {/* Phone */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//       </svg>
//       <span>+254 (0) 20 632 4806</span>
//     </div>

//     {/* Email */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//       </svg>
//       <span>info@biovisionafricatrust.org</span>
//     </div>

//     {/* Address */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <span>Duduville Campus, Kasarani Nairobi, Kenya</span>
//     </div>

//     {/* P.O. Box */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <span>P.O. Box 12345, Nairobi, Kenya</span>
//     </div>

//     {/* Hours */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <div>
//         <div>Monday - Friday: 8:00 AM - 5:00 PM EAT</div>
//         <div>Saturday: 9:00 AM - 1:00 PM EAT</div>
//         <div>Sunday: Closed</div>
//       </div>
//     </div>

//   </div>
// </div>

//         </div>
//          </div>
// </footer>

//         {/* Bottom Section */}
//         {/* Updated Bottom Section - Full Width */}
// {/* Bottom Section - Full Width Outside Container */}
//         <div className="w-full bg-[#2C2A29] border-t border-gray-700 pt-6 pb-6 ">
//             <div className="max-w-9xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className=" ml-3 text-yellow-500 text-xs font-medium">
//                     © 2025 BioVision Africa Trust. All Rights Reserved.
//                 </p>
//                 <div className="mr-9 flex gap-3 text-xs">
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//   );
// }
// "use client";

// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { FaStar } from 'react-icons/fa';
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import {
//   BookOpen,
//   DollarSign,
//   GraduationCap,
//   Heart,
//   Leaf,
//   Smile,
//   Sprout,
//   Users,
// } from "lucide-react";

// export default function Outlets() {
//   const [currentPage, setCurrentPage] = useState('resources');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigationItems = [
//     { name: "Home", href: "/" },
//     { name: "Mission", href: "/mission" },
//     { name: "Shop", href: "/shop" },
//     { name: "Resources", href: "/resources" },
//     { name: "Outlets", href: "/outlets" },
//     { name: "Surveys", href: "/surveys" },
//     { name: "Events", href: "/events" },
//     { name: "Contacts", href: "/contact" },
//   ];

//   const sampleOutlets = Array(6).fill({
//     name: "Kampala Sunrise Café",
//     address: "32 Acacia Avenue, Kololo, Kampala",
//     phone: "+256 79 234 5678",
//     tags: ["Chinese", "Takeaway"],
//     rating: 4.5,
//     image: "/images/cafe.png",
//   });

//   return (
//     <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
//       <div className="fixed inset-0 bg-black/2" />

//       {/* Header */}
//       <header className="fixed top-0 w-full z-50 bg-white border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//           <div className="flex-shrink-0">
//             <img
//               src="/images/greenlogo.png"
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
//                     currentPage === item.name.toLowerCase()
//                       ? "text-green-400"
//                       : "text-black hover:text-green-300"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//                 {index < navigationItems.length - 1 && (
//                   <span className="h-6 w-px bg-black/20 mx-2" />
//                 )}
//               </div>
//             ))}
//           </nav>

//           <div className="block lg:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-green-500 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     mobileMenuOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center cursor-pointer hover:bg-green-100/10 transition">
//                 <svg
//                   className="w-5 h-5 text-green-500"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition">
//               Sign Up
//             </button>
//             <div className="flex items-center gap-1 text-green-500 cursor-pointer">
//               <span className="text-sm font-medium">EN</span>
//               <svg
//                 className="w-4 h-4 text-green-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="block lg:hidden px-4 pt-4 pb-6 bg-black/80 backdrop-blur-sm border-t border-white/10">
//             <nav className="space-y-3">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`block text-sm font-semibold ${
//                     currentPage === item.name.toLowerCase()
//                       ? "text-green-400"
//                       : "text-white hover:text-green-300"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Page Content */}
//       <main className="pt-32 px-4 sm:px-6 lg:px-8">
//         {/* Section: Title + Description */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//             Explore Certified Outlets <br /> Across Africa
//           </h1>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Discover a growing network of agroecological and ecological organic agriculture producers, retailers, and marketplaces. All listings are verified to meet sustainable farming principles.
//           </p>
//         </div>

//         {/* Section: Map and List */}
//         <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
//           <div className="w-full lg:w-2/3">
//             {/* List/Map View Buttons */}
//             <div className="flex gap-2 mb-4">
//               <button className="flex items-center gap-2 border text-sm px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100">
//                 List View
//               </button>
//               <button className="flex items-center gap-2 border text-sm px-4 py-2 rounded-md bg-green-600 text-white shadow hover:bg-green-700">
//                 Map View
//               </button>
//             </div>
//             <div className="h-[600px] w-full rounded-xl overflow-hidden shadow border">
//               <iframe
//                 title="Kenya Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.635984352418!2d36.8219467!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d83281d997%3A0x4a6b8dd22bd62df0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1698492348234!5m2!1sen!2ske"
//                 className="w-full h-full"
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Right Column: Outlet Cards */}
//           <div className="bg-[#fdfcf9] p-4 w-full lg:w-[400px] max-h-[600px] overflow-y-auto">
//             {/* Cards go here */}
//             {sampleOutlets.map((outlet, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100">
//                 <div className="flex justify-between items-start gap-3 mb-3">
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base font-medium text-gray-900 mb-1">
//                       {outlet.name}
//                     </h3>
//                     <p className="text-sm text-gray-400 mb-2">
//                       {outlet.address}
//                     </p>
//                     <div className="flex gap-2">
//                       {outlet.tags.map((tag, idx) => (
//                         <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <img
//                     src="/api/placeholder/60/60"
//                     alt="Restaurant"
//                     className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
//                   />
//                 </div>
//                 <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//                   <span className="text-sm font-medium text-gray-900">
//                     {outlet.phone}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <span className="text-sm font-medium text-gray-900">{outlet.rating}</span>
//                     <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="ml-0 lg:ml-60 max-w-3xl bg-green-600 my-20 px-6 py-12 text-center rounded-xl">
//           <h2 className="text-2xl font-bold mb-4 text-white">Your Story Could Inspire Thousands</h2>
//           <p className="text-white mb-6">
//             Have you started your agroecology journey? Share your experience and become part of a growing movement across Africa.
//           </p>
//           <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
//             Share your Story
//           </button>
//         </div>
//         {/* ✅ Footer Section */}
// <footer className="bg-[#24231D] py-8 px-4 md:px-8 lg:px-12">
//     <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            
//             {/* ✅ Left Section - Logo and Description */}
// <div className="w-full lg:w-[421px] flex flex-col items-start gap-3">
//   <img 
//     src="https://api.builder.io/api/v1/image/assets/TEMP/a516e3e257957bba69588e0c195041412cec5913?width=494" 
//     alt="Biovision Africa Trust" 
//     className="w-[220px] h-auto object-contain"
//   />

//   <h3 className="text-[#fdfbf6] text-lg font-bold leading-6">
//     Growing Africa's Future Through <br/>Sustainable Agriculture
//   </h3>

//   <p className="text-[#fdfbf6] text-sm font-normal leading-[22px]">
//     We partner with farmers across Africa to build sustainable<br/> food
//     systems through agroecology, creating premium <br/>
//     products that
//     support rural communities.
//   </p>

//   {/* ✅ Social Media Icons */}
//   <div className="flex items-center gap-4 mt-1">
//      {/* Twitter */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35c-.84.5-1.77.84-2.76 1.03a4.26 4.26 0 0 0-7.26 3.88 12.1 12.1 0 0 1-8.78-4.45 4.25 4.25 0 0 0 1.32 5.67A4.22 4.22 0 0 1 2.8 9v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.93.07 4.26 4.26 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 18.58 12.07 12.07 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.27 8.27 0 0 0 22.46 6z"/>
//       </svg>
//     </div>

//     {/* Facebook */}
//      {/* Facebook */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
//       </svg>
//     </div>

//     {/* Pinterest */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.14 2.57 7.67 6.2 9.13-.08-.78-.15-1.97.03-2.82.17-.79 1.1-5.04 1.1-5.04s-.28-.57-.28-1.41c0-1.32.77-2.3 1.73-2.3.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.79 3.19-.23.97.48 1.76 1.42 1.76 1.71 0 3.03-1.8 3.03-4.39 0-2.3-1.65-3.91-4.01-3.91-2.73 0-4.34 2.05-4.34 4.18 0 .83.32 1.72.72 2.2a.29.29 0 0 1 .07.28c-.07.31-.23.97-.26 1.1-.04.17-.14.21-.31.13-1.17-.54-1.9-2.22-1.9-3.57 0-2.91 2.12-5.58 6.12-5.58 3.21 0 5.71 2.29 5.71 5.36 0 3.18-2 5.74-4.77 5.74-1.1 0-2.14-.57-2.5-1.23l-.68 2.61c-.25.97-.94 2.2-1.41 2.94 1.06.33 2.18.51 3.34.51 5.51 0 9.96-4.45 9.96-9.96S17.51 2.04 12 2.04z"/>
//       </svg>
//     </div>

//     {/* Instagram */}
//     <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#2e7d32]">
//       <svg fill="#FDFBF6" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
//         <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.25.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
//       </svg>
//     </div>

//   </div>
// </div>

// {/* ✅ Middle Section - Explore Links */}
// <div className="w-full lg:w-[187.25px] flex flex-col items-start gap-2 mt-18 ml-16">
//   <h3 className="text-[#FDFBF6] font-semibold text-lg ml-5 leading-tight">
//     Explore
//   </h3>
  
//   {/* Green underline with dot */}
//   <div className="flex ml-5 items-center gap-1 mt-1 mb-4">
//     <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
//     <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
//   </div>
  
//   {/* Links */}
//   <div className="ml-4 flex flex-col items-start gap-2 w-full">
//     {[
//       { text: "Our Mission", icon: "🚀" },
//       { text: "Sustainability Reports", icon: "🚀" },
//       { text: "Become a Partner", icon: "🚀" },
//       { text: "Press & Media", icon: "🚀" },
//       { text: "Careers", icon: "🚀" },
//       { text: "FAQs", icon: "🚀" }
//     ].map((item, index) => (
//       <div key={index} className="flex items-center gap-2 text-[#FDFBF6] text-sm leading-[22px]">
//         <span className="text-[#FDFBF6] filter brightness-0 invert">{item.icon}</span>
//         <span>{item.text}</span>
//       </div>
//     ))}
//   </div>
// </div>

//             {/* ✅ Right Section - Contact Information */}
// <div className="ml-9 w-full lg:w-[345px] flex flex-col gap-3 mt-18">
//   <h3 className="text-[#FDFBF6] font-semibold text-lg ml-5 leading-tight">
//     Contact
//   </h3>

//   {/* Green underline with dot */}
//   <div className="flex ml-5 items-center gap-1 mt-1 mb-4">
//     <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
//     <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
//   </div>

//   <div className="ml-5 flex flex-col gap-2 text-[#fdfbf6] text-sm leading-[22px] font-normal font-sans">

//     {/* Phone */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//       </svg>
//       <span>+254 (0) 20 632 4806</span>
//     </div>

//     {/* Email */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//       </svg>
//       <span>info@biovisionafricatrust.org</span>
//     </div>

//     {/* Address */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <span>Duduville Campus, Kasarani Nairobi, Kenya</span>
//     </div>

//     {/* P.O. Box */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <span>P.O. Box 12345, Nairobi, Kenya</span>
//     </div>

//     {/* Hours */}
//     <div className="flex items-start gap-2">
//       <svg className="w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       </svg>
//       <div>
//         <div>Monday - Friday: 8:00 AM - 5:00 PM EAT</div>
//         <div>Saturday: 9:00 AM - 1:00 PM EAT</div>
//         <div>Sunday: Closed</div>
//       </div>
//     </div>

//   </div>
// </div>

//         </div>
//          </div>
// </footer>

//         {/* Bottom Section */}
//         {/* Updated Bottom Section - Full Width */}
// {/* Bottom Section - Full Width Outside Container */}
//         <div className="w-full bg-[#2C2A29] border-t border-gray-700 pt-6 pb-6 ">
//             <div className="max-w-9xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className=" ml-3 text-yellow-500 text-xs font-medium">
//                     © 2025 BioVision Africa Trust. All Rights Reserved.
//                 </p>
//                 <div className="mr-9 flex gap-3 text-xs">
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
//                     <span className="text-gray-600">|</span>
//                     <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
//                 </div>
//             </div>
//         </div>

//         {/* Footer and Newsletter remain unchanged */}
//       </main>
//     </div>
//   );
// }
"use client";

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaStar } from 'react-icons/fa';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, DollarSign, GraduationCap, Heart, Leaf, Smile, Sprout, Users } from "lucide-react";

export default function Outlets() {
  const [currentPage, setCurrentPage] = useState('outlets');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
          const [searchQuery, setSearchQuery] = useState("");
           const navigationItems = [
            { name: "Home", href: "/" },
            { name: "Mission", href: "/mission" },
            { name: "Shop", href: "/shop" },
            { name: "Resources", href: "/resources" },
            { name: "Outlets", href: "/outlets" },
            { name: "Surveys", href: "/surveys" },
            { name: "Events", href: "/events" },
            { name: "Contacts", href: "/contact" },
          ];
  const sampleOutlets = Array(6).fill({
    name: "Kampala Sunrise Café",
    address: "32 Acacia Avenue, Kololo, Kampala",
    phone: "+256 79 234 5678",
    tags: ["Chinese", "Takeaway"],
    rating: 4.5,
    image: "/images/cafe.png", // Add this image to public folder
  });

  return (
    
    <div className="min-h-screen bg-white text-gray-800">
        <div className="fixed inset-0 bg-black/2  " />

      {/* ✅ Fixed Navbar */}
      {/* Fixed Navbar */}
      
      {/* Header */}
<div className="text-center px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto mt-16 sm:mt-20 lg:mt-24">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
    Explore Certified Outlets <br />
    Across Africa
  </h1>
  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
    Discover a growing network of agroecological and ecological organic agriculture producers, retailers, and marketplaces. All listings are verified to meet sustainable farming principles — offering you trusted access to healthier, ethical, and environmentally sound products.
  </p>
</div>

<div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto px-4 py-4 sm:py-8">
  {/* Left Column - Map and View Buttons */}
  <div className="w-full lg:w-2/3 flex flex-col">
    {/* Toggle Buttons ABOVE the map */}
    <div className="flex gap-2 mb-4">
      <button className="flex items-center gap-2 border text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md bg-white shadow hover:bg-gray-100">
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        List View
      </button>
      <button className="flex items-center gap-2 border text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md bg-green-600 text-white shadow hover:bg-green-700">
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 01.553-1.382L9 2m6 18l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-.553-1.382L15 2" />
        </svg>
        Map View
      </button>
    </div>

    {/* Map Embed (Kenya) */}
    <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow border">
      <iframe
        title="Kenya Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.635984352418!2d36.8219467!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d83281d997%3A0x4a6b8dd22bd62df0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1698492348234!5m2!1sen!2ske"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>

  {/* Right Column - All Results List */}
 <div className="bg-[#fdfcf9] p-3 sm:p-4 w-full lg:w-[400px] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto">
  {/* Header */}
  <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">All Results</h2>
  
  {/* Filters */}
  <div className="flex items-center justify-between mb-3 sm:mb-4">
    <div className="flex items-center gap-1 sm:gap-2">
      <button className="border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1">
        📍 <span className="hidden sm:inline">Nairobi, Kenya</span><span className="sm:hidden">Nairobi</span>
      </button>
      <button className="border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm flex items-center gap-1">
        Sort By ▾
      </button>
    </div>
    <button className="relative bg-green-600 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs rounded-full">
      3
    </button>
  </div>
  
  {/* Results Count */}
  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Showing 95 results</p>
  
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-3 border border-gray-100">
    <div className="flex justify-between items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1">
          Kampala Sunrise Café
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-2">
          32 Acacia Avenue, Kololo, Kampala
        </p>
        <div className="flex gap-1 sm:gap-2">
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            Chinese
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            Takeaway
          </span>
        </div>
      </div>
      <img
        src="/api/placeholder/60/60"
        alt="Restaurant"
        className="w-12 h-12 sm:w-15 sm:h-15 object-cover rounded-lg flex-shrink-0"
      />
    </div>
    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
      <span className="text-xs sm:text-sm font-medium text-gray-900">
        +256 79 234 5678
      </span>
      <div className="flex items-center gap-1">
        <span className="text-xs sm:text-sm font-medium text-gray-900">4.5</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.82 12.09 1 7.91l6.061-.909L10 1l2.939 6.001L19 7.91l-4.82 4.18L15.878 18z" />
        </svg>
      </div>
    </div>
  </div>
</div>



</div>



     {/* CTA Section */}
<div className="mx-auto max-w-7xl bg-green-600 mb-12 sm:mb-20 px-4 sm:px-6 py-8 sm:py-12 text-center rounded-xl">
  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Your Story Could Inspire Thousands</h2>
  <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
    Have you started your agroecology journey? Share your experience and become part
    of a growing movement across Africa.
  </p>
  <button className="bg-white text-green-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
    Share your Story
  </button>
</div>

      
      {/* Newsletter Section */}
      <section className="bg-[#2c2a29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
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
<footer className="bg-[#24231d] py-6 sm:py-8 px-4 md:px-8 lg:px-12">
    <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
            
            {/* ✅ Left Section - Logo and Description */}
<div className="w-full lg:w-[421px] flex flex-col items-start gap-3">
  <img 
    src="https://api.builder.io/api/v1/image/assets/TEMP/a516e3e257957bba69588e0c195041412cec5913?width=494" 
    alt="Biovision Africa Trust" 
    className="w-[180px] sm:w-[220px] h-auto object-contain"
  />

  <h3 className="text-[#fdfbf6] text-base sm:text-lg font-bold leading-6">
    Growing Africa's Future Through <br/>Sustainable Agriculture
  </h3>

  <p className="text-[#fdfbf6] text-xs sm:text-sm font-normal leading-[22px]">
    We partner with farmers across Africa to build sustainable food
    systems through agroecology, creating premium 
    products that
    support rural communities.
  </p>

  {/* ✅ Social Media Icons */}
  <div className="flex items-center gap-3 sm:gap-4 mt-1">
     {/* Twitter */}
    <div className="flex w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-[#2e7d32]">
      <svg fill="#FDFBF6" height="16" width="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35c-.84.5-1.77.84-2.76 1.03a4.26 4.26 0 0 0-7.26 3.88 12.1 12.1 0 0 1-8.78-4.45 4.25 4.25 0 0 0 1.32 5.67A4.22 4.22 0 0 1 2.8 9v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.93.07 4.26 4.26 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 18.58 12.07 12.07 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.27 8.27 0 0 0 22.46 6z"/>
      </svg>
    </div>

    {/* Facebook */}
    <div className="flex w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-[#2e7d32]">
      <svg fill="#FDFBF6" height="16" width="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
      </svg>
    </div>

    {/* Pinterest */}
    <div className="flex w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-[#2e7d32]">
      <svg fill="#FDFBF6" height="16" width="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.14 2.57 7.67 6.2 9.13-.08-.78-.15-1.97.03-2.82.17-.79 1.1-5.04 1.1-5.04s-.28-.57-.28-1.41c0-1.32.77-2.3 1.73-2.3.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.79 3.19-.23.97.48 1.76 1.42 1.76 1.71 0 3.03-1.8 3.03-4.39 0-2.3-1.65-3.91-4.01-3.91-2.73 0-4.34 2.05-4.34 4.18 0 .83.32 1.72.72 2.2a.29.29 0 0 1 .07.28c-.07.31-.23.97-.26 1.1-.04.17-.14.21-.31.13-1.17-.54-1.9-2.22-1.9-3.57 0-2.91 2.12-5.58 6.12-5.58 3.21 0 5.71 2.29 5.71 5.36 0 3.18-2 5.74-4.77 5.74-1.1 0-2.14-.57-2.5-1.23l-.68 2.61c-.25.97-.94 2.2-1.41 2.94 1.06.33 2.18.51 3.34.51 5.51 0 9.96-4.45 9.96-9.96S17.51 2.04 12 2.04z"/>
      </svg>
    </div>

    {/* Instagram */}
    <div className="flex w-8 h-8 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-[#2e7d32]">
      <svg fill="#FDFBF6" height="16" width="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.25.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
      </svg>
    </div>

  </div>
</div>

{/* ✅ Middle Section - Explore Links */}
<div className="w-full lg:w-[187.25px] flex flex-col items-start gap-2 lg:mt-18 lg:ml-16">
  <h3 className="text-[#FDFBF6] font-semibold text-base sm:text-lg ml-0 lg:ml-5 leading-tight">
    Explore
  </h3>
  
  {/* Green underline with dot */}
  <div className="flex ml-0 lg:ml-5 items-center gap-1 mt-1 mb-3 sm:mb-4">
    <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
    <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
  </div>
  
  {/* Links */}
  <div className="ml-0 lg:ml-4 flex flex-col items-start gap-2 w-full">
    {[
      { text: "Our Mission", icon: "🚀" },
      { text: "Sustainability Reports", icon: "🚀" },
      { text: "Become a Partner", icon: "🚀" },
      { text: "Press & Media", icon: "🚀" },
      { text: "Careers", icon: "🚀" },
      { text: "FAQs", icon: "🚀" }
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-2 text-[#FDFBF6] text-xs sm:text-sm leading-[22px]">
        <span className="text-[#FDFBF6] filter brightness-0 invert">{item.icon}</span>
        <span>{item.text}</span>
      </div>
    ))}
  </div>
</div>

            {/* ✅ Right Section - Contact Information */}
<div className="lg:ml-9 w-full lg:w-[345px] flex flex-col gap-3 lg:mt-18">
  <h3 className="text-[#FDFBF6] font-semibold text-base sm:text-lg ml-0 lg:ml-5 leading-tight">
    Contact
  </h3>

  {/* Green underline with dot */}
  <div className="flex ml-0 lg:ml-5 items-center gap-1 mt-1 mb-3 sm:mb-4">
    <div className="w-[35px] h-[2px] bg-[#2e7d32] rounded-sm" />
    <div className="w-[5px] h-[5px] bg-[#2e7d32] rounded-full" />
  </div>

  <div className="ml-0 lg:ml-5 flex flex-col gap-2 text-[#fdfbf6] text-xs sm:text-sm leading-[22px] font-normal font-sans">

    {/* Phone */}
    <div className="flex items-start gap-2">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span>+254 (0) 20 632 4806</span>
    </div>

    {/* Email */}
    <div className="flex items-start gap-2">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
      <span className="break-all">info@biovisionafricatrust.org</span>
    </div>

    {/* Address */}
    <div className="flex items-start gap-2">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span>Duduville Campus, Kasarani Nairobi, Kenya</span>
    </div>

    {/* P.O. Box */}
    <div className="flex items-start gap-2">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span>P.O. Box 12345, Nairobi, Kenya</span>
    </div>

    {/* Hours */}
    <div className="flex items-start gap-2">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="#FDFBF6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <div>
        <div>Monday - Friday: 8:00 AM - 5:00 PM EAT</div>
        <div>Saturday: 9:00 AM - 1:00 PM EAT</div>
        <div>Sunday: Closed</div>
      </div>
    </div>

  </div>
</div>

        </div>
         </div>
</footer>

        {/* Bottom Section */}
        {/* Updated Bottom Section - Full Width */}
{/* Bottom Section - Full Width Outside Container */}
        <div className="w-full bg-[#2c2a29] border-t border-gray-700 pt-4 sm:pt-6 pb-4 sm:pb-6">
            <div className="max-w-9xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                <p className="ml-0 sm:ml-3 text-yellow-500 text-xs font-medium text-center sm:text-left">
                    © 2025 BioVision Africa Trust. All Rights Reserved.
                </p>
                <div className="mr-0 sm:mr-9 flex gap-2 sm:gap-3 text-xs">
                    <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
                </div>
            </div>
        </div>
    </div>
    
    
  );
}