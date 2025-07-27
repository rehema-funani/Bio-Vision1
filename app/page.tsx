// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import {
//   Microscope,
//   Coins,
//   UserRound,
//   GraduationCap,
//   Map,
//   Smile,
// } from "lucide-react";
// import { Users } from "lucide-react";

// export default function Home() {
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

//   return (
//     <div className="relative min-h-screen w-full overflow-x-hidden ">
//       {/* ✅ Background image using <img src="/about-hero.jpg" /> */}
//       <img
//         src="/images/farmers.png"
//         alt="Hero Background"
//         className="fixed top-0 left-0 w-full h-full object-cover -z-10"
//       />
//       <div className="fixed inset-0 bg-black/40  " />

//       {/* ✅ Fixed Navbar */}
//       <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//               alt="Biovision Africa Trust"
//               className="h-12 md:h-14 object-contain"
//             />
//           </div>

//           {/* Navigation */}
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

//           {/* Search + Sign Up */}
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

//      {/* ✅ Hero Section */}
// <section className="pt-36 lg:pt-40 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
//   <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
    
//     {/* ✅ Hero Text */}
//     <div className="text-white max-w-xl text-left">
//       <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
//         Empowering Africa <br /> Through Agroecology
//       </h1>
//       <p className="text-lg font-bold text-white/90 mb-4">
//         Explore certified organic products, verified AE/EOA outlets, and insights
//         that promote sustainable food systems across Africa.
//       </p>
//       <p className="text-base text-white/80 mb-8">
//         Every purchase supports 2.3M+ Farmers building sustainable food systems.
//       </p>
//       <div className="flex gap-4 flex-wrap">

//         <Link href="/shop">
//   <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full text-sm">
//     Explore Products
//   </button>
// </Link>

//         <button className="bg-white text-green-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full text-sm">
//           Learn More
//         </button>
        
//       </div>
//     </div>

//     {/* ✅ Hero Side Images */}
//     <div className="flex gap-4">
//       <img
//         src="/images/farmer.png"
//         alt="Hero image 1"
//         className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
//       />
//       <img
//         src="/images/farm.png"
//         alt="Hero image 2"
//         className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
//       />
//       <img
//         src="/images/carrot.png"
//         alt="Hero image 3"
//         className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
//       />
//     </div>
//   </div>
// </section>


// {/* ✅ Stats Section with Lucide icons */}
// <section className="bg-white py-20 px-4 md:px-8 lg:px-16 text-gray-900">
//   <div className="max-w-7xl mx-auto flex flex-col gap-16">
//     <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
//       {/* Heading */}
//       <div className="max-w-xl">
//         <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-black mb-6">
//           Transforming <span className="text-green-700">Agriculture</span><br />
//           Across <span className="text-green-700">Africa</span>
//         </h2>
//         <p className="text-lg md:text-xl text-gray-700">
//           Every farmer trained, every hectare restored,
//           <br className="hidden md:block" />
//           <span className="text-green-700 font-semibold">every life improved.</span>
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
//         {/* 20+ Years */}
//         <div>
//           <Microscope className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">20+</div>
//           <div className="text-base text-gray-600 mt-2">years of advancing agroecology</div>
//         </div>

//         {/* $2.4M+ */}
//         <div>
//           <Coins className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">$2.4M+</div>
//           <div className="text-base text-gray-600 mt-2">generated in sustainable income</div>
//         </div>

//         {/* 2.3M+ */}
//         <div>
//           <UserRound className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">2.3M+</div>
//           <div className="text-base text-gray-600 mt-2">farmers supported in best practices</div>
//         </div>

//         {/* 50+ */}
//         <div>
//           <GraduationCap className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">50+</div>
//           <div className="text-base text-gray-600 mt-2">partnerships with leading universities</div>
//         </div>

//         {/* 180K+ */}
//         <div>
//           <Map className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">180K+</div>
//           <div className="text-base text-gray-600 mt-2">hectares under sustainable practice</div>
//         </div>

//         {/* 98% */}
//         <div>
//           <Smile className="mx-auto h-8 w-8 text-green-700 mb-2" />
//           <div className="text-green-700 text-3xl md:text-4xl font-extrabold">98%</div>
//           <div className="text-base text-gray-600 mt-2">customer satisfaction</div>
//         </div>
//       </div>
//     </div>

//     {/* Partner logos (unchanged) */}



// <div className="flex flex-col items-center">
//   <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//     <Users className="h-4 w-4 text-green-700" />
//     <span>Join 4,000+ companies already growing</span>
//   </div>
//   <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
//   <div className="flex items-center space-x-2">
//     <img src="/images/boltshift.png" alt="Boltshift" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">Boltshift</span>
//   </div>
//   <div className="flex items-center space-x-2">
//     <img src="/images/lightbox.png" alt="Lightbox" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">Lightbox</span>
//   </div>
//   <div className="flex items-center space-x-2">
//     <img src="/images/featherdev.png" alt="FeatherDev" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">FeatherDev</span>
//   </div>
//   <div className="flex items-center space-x-2">
//     <img src="/images/spherule.png" alt="Spherule" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">Spherule</span>
//   </div>
//   <div className="flex items-center space-x-2">
//     <img src="/images/globalbank.png" alt="GlobalBank" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">GlobalBank</span>
//   </div>
//   <div className="flex items-center space-x-2">
//     <img src="/images/nietzshe.png" alt="Nietzsche" className="h-6 w-auto object-contain" />
//     <span className="text-sm text-gray-500">Nietzsche</span>
//   </div>
// </div>
// {/* ✅ Find Outlets Section */}
// <section className="relative bg-red py-24 px-4 md:px-8 lg:px-12">
//   <div className="max-w-7xl mx-auto text-center relative z-10">

//     {/* Heading */}
//     <h2 className="text-[2.5rem] md:text-5xl font-bold text-gray-900 leading-snug mb-6">
//       Find <span className="text-green-700">Agroecological</span>
//       <br />
//       <span className="text-green-700">Outlets</span> Near You
//     </h2>

//     {/* Paragraph */}
//     <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-2">
//       Explore a growing network of certified agroecological and organic product providers across Africa.
//     </p>
//     <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-2">
//       Discover farms, markets, and retail outlets near your region — verified for sustainability, impact, and
//     </p>
//     <p className="text-green-700 text-lg md:text-xl font-semibold mt-1">
//       authenticity.
//     </p>

//    <div className="relative">
//   {/* Map Image */}
//   <img src="/images/map-placeholder.png" alt="Map" className="w-full" />

//   <div className="absolute top-[480%] right-[-3%] z-20 w-[270px] md:w-[300px] bg-[#00000040] backdrop-blur-sm rounded-xl shadow-2xl p-3 space-y-3">
//   {/* Top Bar: Near You + A2 */}
//   <div className="flex items-center justify-between text-white font-semibold text-sm">
//     <div className="flex items-center gap-1">
//       <span>Near You</span>
//       <svg
//         className="w-4 h-4"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         viewBox="0 0 24 24"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//       </svg>
//     </div>
//     <div className="bg-white text-black text-xs px-2 py-0.5 rounded-md shadow font-medium">
//       A2
//     </div>
//   </div>

//   {/* Farms List (trimmed down) */}
//   <div className="space-y-2">
//     {[1, 2, 3, 4].map((num) => (
//       <div key={num} className="bg-white rounded-md px-2 py-1 flex items-center gap-2">
//         <img
//           src={`/images/farm${num}.png`}
//           alt={`Farm ${num}`}
//           className="w-10 h-10 rounded object-cover flex-shrink-0"
//         />
//         <div className="text-[11px] leading-snug">
//           <p className="text-red-500 font-medium">AEO Farm</p>
//           <p className="text-gray-800 font-semibold">
//             Kariandusi<br />Agroecological Farm
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Decorative bar */}
//   <div className="bg-[#00000066] backdrop-blur-sm h-5 rounded-md w-full mt-1"></div>

//   {/* View All */}
//   <div className="flex justify-end items-center pt-1 pr-1">
//     <button className="text-xs text-white font-medium flex items-center gap-1 hover:underline">
//       View All
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-4 h-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//       </svg>
//     </button>
//   </div>
// </div>

// </div>





//     {/* Map image */}
//     <div className="mt-10 overflow-hidden rounded-2xl shadow-lg relative z-10">
//       <img
//         src="/images/outlet.png"
//         alt="Map showing outlet locations"
//         className="w-full h-auto object-cover"
//       />
//     </div>
//   </div>
// </section>





// </div>

//   </div>
// </section>



// {/* ✅ Featured Products Section with Two Columns */}
// <section className="bg-white py-[-1] px-4 md:px-8 lg:px-12">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-[-100px]">

//     {/* ✅ LEFT: Product Cards Grid */}
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//       {[
//         { name: "Lettuce", image: "/images/lettuce.png" },
//         { name: "Red Peppers", image: "/images/red-pepper.png" },
//         { name: "Okra", image: "/images/okra.png" },
//         { name: "Mangoes", image: "/images/mangoes.png" },
//         { name: "Green Peppers", image: "/images/green-peppers.png" },
//         { name: "Cucumbers", image: "/images/cucumbers.png" },
//       ].map((product, index) => (
//         <div
//   key={index}
//   className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
// >
//   {/* Top pure white image section */}
//   <div className="bg-white p-4 pb-2">
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-full h-21 object-contain"
//     />
//   </div>

//   {/* Bottom lightly colored section */}
//   <div className="bg-[#fdfcf7] p-4 pt-1 text-left">
//     <p className="text-xs text-gray-400 mb-1">Vegetables</p>
//     <h3 className="font-semibold text-gray-800">{product.name}</h3>
//     <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-1">
//   <p>By Mr.food</p>
//   <div className="flex items-center gap-1 text-yellow-500 text-xs">
//     ★★★★☆ <span className="text-gray-400 text-xs">(4)</span>
//   </div>
// </div>

//     <div className="flex justify-between items-center mt-3 text-sm font-semibold">
//       <span className="text-green-600">$2</span>
//       <span className="line-through text-gray-400 text-xs">$3.99</span>
//       <button className="ml-auto bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs hover:bg-green-600 hover:text-white transition">
//         Contact
//       </button>
//     </div>
//   </div>
// </div>

//       ))}
//     </div>

//     {/* ✅ RIGHT: Green Card with Call-to-Action */}
//     <div className="bg-green-700 text-white p-10 rounded-2xl relative overflow-hidden w-[879px]">
//       <p className="text-sm font-medium  mb-2 opacity-80">Featured Products</p>
//       <h2 className="text-4xl font-bold leading-tight mb-6">
//         Explore <br />
//         Certified <br />
//         Agroecological <br />
//         Products
//       </h2>
//       <p className="text-base font-medium mb-4">
//         Sourced from trusted organic producers and <br/>outlets. Every purchase supports farming<br/>
//         communities and healthier ecosystems.
//       </p>
//       <p className="text-white text-sm font-semibold mb-6">Support a farmer today</p>
//       <button className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition">
//         Shop Now
//       </button>

//       {/* Optional: Decorative BG icons */}
//       <div className="absolute inset-0 bg-[url('/images/veggies-bg.png')] opacity-10 bg-contain bg-repeat z-0" />
//     </div>

//   </div>
// </section>

// {/* ✅ How It Works Section */}
// <section className="bg-[#fdfcf7] py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
//   {/* Decorative background elements */}
//   <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-3xl" />
//   <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl" />
//   <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-100/40 rounded-full blur-2xl" />
  
//   <div className="max-w-7xl mx-auto text-center  relative z-10">
//     {/* Section Header */}
//     <div className="mb-16">
//       <p className="text-sm font-medium text-green-700 mb-2 uppercase tracking-wide">How It Works</p>
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//         Engage With Biovision's
//       </h2>
//       <h2 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
//         Impact Model
//       </h2>
//       <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//         Our proven approach to agroecological transformation
//       </p>
//     </div>

//     {/* Steps Container */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start">
      
//       {/* Step 1: Discover */}
//       <div className="flex flex-col items-center text-center group">
//         <div className="relative mb-6">
//           {/* Connecting line for larger screens */}
//           <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
          
//           {/* Main circle with two rings */}
//           <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
//             {/* Small decorative circles positioned on the outer ring */}
//             <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
//             <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
            
//             {/* Outer thinner ring */}
//             <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
//               {/* Inner thicker ring */}
//               <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-xs font-medium text-gray-600 mb-1">Step 1</p>
//                   <p className="text-lg font-bold text-gray-900">Discover</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
//           Browse certified outlets, products, and learning resources
//         </p>
//       </div>

//       {/* Step 2: Engage */}
//       <div className="flex flex-col items-center text-center group">
//         <div className="relative mb-6">
//           {/* Connecting line */}
//           <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
          
//           <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
//             {/* Small decorative circles positioned on the outer ring */}
//             <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
//             <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
            
//             {/* Outer thinner ring */}
//             <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
//               {/* Inner thicker ring */}
//               <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-xs font-medium text-gray-600 mb-1">Step 2</p>
//                   <p className="text-lg font-bold text-gray-900">Engage</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
//           Connect with farmers, participate in programs, and access training
//         </p>
//       </div>

//       {/* Step 3: Support */}
//       <div className="flex flex-col items-center text-center group">
//         <div className="relative mb-6">
//           {/* Connecting line */}
//           <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
          
//           <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
//             {/* Small decorative circles positioned on the outer ring */}
//             <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
//             <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
            
//             {/* Outer thinner ring */}
//             <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
//               {/* Inner thicker ring */}
//               <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-xs font-medium text-gray-600 mb-1">Step 3</p>
//                   <p className="text-lg font-bold text-gray-900">Support</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
//           Purchase products, fund initiatives, and advocate for change
//         </p>
//       </div>

//       {/* Step 4: Grow */}
//       <div className="flex flex-col items-center text-center group">
//         <div className="relative mb-6">
//           <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
//             {/* Small decorative circles positioned on the outer ring */}
//             <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
//             <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
            
//             {/* Outer thinner ring */}
//             <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
//               {/* Inner thicker ring */}
//               <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-xs font-medium text-gray-600 mb-1">Step 4</p>
//                   <p className="text-lg font-bold text-gray-900">Grow</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
//           See measurable impact in communities and sustainable ecosystems
//         </p>
//       </div>
//     </div>

//     {/* Call to Action */}
//     <div className="mt-16">
//       <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
//         Start Your Journey
//       </button>
//     </div>
//   </div>
// </section>
// {/* ✅ Stories & Insights From the Field Section */}
// <section className="bg-[#f8f9fa] py-20 px-4 md:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-6 ml-9">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 Stories &<br />
//                 Insights <span className="text-green-700">From<br />
//                 the Field</span>
//               </h2>
//             </div>
            
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Hear directly from farmers, producers, and consumers<br />
//               transforming lives through agroecology.
//             </p>
            
//             <p className="text-gray-600 text-base leading-relaxed">
//               Explore success stories, expert advice, and the latest<br />
//               updates from our growing network.
//             </p>
            
//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
//                 Read Other Stories
//               </button>
//               <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
//                 Submit Yours
//               </button>
//             </div>
//           </div>
          
//           {/* Right Content - Three Column Image Layout */}
//           <div className="flex gap-3 h-96 -ml-9">
            
//             {/* Main Story Card with Background Image */}
//             <div 
//               className="flex-1 rounded-2xl p-6 text-white relative overflow-hidden bg-cover bg-center"
//               style={{
//                 backgroundImage: `linear-gradient(135deg, rgba(185, 28, 28, 0.8) 0%, rgba(21, 128, 61, 0.8) 100%), url('https://images.unsplash.com/photo-1594736797933-d0701ba2fe65?w=800&q=80')`,
//                 backgroundColor: 'rgba(46, 125, 50, 0.1)'
//               }}
//             >
//               {/* Profile Image */}
//               <div className="mb-4">
//                 <img 
//                   src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face&q=80"
//                   alt="Wanjiku, Farmer" 
//                   className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
//                 />
//               </div>
              
//               {/* Story Content */}
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold leading-tight">
//                   How Organic<br />
//                   Practices Helped<br />
//                   Me Triple My Yield
//                 </h3>
                
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   "When I started using compost<br />
//                   and rotating my crops, I noticed<br />
//                   a real difference. Today, I sell at<br />
//                   three organic markets."
//                 </p>
                
//                 <p className="text-xs text-white/70">
//                   By Wanjiku, Farmer | Muranga, Kenya
//                 </p>
                
//                 <button className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2">
//                   Read the Story
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             {/* Second Column - Light colored image */}
//             <div className="w-24 md:w-28">
//               <img 
//                 src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80"
//                 alt="Light colored background" 
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>
            
//             {/* Third Column - Green plants */}
//             <div className="w-24 md:w-28">
//               <img 
//                 src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&q=80"
//                 alt="Green plants in field" 
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </section>
//     {/* ✅ Upcoming Events & Trainings Section */}
// <section className="bg-white py-20 px-4 md:px-8 lg:px-12">
//   <div className="max-w-7xl mx-auto">
//     {/* Section Header */}
//     <div className="text-center mb-16">
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//         Upcoming Events &<br />
//         Trainings
//       </h2>
//       <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//         Learn directly from experts and experienced farmers through interactive sessions designed to deepen your knowledge of ecological organic agriculture.
//       </p>
//     </div>

//     {/* Events Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      
//       {/* Event 1 - Getting Started with Organic Farming */}
//       <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
//         <div 
//           className="h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80')`
//           }}
//         >
//           {/* Free Webinar Badge */}
//           <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//             Free Webinar
//           </div>
          
//           <div className="p-6 pt-20">
//             <h3 className="text-xl font-bold text-white mb-4">
//               Getting Started with Organic Farming
//             </h3>
//             <p className="text-white/90 text-sm mb-4 leading-relaxed">
//               Discover the basics of AE/EOA, ask live questions, and connect with certified producers.
//             </p>
//             <p className="text-white/70 text-xs mb-6">
//               July 15, 2025 | 10:00 AM EAT | Online via Zoom
//             </p>
            
//             <button className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors duration-300">
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Event 2 - Organic Soil Health & Composting Workshop */}
//       <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
//         <div 
//           className="h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80')`
//           }}
//         >
//           {/* Free Webinar Badge */}
//           <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//             Free Webinar
//           </div>
          
//           <div className="p-6 pt-20">
//             <h3 className="text-xl font-bold text-white mb-4">
//               Organic Soil Health & Composting Workshop
//             </h3>
//             <p className="text-white/90 text-sm mb-4 leading-relaxed">
//               Learn how to build healthy, living soil through composting, mulching, and crop rotation.
//             </p>
//             <p className="text-white/70 text-xs mb-6">
//               July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi
//             </p>
            
//             <button className="w-full bg-green-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-800 transition-colors duration-300">
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Event 3 - AE/EOA in Practice */}
//       <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
//         <div 
//           className="h-full bg-cover bg-center relative"
//           style={{
//             backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80')`
//           }}
//         >
//           {/* Free Webinar Badge */}
//           <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//             Free Webinar
//           </div>
          
//           <div className="p-6 pt-20">
//             <h3 className="text-xl font-bold text-white mb-4">
//               AE/EOA in Practice: Online Webinar for Consumers & Advocates
//             </h3>
//             <p className="text-white/90 text-sm mb-4 leading-relaxed">
//               How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and actionable tips for conscious consumption.
//             </p>
//             <p className="text-white/70 text-xs mb-6">
//               August 1, 2025 | 4:00 PM EAT | Online via Zoom
//             </p>
            
//             <button className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors duration-300">
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* View All Events Button */}
//     <div className="text-center">
//       <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
//         View All Events
//       </button>
//     </div>
//   </div>
// </section>
// {/* ✅ Ready to Shop Section */}
// <section className="bg-white py-16 px-4 md:px-8 lg:px-12 mb-16 ">
//   {/* Decorative background pattern */}
//   <div className="absolute inset-0 opacity-10 bg-white">
//     <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
//     <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
//     <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
//   </div>

//   <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#2E7D32] px-4  h-[250px]  rounded-2xl">
//     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//       Ready to shop for impact?
//     </h2>
//     <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//       Explore our full range of certified organic solutions and see how every purchase drives change.
//     </p>
//     <button className="bg-white text-green-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
//       Shop All Products
//     </button>
//   </div>
// </section>


// {/* ✅ Newsletter Section */}
// <section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12 -mt-16">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
//     {/* Left side - Newsletter info */}
//     <div className="flex items-center gap-4 text-white">
//       <div className="flex-shrink-0">
//         {/* Email icon */}
//         <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       </div>
//       <div>
//         <h3 className="text-xl md:text-2xl font-bold mb-2">
//           Join the Movement
//         </h3>
//         <p className="text-gray-300 text-sm md:text-base">
//           Get updates on AE/EOA events, stories, outlets, and resources that empower African farmers.
//         </p>
//       </div>
//     </div>

//     {/* Right side - Email signup form */}
//     <div className="flex w-full md:w-auto min-w-80">
//       <input
//         type="email"
//         placeholder="Your email address"
//         className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
//       />
//       <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-full font-medium text-sm transition-colors duration-300">
//         Subscribe
//       </button>
//     </div>
//   </div>
// </section>
// {/* ✅ Footer Section */}
// <footer className="bg-[#24231D] py-8 px-4 md:px-8 lg:px-12">
//     <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            
//             {/* Company Info */}
//             <div className="lg:col-span-1">
//                 {/* Logo */}
//                 <div className="mb-4">
//                     <div className="flex items-center gap-3">
//                         <div className="flex-shrink-0">
//                             <img
//                                 src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//                                 alt="Biovision Africa Trust"
//                                 className="h-12 object-contain filter brightness-0 invert"
//                             />
//                         </div>
//                     </div>
//                 </div>
                
//                 <h4 className="text-lg font-bold text-white mb-3">
//                     Growing Africa's Future Through Sustainable Agriculture
//                 </h4>
//                 <p className="text-white font-bold text-sm leading-relaxed mb-4">
//                     We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
//                 </p>
                
//                 {/* Social Media Links */}
//                 <div className="flex gap-2">
//                     <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                         </svg>
//                     </button>
//                     <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                         </svg>
//                     </button>
//                     <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
//                         </svg>
//                     </button>
//                     <button className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
//                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Explore Links */}
//             <div>
//                 <h5 className="text-base font-semibold text-white mb-4">Explore</h5>
//                 <ul className="space-y-2">
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Our Mission</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Shop</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Learn</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> FAQs</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Press & Media</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Career</a></li>
//                     <li><a href="#" className="text-white font-bold hover:text-gray-300 transition-colors duration-300 flex items-center text-sm"><span className="mr-2">•</span> Become a Partner</a></li>
//                 </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//                 <h5 className="text-base font-semibold text-white mb-4">Contact</h5>
//                 <div className="space-y-2 text-white font-bold text-sm">
//                     <div className="flex items-start gap-2">
//                         <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                         </svg>
//                         <span>+254 (0) 20 632 4806</span>
//                     </div>
                    
//                     <div className="flex items-start gap-2">
//                         <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                         <span>info@biovisionafricatrust.org</span>
//                     </div>
                    
//                     <div className="flex items-start gap-2">
//                         <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         <div>
//                             <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-2">
//                         <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                         <div>
//                             <p>P.O. Box 12345, Nairobi, Kenya</p>
//                         </div>
//                     </div>
                    
//                     <div className="pt-2 space-y-0.5 text-xs">
//                         <p><span className="text-white font-bold">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
//                         <p><span className="text-white font-bold">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
//                         <p><span className="text-white font-bold">Sunday:</span> Closed</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
//             <p className="text-yellow-500 text-xs font-medium">
//                 © 2025 BioVision Africa Trust. All Rights Reserved.
//             </p>
//             <div className="flex gap-3 text-xs">
//                 <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Terms of Use</a>
//                 <span className="text-gray-600">|</span>
//                 <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
//                 <span className="text-gray-600">|</span>
//                 <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
//             </div>
//         </div>
//     </div>
// </footer>


    





    






//     </div>
//   );
// }

"use client"
 import { usePathname } from "next/navigation";

import React, { useState } from 'react';
import { 
  Microscope, 
  Coins, 
  UserRound, 
  GraduationCap, 
  Map, 
  Smile, 
  Users, 
  Clock,
  MapPin,
  Mail,
  Phone,
  Twitter,
  Facebook
} from "lucide-react";
import Link from 'next/link';

export default function App() {
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState('auth'); // 'auth' or 'home'
  const [isSignIn, setIsSignIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy validation
    if (formData.phoneNumber.trim()) {
      console.log(`${isSignIn ? 'Signing in' : 'Signing up'} with:`, formData);
      
      // Simulate successful auth then redirect to homepage
      setTimeout(() => {
        setCurrentPage('home');
      }, 500);
    } else {
      alert('Please enter your phone number');
    }
  };

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

  // Auth Page Component
  const AuthPage = () => (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/background2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dynamic Map Overlay */}
      <div className={`absolute top-0 h-full w-[40%] z-0 opacity-70 pointer-events-none ${isSignIn ? 'left-0' : 'right-0'}`}>
        <img
          src="/images/africa2.png"
          alt="Africa Map"
          className={`w-full h-full object-contain ${isSignIn ? 'object-left' : 'object-right'}`}
        />
      </div>

      {/* Content Area */}
      <div className={`flex h-full items-center ${isSignIn ? 'justify-end pr-6 md:pr-12' : 'justify-start pl-6 md:pl-12'}`}>
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 w-[440px] shadow-xl space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isSignIn ? 'Sign In' : 'Join us today'}
          </h1>

          <p className="text-gray-700 text-sm leading-relaxed">
            {isSignIn
              ? 'Enter your phone number to sign in to your account'
              : 'Empowering communities through agroecology. Start by entering your phone number.'}
          </p>

          <div className="space-y-4">
            {/* Full Name (Sign Up only) */}
            {!isSignIn && (
              <div>
                <label htmlFor="fullName" className="text-xs text-gray-700 block mb-1">
                  First & Last Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="i.e. Davon Lean"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            )}

            {/* Phone Input */}
            <div>
              <label htmlFor="phoneNumber" className="text-xs text-gray-700 block mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <div className="flex items-center px-2 py-2 border border-gray-300 bg-white rounded-md text-sm space-x-1.5">
                  <div className="w-5 h-3 bg-gradient-to-b from-black via-red-500 to-green-500 rounded-sm"></div>
                  <span className="text-gray-800">+254</span>
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="0712 345 678"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Remember Me (Sign In only) */}
            {isSignIn && (
              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <input type="checkbox" id="remember" className="h-4 w-4" />
                <label htmlFor="remember">Remember me</label>
              </div>
            )}

            <p className="text-xs text-gray-600 italic">
              We'll never share your number. Standard SMS rates may apply.
            </p>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-md transition"
            >
              Send OTP
            </button>

            {/* Toggle between Sign In & Sign Up */}
            <p className="text-xs text-gray-700">
              {isSignIn ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className="text-green-600 hover:underline"
                  >
                    Create free account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className="text-green-600 hover:underline"
                  >
                    Sign In
                  </button>
                </>
              )}
            </p>

            {/* Terms & Policy */}
            <p className="text-[11px] text-gray-500">
              By continuing you accept our{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a>. Also learn how we process your data in our{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-green-600 hover:underline">Cookies policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Homepage Component
  const Homepage = () => (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background image */}
      <img
        src="/images/farmers.png"
        alt="Hero Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 bg-black/40" />

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
              <button 
              onClick={() => setCurrentPage('auth')}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap"
            >
              Sign Up
            </button>
           </div>
         </div>
       </header>
{/* 
      <button 
              onClick={() => setCurrentPage('auth')}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap"
            >
              Account
            </button> */}

      {/* ✅ Hero Section */}
 <section className="pt-36 lg:pt-40 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
   <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
    
     {/* ✅ Hero Text */}
     <div className="text-white max-w-xl text-left">
       <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
         Empowering Africa <br /> Through Agroecology
       </h1>
       <p className="text-lg font-bold text-white/90 mb-4">
         Explore certified organic products, verified AE/EOA outlets, and insights
         that promote sustainable food systems across Africa.
       </p>
       <p className="text-base text-white/80 mb-8">
         Every purchase supports 2.3M+ Farmers building sustainable food systems.
       </p>
       <div className="flex gap-4 flex-wrap">

         <Link href="/shop">
   <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full text-sm">
     Explore Products
   </button>
 </Link>

         <button className="bg-white text-green-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full text-sm">
           Learn More
         </button>
        
       </div>
     </div>

     {/* ✅ Hero Side Images */}
     <div className="flex gap-4">
       <img
        src="/images/farmer.png"
        alt="Hero image 1"
        className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
      />
      <img
        src="/images/farm.png"
        alt="Hero image 2"
        className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
      />
      <img
        src="/images/carrot.png"
        alt="Hero image 3"
        className="rounded-xl w-32 md:w-36 lg:w-40 object-cover"
      />
    </div>
  </div>
 </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16 text-gray-900">
        <div className="bg-white max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Heading */}
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-black mb-6">
                Transforming <span className="text-green-700">Agriculture</span><br />
                Across <span className="text-green-700">Africa</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Every farmer trained, every hectare restored,
                <br className="hidden md:block" />
                <span className="text-green-700 font-semibold">every life improved.</span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">
              <div>
                <Microscope className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">20+</div>
                <div className="text-base text-gray-600 mt-2">years of advancing agroecology</div>
              </div>

              <div>
                <Coins className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">$2.4M+</div>
                <div className="text-base text-gray-600 mt-2">generated in sustainable income</div>
              </div>

              <div>
                <UserRound className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">2.3M+</div>
                <div className="text-base text-gray-600 mt-2">farmers supported in best practices</div>
              </div>

              <div>
                <GraduationCap className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">50+</div>
                <div className="text-base text-gray-600 mt-2">partnerships with leading universities</div>
              </div>

              <div>
                <Map className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">180K+</div>
                <div className="text-base text-gray-600 mt-2">hectares under sustainable practice</div>
              </div>

              <div>
                <Smile className="mx-auto h-8 w-8 text-green-700 mb-2" />
                <div className="text-green-700 text-3xl md:text-4xl font-extrabold">98%</div>
                <div className="text-base text-gray-600 mt-2">customer satisfaction</div>
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Users className="h-4 w-4 text-green-700" />
              <span>Join 4,000+ companies already growing</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
  <div className="flex items-center space-x-2">
    <img src="/images/boltshift.png" alt="Boltshift" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">Boltshift</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/lightbox.png" alt="Lightbox" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">Lightbox</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/featherdev.png" alt="FeatherDev" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">FeatherDev</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/spherule.png" alt="Spherule" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">Spherule</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/globalbank.png" alt="GlobalBank" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">GlobalBank</span>
  </div>
  <div className="flex items-center space-x-2">
    <img src="/images/nietzshe.png" alt="Nietzsche" className="h-6 w-auto object-contain" />
    <span className="text-sm text-gray-500">Nietzsche</span>
  </div>
</div>
          </div>
        </div>
      </section>

       {/* ✅ Find Outlets Section */}
 <section className="relative bg-white  py-24 px-4 md:px-8 lg:px-12">
   <div className=" max-w-7xl mx-auto text-center relative z-10">

     {/* Heading */}
     <h2 className="text-[2.5rem] md:text-5xl font-bold text-gray-900 leading-snug mb-6">
       Find <span className="text-green-700">Agroecological</span>
       <br />
       <span className="text-green-700">Outlets</span> Near You
     </h2>

     {/* Paragraph */}
     <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-2">
       Explore a growing network of certified agroecological and organic product providers across Africa.
     </p>
     <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-2">
       Discover farms, markets, and retail outlets near your region — verified for sustainability, impact, and
     </p>
     <p className="text-green-700 text-lg md:text-xl font-semibold mt-1">
       authenticity.
     </p>

    <div className="relative">
   {/* Map Image */}
   <img src="/images/map-placeholder.png" alt="Map" className="w-full" />

   <div className="absolute top-[480%] right-[-3%] z-20 w-[270px] md:w-[300px] bg-[#00000040] backdrop-blur-sm rounded-xl shadow-2xl p-3 space-y-3">
   {/* Top Bar: Near You + A2 */}
   <div className="flex items-center justify-between text-white font-semibold text-sm">
     <div className="flex items-center gap-1">
       <span>Near You</span>
       <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div className="bg-white text-black text-xs px-2 py-0.5 rounded-md shadow font-medium">
      A2
    </div>
  </div>

  {/* Farms List (trimmed down) */}
  <div className="space-y-2">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="bg-white rounded-md px-2 py-1 flex items-center gap-2">
        <img
          src={`/images/farm${num}.png`}
          alt={`Farm ${num}`}
          className="w-10 h-10 rounded object-cover flex-shrink-0"
        />
        <div className="text-[11px] leading-snug">
          <p className="text-red-500 font-medium">AEO Farm</p>
          <p className="text-gray-800 font-semibold">
            Kariandusi<br />Agroecological Farm
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Decorative bar */}
  <div className="bg-[#00000066] backdrop-blur-sm h-5 rounded-md w-full mt-1"></div>

  {/* View All */}
  <div className="flex justify-end items-center pt-1 pr-1">
    <button className="text-xs text-white font-medium flex items-center gap-1 hover:underline">
      View All
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>

</div>





    {/* Map image */}
    <div className="mt-10 overflow-hidden rounded-2xl shadow-lg relative z-10">
      <img
        src="/images/outlet.png"
        alt="Map showing outlet locations"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>


      {/* Featured Products Section */}
      <section className="bg-[#fdfcf7] py-20 px-4 md:px-8 lg:px-12">
        <div className="bg-[#fdfcf7] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { name: "Lettuce", image: "/images/lettuce.png" },
        { name: "Red Peppers", image: "/images/red-pepper.png" },
        { name: "Okra", image: "/images/okra.png" },
        { name: "Mangoes", image: "/images/mangoes.png" },
        { name: "Green Peppers", image: "/images/green-peppers.png" },
        { name: "Cucumbers", image: "/images/cucumbers.png" },
      ].map((product, index) => (
        <div
  key={index}
  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
>
  {/* Top pure white image section */}
  <div className="bg-white p-4 pb-2">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-21 object-contain"
    />
  </div>

  {/* Bottom lightly colored section */}
  <div className="bg-[#fdfcf7] p-4 pt-1 text-left">
    <p className="text-xs text-gray-400 mb-1">Vegetables</p>
    <h3 className="font-semibold text-gray-800">{product.name}</h3>
    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-1">
  <p>By Mr.food</p>
  <div className="flex items-center gap-1 text-yellow-500 text-xs">
    ★★★★☆ <span className="text-gray-400 text-xs">(4)</span>
  </div>
</div>

    <div className="flex justify-between items-center mt-3 text-sm font-semibold">
      <span className="text-green-600">$2</span>
      <span className="line-through text-gray-400 text-xs">$3.99</span>
      <button className="ml-auto bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs hover:bg-green-600 hover:text-white transition">
        Contact
      </button>
    </div>
  </div>
</div>

      ))}
    </div>
          {/* Green Card with Call-to-Action */}
          <div className="bg-green-700 text-white p-10 rounded-2xl relative overflow-hidden w-[879px]">
      <p className="text-sm font-medium  mb-2 opacity-80">Featured Products</p>
      <h2 className="text-4xl font-bold leading-tight mb-6">
        Explore <br />
        Certified <br />
        Agroecological <br />
        Products
      </h2>
      <p className="text-base font-medium mb-4">
        Sourced from trusted organic producers and <br/>outlets. Every purchase supports farming<br/>
        communities and healthier ecosystems.
      </p>
      <p className="text-white text-sm font-semibold mb-6">Support a farmer today</p>
      <button className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition">
        Shop Now
      </button>

      {/* Optional: Decorative BG icons */}
      <div className="absolute inset-0 bg-[url('/images/veggies-bg.png')] opacity-10 bg-contain bg-repeat z-0" />
    </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#fdfcf7] py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-100/40 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-green-700 mb-2 uppercase tracking-wide">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Engage With Biovision's
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
              Impact Model
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven approach to agroecological transformation
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start">
            
            {/* Step 1: Discover */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Connecting line for larger screens */}
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
                
                {/* Main circle with two rings */}
                <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {/* Small decorative circles positioned on the outer ring */}
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
                  
                  {/* Outer thinner ring */}
                  <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
                    {/* Inner thicker ring */}
                    <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-600 mb-1">Step 1</p>
                        <p className="text-lg font-bold text-gray-900">Discover</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
                Browse certified outlets, products, and learning resources
              </p>
            </div>

            {/* Step 2: Engage */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Connecting line */}
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
                
                <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {/* Small decorative circles positioned on the outer ring */}
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
                  
                  {/* Outer thinner ring */}
                  <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
                    {/* Inner thicker ring */}
                    <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-600 mb-1">Step 2</p>
                        <p className="text-lg font-bold text-gray-900">Engage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
                Connect with farmers, participate in programs, and access training
              </p>
            </div>

            {/* Step 3: Support */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Connecting line */}
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
                
                <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {/* Small decorative circles positioned on the outer ring */}
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
                  
                  {/* Outer thinner ring */}
                  <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
                    {/* Inner thicker ring */}
                    <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-600 mb-1">Step 3</p>
                        <p className="text-lg font-bold text-gray-900">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
                Purchase products, fund initiatives, and advocate for change
              </p>
            </div>

            {/* Step 4: Grow */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {/* Small decorative circles positioned on the outer ring */}
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30" />
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-700 rounded-full transform -translate-y-1/2 translate-x-1/2 z-30" />
                  
                  {/* Outer thinner ring */}
                  <div className="w-28 h-28 border-2 border-green-700 rounded-full flex items-center justify-center relative z-20">
                    {/* Inner thicker ring */}
                    <div className="w-24 h-24 border-8 border-green-700 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-600 mb-1">Step 4</p>
                        <p className="text-lg font-bold text-gray-900">Grow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 max-w-48 leading-relaxed">
                See measurable impact in communities and sustainable ecosystems
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Stories & Insights From the Field Section */}
      <section className="bg-[#f8f9fa] py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 ml-9">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Stories &<br />
                  Insights <span className="text-green-700">From<br />
                  the Field</span>
                </h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Hear directly from farmers, producers, and consumers<br />
                transforming lives through agroecology.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                Explore success stories, expert advice, and the latest<br />
                updates from our growing network.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                  Read Other Stories
                </button>
                <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                  Submit Yours
                </button>
              </div>
            </div>
            
            {/* Right Content - Three Column Image Layout */}
            <div className="flex gap-3 h-96 -ml-9">
              
              {/* Main Story Card with Background Image */}
              <div 
                className="flex-1 rounded-2xl p-6 text-white relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(185, 28, 28, 0.8) 0%, rgba(21, 128, 61, 0.8) 100%), url('https://images.unsplash.com/photo-1594736797933-d0701ba2fe65?w=800&q=80')`,
                  backgroundColor: 'rgba(46, 125, 50, 0.1)'
                }}
              >
                {/* Profile Image */}
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face&q=80"
                    alt="Wanjiku, Farmer" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                
                {/* Story Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold leading-tight">
                    How Organic<br />
                    Practices Helped<br />
                    Me Triple My Yield
                  </h3>
                  
                  <p className="text-sm text-white/90 leading-relaxed">
                    "When I started using compost<br />
                    and rotating my crops, I noticed<br />
                    a real difference. Today, I sell at<br />
                    three organic markets."
                  </p>
                  
                  <p className="text-xs text-white/70">
                    By Wanjiku, Farmer | Muranga, Kenya
                  </p>
                  
                  <button className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2">
                    Read the Story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Second Column - Light colored image */}
              <div className="w-24 md:w-28">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80"
                  alt="Light colored background" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Third Column - Green plants */}
              <div className="w-24 md:w-28">
                <img 
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&q=80"
                  alt="Green plants in field" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Trainings Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Upcoming Events &<br />
              Trainings
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn directly from experts and experienced farmers through interactive sessions designed to deepen your knowledge of ecological organic agriculture.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Event 1 - Getting Started with Organic Farming */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div 
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80')`
                }}
              >
                {/* Free Webinar Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  Free Webinar
                </div>
                
                <div className="p-6 pt-20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Getting Started with Organic Farming
                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    Discover the basics of AE/EOA, ask live questions, and connect with certified producers.
                  </p>
                  <p className="text-white/70 text-xs mb-6">
                    July 15, 2025 | 10:00 AM EAT | Online via Zoom
                  </p>
                  
                  <button className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Event 2 - Organic Soil Health & Composting Workshop */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div 
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80')`
                }}
              >
                {/* Free Webinar Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  Free Webinar
                </div>
                
                <div className="p-6 pt-20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Organic Soil Health & Composting Workshop
                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    Learn how to build healthy, living soil through composting, mulching, and crop rotation.
                  </p>
                  <p className="text-white/70 text-xs mb-6">
                    July 18, 2025 | 10:00 AM EAT |Karen, Nairobi
                  </p>
                  
                  <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-green-800 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Event 3 - AE/EOA in Practice */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div 
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80')`
                }}
              >
                {/* Free Webinar Badge */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  Free Webinar
                </div>
                
                <div className="p-6 pt-20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    AE/EOA Webinar: For Consumers & Advocates


                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
Join us online for stories from producers, a live Q&A, and tips for conscious consumption.                  </p>

                  <p className="text-white/70 text-xs mb-6">
                    August 1, 2025 | 4:00 PM EAT | Online via Zoom
                  </p>
                  
                  <button className="w-full  bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View All Events
            </button>
          </div>
        </div>
      </section>

       {/* ✅ Ready to Shop Section */}
 <section className="bg-white py-16 px-4 md:px-8 lg:px-12 mb-6 ">
   {/* Decorative background pattern */}
   <div className="absolute inset-0 opacity-10 bg-white">
     <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
     <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
     <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
   </div>

   <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#2E7D32] px-4  h-[250px]  rounded-2xl">
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
       Ready to shop for impact?
     </h2>
     <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
       Explore our full range of certified organic solutions and see how every purchase drives change.
     </p>
     <button className="bg-white text-green-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
       Shop All Products
     </button>
   </div>
 </section>

      
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
<footer className="w-full h-[511px] bg-[#24231d] flex items-center justify-center px-6 md:px-40 box-border">
      <div className="w-full max-w-[1595px] h-[426px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[50px]">
        {/* Left Section - Logo and Description */}
        <div className="w-full lg:w-[421px] flex flex-col items-start gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a516e3e257957bba69588e0c195041412cec5913?width=494" 
            alt="Biovision Africa Trust" 
            className="w-[247px] h-[176px] object-contain"
          />
          <h3 className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-2xl font-bold leading-[30px] flex flex-col justify-center">
            Growing Africa's Future Through Sustainable Agriculture
          </h3>
          <p className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
            We partner with farmers across Africa to build sustainable food
            systems through agroecology, creating premium products that
            support rural communities.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            {/* Twitter */}
            <div className="flex w-10 h-10 p-[13px] justify-center items-center rounded-[20px] bg-[#2e7d32]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
                <path d="M12.5645 4.14258C12.5645 4.20638 12.5645 4.27018 12.5645 4.33398C12.5645 4.39779 12.5645 4.46159 12.5645 4.52539C12.5645 5.47331 12.3867 6.43034 12.0312 7.39648C11.6758 8.36263 11.154 9.23763 10.4658 10.0215C9.77767 10.8053 8.92318 11.4479 7.90234 11.9492C6.89062 12.4414 5.72396 12.6875 4.40234 12.6875C4.0013 12.6875 3.60482 12.6602 3.21289 12.6055C2.82096 12.5417 2.44043 12.4551 2.07129 12.3457C1.70215 12.2363 1.3444 12.1042 0.998047 11.9492C0.651693 11.7852 0.31901 11.6029 0 11.4023C0.11849 11.4115 0.234701 11.4183 0.348633 11.4229C0.462565 11.4274 0.578776 11.4297 0.697266 11.4297C1.36263 11.4297 1.99837 11.3226 2.60449 11.1084C3.21061 10.8942 3.75977 10.5957 4.25195 10.2129C3.62305 10.1947 3.06478 9.9987 2.57715 9.625C2.08952 9.2513 1.75456 8.7819 1.57227 8.2168C1.66341 8.22591 1.75228 8.23503 1.83887 8.24414C1.92546 8.25326 2.01888 8.25781 2.11914 8.25781C2.24674 8.25781 2.37435 8.25098 2.50195 8.2373C2.62956 8.22363 2.7526 8.19857 2.87109 8.16211C2.21484 8.02539 1.66797 7.69727 1.23047 7.17773C0.792969 6.6582 0.574219 6.04753 0.574219 5.3457V5.31836C0.765625 5.41862 0.970703 5.50065 1.18945 5.56445C1.4082 5.62826 1.63151 5.66471 1.85938 5.67383C1.47656 5.41862 1.16895 5.08138 0.936523 4.66211C0.704102 4.24284 0.587891 3.78255 0.587891 3.28125C0.587891 3.01693 0.62207 2.764 0.69043 2.52246C0.758789 2.28092 0.852214 2.05534 0.970703 1.8457C1.32617 2.27409 1.72266 2.66602 2.16016 3.02148C2.59766 3.37695 3.06706 3.68457 3.56836 3.94434C4.06966 4.2041 4.60286 4.41146 5.16797 4.56641C5.72396 4.72135 6.29818 4.8125 6.89062 4.83984C6.8724 4.73047 6.85645 4.62109 6.84277 4.51172C6.8291 4.40234 6.82227 4.29297 6.82227 4.18359C6.82227 3.79167 6.89518 3.41797 7.04102 3.0625C7.19596 2.71615 7.40332 2.41309 7.66309 2.15332C7.92285 1.89355 8.22591 1.69075 8.57227 1.54492C8.91862 1.38997 9.29232 1.3125 9.69336 1.3125C10.1035 1.3125 10.4886 1.39453 10.8486 1.55859C11.2087 1.72266 11.5208 1.94141 11.7852 2.21484C12.1133 2.16016 12.43 2.07357 12.7354 1.95508C13.0407 1.83659 13.3301 1.69531 13.6035 1.53125C13.5033 1.85938 13.3438 2.16016 13.125 2.43359C12.9062 2.70703 12.6465 2.93034 12.3457 3.10352C12.6374 3.07617 12.9222 3.02376 13.2002 2.94629C13.4782 2.86882 13.7448 2.77539 14 2.66602C13.8086 2.94857 13.5898 3.21517 13.3438 3.46582C13.0977 3.71647 12.8379 3.94206 12.5645 4.14258Z" fill="#FDFBF6"></path>
              </svg>
            </div>
            
            {/* Facebook */}
            <div className="flex w-10 h-10 p-[13px] justify-center items-center rounded-[20px] bg-[#2e7d32]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
                <g clipPath="url(#clip0_429_28588)">
                  <path d="M13.5625 7C13.5625 7.84766 13.4167 8.64974 13.125 9.40625C12.8333 10.1628 12.43 10.8372 11.915 11.4297C11.4001 12.0221 10.7962 12.5189 10.1035 12.9199C9.40169 13.3118 8.64974 13.5716 7.84766 13.6992V8.95508H9.41992L9.7207 7H7.84766V5.72852C7.84766 5.45508 7.92513 5.20898 8.08008 4.99023C8.23503 4.77148 8.52214 4.66211 8.94141 4.66211H9.80273V2.99414C9.80273 2.99414 9.64323 2.97363 9.32422 2.93262C9.00521 2.8916 8.65885 2.87109 8.28516 2.87109C7.51042 2.87109 6.88835 3.09668 6.41895 3.54785C5.94954 3.99902 5.71484 4.653 5.71484 5.50977V7H3.99219V8.95508H5.71484V13.6992C4.91276 13.5716 4.16081 13.3118 3.45898 12.9199C2.76628 12.5189 2.16243 12.0221 1.64746 11.4297C1.13249 10.8372 0.729167 10.1628 0.4375 9.40625C0.145833 8.64974 0 7.84766 0 7C0 6.0612 0.177734 5.18164 0.533203 4.36133C0.888672 3.54102 1.37402 2.82324 1.98926 2.20801C2.60449 1.59277 3.32227 1.10742 4.14258 0.751953C4.96289 0.396484 5.84245 0.21875 6.78125 0.21875C7.72005 0.21875 8.59961 0.396484 9.41992 0.751953C10.2402 1.10742 10.958 1.59277 11.5732 2.20801C12.1885 2.82324 12.6738 3.54102 13.0293 4.36133C13.3848 5.18164 13.5625 6.0612 13.5625 7Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28588">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0 14)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            {/* Pinterest */}
            <div className="flex w-10 h-10 p-[13px] justify-center items-center rounded-[20px] bg-[#2e7d32]">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
                <g clipPath="url(#clip0_429_28591)">
                  <path d="M6.32812 0.175781C6.97526 0.175781 7.59505 0.280599 8.1875 0.490234C8.77995 0.708984 9.30176 1.01432 9.75293 1.40625C10.2041 1.79818 10.5664 2.26758 10.8398 2.81445C11.1133 3.37044 11.25 3.98568 11.25 4.66016C11.25 5.29818 11.168 5.9362 11.0039 6.57422C10.8398 7.22135 10.5846 7.80013 10.2383 8.31055C9.89193 8.82096 9.45443 9.24023 8.92578 9.56836C8.39714 9.88737 7.76823 10.0469 7.03906 10.0469C6.69271 10.0469 6.33268 9.96257 5.95898 9.79395C5.58529 9.62533 5.31641 9.38151 5.15234 9.0625C4.83333 10.293 4.59863 11.152 4.44824 11.6396C4.29785 12.1273 3.88086 12.8405 3.19727 13.7793C3.12435 13.8066 3.08561 13.8203 3.08105 13.8203C3.0765 13.8203 3.05143 13.793 3.00586 13.7383C2.97852 13.4831 2.95117 13.2279 2.92383 12.9727C2.89648 12.7174 2.88281 12.4622 2.88281 12.207C2.88281 11.7878 2.92383 11.3275 3.00586 10.8262C3.08789 10.334 3.19043 9.83268 3.31348 9.32227C3.43652 8.81185 3.56185 8.3151 3.68945 7.83203C3.82617 7.33984 3.9401 6.88867 4.03125 6.47852C3.93099 6.26888 3.86263 6.04329 3.82617 5.80176C3.78971 5.56022 3.77148 5.32552 3.77148 5.09766C3.77148 4.55078 3.90365 4.1224 4.16797 3.8125C4.43229 3.5026 4.72624 3.31348 5.0498 3.24512C5.37337 3.17676 5.66732 3.23828 5.93164 3.42969C6.20508 3.62109 6.3418 3.9401 6.3418 4.38672C6.3418 4.92448 6.22103 5.44629 5.97949 5.95215C5.73796 6.45801 5.61719 6.9707 5.61719 7.49023C5.61719 7.8457 5.74251 8.13509 5.99316 8.3584C6.24381 8.58171 6.53776 8.69336 6.875 8.69336C7.34896 8.69336 7.74544 8.54297 8.06445 8.24219C8.37435 7.94141 8.625 7.57682 8.81641 7.14844C9.00781 6.72005 9.14453 6.26432 9.22656 5.78125C9.30859 5.29818 9.34961 4.87435 9.34961 4.50977C9.34961 4.02669 9.26758 3.59831 9.10352 3.22461C8.93945 2.85091 8.71387 2.53646 8.42676 2.28125C8.13965 2.02604 7.79557 1.83464 7.39453 1.70703C7.0026 1.57943 6.57422 1.51562 6.10938 1.51562C5.5625 1.51562 5.05664 1.60677 4.5918 1.78906C4.12695 1.97135 3.72135 2.22884 3.375 2.56152C3.02865 2.89421 2.75977 3.29297 2.56836 3.75781C2.36784 4.21354 2.26758 4.7194 2.26758 5.27539C2.26758 5.80404 2.37467 6.21191 2.58887 6.49902C2.80306 6.78613 2.91016 6.99349 2.91016 7.12109C2.91016 7.23047 2.8737 7.4196 2.80078 7.68848C2.72786 7.95736 2.62305 8.0918 2.48633 8.0918C2.1582 8.0918 1.78678 7.82975 1.37207 7.30566C0.957357 6.78158 0.75 6.03646 0.75 5.07031C0.75 4.3138 0.909505 3.63477 1.22852 3.0332C1.54753 2.42253 1.9668 1.90755 2.48633 1.48828C3.00586 1.06901 3.60286 0.745442 4.27734 0.517578C4.94271 0.289714 5.6263 0.175781 6.32812 0.175781Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28591">
                    <rect width="10.5" height="14" fill="white" transform="matrix(1 0 0 -1 0.75 14)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            {/* Instagram */}
            <div className="flex w-10 h-10 p-[13px] justify-center items-center rounded-[20px] bg-[#2e7d32]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
                <path d="M6.125 3.85547C6.5625 3.85547 6.97266 3.9375 7.35547 4.10156C7.73828 4.26562 8.07096 4.48893 8.35352 4.77148C8.63607 5.05404 8.85938 5.38672 9.02344 5.76953C9.1875 6.15234 9.26953 6.5625 9.26953 7C9.26953 7.42839 9.1875 7.83398 9.02344 8.2168C8.85938 8.59961 8.63607 8.93457 8.35352 9.22168C8.07096 9.50879 7.73828 9.73438 7.35547 9.89844C6.97266 10.0625 6.5625 10.1445 6.125 10.1445C5.69661 10.1445 5.29102 10.0625 4.9082 9.89844C4.52539 9.73438 4.19043 9.50879 3.90332 9.22168C3.61621 8.93457 3.39062 8.59961 3.22656 8.2168C3.0625 7.83398 2.98047 7.42839 2.98047 7C2.98047 6.5625 3.0625 6.15234 3.22656 5.76953C3.39062 5.38672 3.61621 5.05404 3.90332 4.77148C4.19043 4.48893 4.52539 4.26562 4.9082 4.10156C5.29102 3.9375 5.69661 3.85547 6.125 3.85547ZM6.125 9.03711C6.6901 9.03711 7.17318 8.83887 7.57422 8.44238C7.97526 8.0459 8.17578 7.5651 8.17578 7C8.17578 6.4349 7.97526 5.95182 7.57422 5.55078C7.17318 5.14974 6.6901 4.94922 6.125 4.94922C5.5599 4.94922 5.0791 5.14974 4.68262 5.55078C4.28613 5.95182 4.08789 6.4349 4.08789 7C4.08789 7.5651 4.28841 8.0459 4.68945 8.44238C5.09049 8.83887 5.56901 9.03711 6.125 9.03711ZM10.1309 3.73242C10.1309 3.93294 10.0602 4.10384 9.91895 4.24512C9.77767 4.38639 9.60221 4.45703 9.39258 4.45703C9.19206 4.45703 9.02116 4.38639 8.87988 4.24512C8.73861 4.10384 8.66797 3.93294 8.66797 3.73242C8.66797 3.52279 8.73861 3.34733 8.87988 3.20605C9.02116 3.06478 9.19206 2.99414 9.39258 2.99414C9.60221 2.99414 9.77767 3.06478 9.91895 3.20605C10.0602 3.34733 10.1309 3.52279 10.1309 3.73242ZM12.209 4.4707C12.2272 4.72591 12.2409 5.08594 12.25 5.55078C12.25 6.00651 12.25 6.4873 12.25 6.99316C12.25 7.49902 12.25 7.98438 12.25 8.44922C12.2409 8.91406 12.2272 9.27409 12.209 9.5293C12.1908 10.0124 12.111 10.4704 11.9697 10.9033C11.8285 11.3363 11.5801 11.7305 11.2246 12.0859C10.8691 12.4505 10.4749 12.7012 10.042 12.8379C9.60905 12.9746 9.14648 13.0566 8.6543 13.084C8.39909 13.0931 8.03906 13.1022 7.57422 13.1113C7.11849 13.1204 6.6377 13.125 6.13184 13.125C5.62598 13.125 5.14062 13.1204 4.67578 13.1113C4.21094 13.1022 3.85091 13.0931 3.5957 13.084C3.10352 13.0566 2.64323 12.9746 2.21484 12.8379C1.78646 12.7012 1.38997 12.4505 1.02539 12.0859C0.669922 11.7305 0.423828 11.3363 0.287109 10.9033C0.150391 10.4704 0.0683594 10.0124 0.0410156 9.5293C0.0227865 9.27409 0.0136719 8.91406 0.0136719 8.44922C0.00455729 7.98438 0 7.49902 0 6.99316C0 6.4873 0.00455729 6.00195 0.0136719 5.53711C0.0136719 5.08138 0.0227865 4.72591 0.0410156 4.4707C0.0683594 3.97852 0.150391 3.51595 0.287109 3.08301C0.423828 2.65007 0.669922 2.25586 1.02539 1.90039C1.38997 1.54492 1.78874 1.29655 2.22168 1.15527C2.65462 1.014 3.11263 0.934245 3.5957 0.916016C3.85091 0.897786 4.21094 0.884114 4.67578 0.875C5.14062 0.875 5.62598 0.875 6.13184 0.875C6.6377 0.875 7.11849 0.875 7.57422 0.875C8.03906 0.884114 8.39909 0.897786 8.6543 0.916016C9.14648 0.943359 9.60905 1.02539 10.042 1.16211C10.4749 1.29883 10.8691 1.54492 11.2246 1.90039C11.5801 2.26497 11.8285 2.66146 11.9697 3.08984C12.111 3.51823 12.1908 3.97852 12.209 4.4707ZM10.9102 10.6094C10.9831 10.4089 11.0378 10.1491 11.0742 9.83008C11.1107 9.51107 11.1357 9.17839 11.1494 8.83203C11.1631 8.48568 11.1654 8.14844 11.1562 7.82031C11.1562 7.49219 11.1562 7.21875 11.1562 7C11.1562 6.77214 11.1562 6.49414 11.1562 6.16602C11.1654 5.83789 11.1631 5.50065 11.1494 5.1543C11.1357 4.80794 11.1107 4.47982 11.0742 4.16992C11.0378 3.85091 10.9831 3.59115 10.9102 3.39062C10.8008 3.11719 10.6458 2.88021 10.4453 2.67969C10.2448 2.47917 10.0078 2.32422 9.73438 2.21484C9.53385 2.14193 9.27409 2.08724 8.95508 2.05078C8.64518 2.01432 8.31706 1.98926 7.9707 1.97559C7.62435 1.96191 7.28711 1.95964 6.95898 1.96875C6.63086 1.96875 6.35286 1.96875 6.125 1.96875C5.90625 1.96875 5.63281 1.96875 5.30469 1.96875C4.97656 1.95964 4.63932 1.96191 4.29297 1.97559C3.94661 1.98926 3.61393 2.01432 3.29492 2.05078C2.97591 2.08724 2.71615 2.14193 2.51562 2.21484C2.24219 2.32422 2.00521 2.47917 1.80469 2.67969C1.60417 2.88021 1.45378 3.11719 1.35352 3.39062C1.27148 3.59115 1.21224 3.85091 1.17578 4.16992C1.13932 4.47982 1.11654 4.80794 1.10742 5.1543C1.09831 5.50065 1.09375 5.83789 1.09375 6.16602C1.10286 6.49414 1.10742 6.77214 1.10742 7C1.10742 7.21875 1.10286 7.49219 1.09375 7.82031C1.09375 8.14844 1.09831 8.48568 1.10742 8.83203C1.11654 9.17839 1.13932 9.51107 1.17578 9.83008C1.21224 10.1491 1.27148 10.4089 1.35352 10.6094C1.46289 10.8828 1.61784 11.1175 1.81836 11.3135C2.01888 11.5094 2.2513 11.6621 2.51562 11.7715C2.71615 11.8535 2.97591 11.9128 3.29492 11.9492C3.61393 11.9857 3.94661 12.0085 4.29297 12.0176C4.63932 12.0267 4.97656 12.0312 5.30469 12.0312C5.63281 12.0221 5.90625 12.0176 6.125 12.0176C6.35286 12.0176 6.63086 12.0221 6.95898 12.0312C7.28711 12.0312 7.62435 12.0267 7.9707 12.0176C8.31706 12.0085 8.64518 11.9857 8.95508 11.9492C9.27409 11.9128 9.53385 11.8535 9.73438 11.7715C10.0078 11.6621 10.2448 11.5072 10.4453 11.3066C10.6458 11.1061 10.8008 10.8737 10.9102 10.6094Z" fill="#FDFBF6"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Middle Section - Explore Links */}
        <div className="w-full lg:w-[187.25px] flex flex-col items-start gap-4">
          <h3 className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-2xl font-bold leading-9">
            Explore
          </h3>
          <div className="w-[45px] h-1 relative">
            <div className="w-[45px] h-1 rounded-[2px] bg-[#2e7d32]"></div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28602)">
                  <path d="M12.5391 0.185547C12.487 0.0683594 12.3991 0.00651073 12.2754 0C12.1517 -0.00651073 12.0573 0.0488281 11.9922 0.166016C11.8424 0.426433 11.6634 0.664062 11.4551 0.878906C11.2467 1.08724 11.0173 1.26628 10.7666 1.41602C10.516 1.56575 10.2474 1.67969 9.96094 1.75781C9.67448 1.83594 9.375 1.875 9.0625 1.875H7.5C6.98568 1.875 6.50065 1.97266 6.04492 2.16797C5.58919 2.36328 5.19043 2.63184 4.84863 2.97363C4.50684 3.31543 4.23828 3.71419 4.04297 4.16992C3.84766 4.61914 3.75 5.10417 3.75 5.625C3.75 5.6901 3.75326 5.75684 3.75977 5.8252C3.76628 5.89355 3.77279 5.96029 3.7793 6.02539C4.0918 5.80404 4.4401 5.59245 4.82422 5.39062C5.20182 5.1888 5.62174 5.01302 6.08398 4.86328C6.54622 4.71354 7.05078 4.59635 7.59766 4.51172C8.14453 4.42057 8.73698 4.375 9.375 4.375C9.45964 4.375 9.53288 4.40592 9.59473 4.46777C9.65658 4.52962 9.6875 4.60286 9.6875 4.6875C9.6875 4.77214 9.65658 4.84538 9.59473 4.90723C9.53288 4.96908 9.45964 5 9.375 5C8.14453 5 7.08659 5.16276 6.20117 5.48828C5.31576 5.8138 4.5752 6.19954 3.97949 6.64551C3.38379 7.09147 2.91992 7.54883 2.58789 8.01758C2.26237 8.48633 2.04102 8.86068 1.92383 9.14062C1.85872 9.29688 1.85872 9.45475 1.92383 9.61426C1.98893 9.77376 2.10286 9.88607 2.26562 9.95117C2.42188 10.0163 2.57975 10.0163 2.73926 9.95117C2.89876 9.88607 3.01107 9.77539 3.07617 9.61914C3.0957 9.58008 3.21126 9.37826 3.42285 9.01367C3.63444 8.64909 3.98763 8.25846 4.48242 7.8418C4.64518 8.05664 4.83724 8.26497 5.05859 8.4668C5.28646 8.66862 5.54525 8.84115 5.83496 8.98438C6.12467 9.1276 6.44206 9.23503 6.78711 9.30664C7.13216 9.37826 7.50326 9.39453 7.90039 9.35547C8.66862 9.29688 9.37174 9.0918 10.0098 8.74023C10.6478 8.38867 11.1979 7.92969 11.6602 7.36328C12.1224 6.79688 12.4837 6.13932 12.7441 5.39062C12.998 4.64844 13.125 3.85742 13.125 3.01758C13.125 2.52279 13.0745 2.03125 12.9736 1.54297C12.8727 1.05469 12.7279 0.602214 12.5391 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28602">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                Our Mission
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28606)">
                  <path d="M11.4902 0.185547C11.4382 0.0683594 11.3503 0.00651073 11.2266 0C11.1029 -0.00651073 11.0085 0.0488281 10.9434 0.166016C10.7936 0.426433 10.6146 0.664062 10.4062 0.878906C10.1979 1.08724 9.96842 1.26628 9.71777 1.41602C9.46712 1.56575 9.19857 1.67969 8.91211 1.75781C8.62565 1.83594 8.32617 1.875 8.01367 1.875H6.45117C5.93685 1.875 5.45182 1.97266 4.99609 2.16797C4.54036 2.36328 4.1416 2.63184 3.7998 2.97363C3.45801 3.31543 3.18945 3.71419 2.99414 4.16992C2.79883 4.61914 2.70117 5.10417 2.70117 5.625C2.70117 5.6901 2.70443 5.75684 2.71094 5.8252C2.71745 5.89355 2.72396 5.96029 2.73047 6.02539C3.04297 5.80404 3.39128 5.59245 3.77539 5.39062C4.15299 5.1888 4.57292 5.01302 5.03516 4.86328C5.4974 4.71354 6.00195 4.59635 6.54883 4.51172C7.0957 4.42057 7.68815 4.375 8.32617 4.375C8.41081 4.375 8.48405 4.40592 8.5459 4.46777C8.60775 4.52962 8.63867 4.60286 8.63867 4.6875C8.63867 4.77214 8.60775 4.84538 8.5459 4.90723C8.48405 4.96908 8.41081 5 8.32617 5C7.0957 5 6.03776 5.16276 5.15234 5.48828C4.26693 5.8138 3.52637 6.19954 2.93066 6.64551C2.33496 7.09147 1.87109 7.54883 1.53906 8.01758C1.21354 8.48633 0.992188 8.86068 0.875 9.14062C0.809896 9.29688 0.809896 9.45475 0.875 9.61426C0.940104 9.77376 1.05404 9.88607 1.2168 9.95117C1.37305 10.0163 1.53092 10.0163 1.69043 9.95117C1.84993 9.88607 1.96224 9.77539 2.02734 9.61914C2.04688 9.58008 2.16243 9.37826 2.37402 9.01367C2.58561 8.64909 2.9388 8.25846 3.43359 7.8418C3.59635 8.05664 3.78841 8.26497 4.00977 8.4668C4.23763 8.66862 4.49642 8.84115 4.78613 8.98438C5.07585 9.1276 5.39323 9.23503 5.73828 9.30664C6.08333 9.37826 6.45443 9.39453 6.85156 9.35547C7.61979 9.29688 8.32292 9.0918 8.96094 8.74023C9.59896 8.38867 10.1491 7.92969 10.6113 7.36328C11.0736 6.79688 11.4349 6.13932 11.6953 5.39062C11.9492 4.64844 12.0762 3.85742 12.0762 3.01758C12.0762 2.52279 12.0257 2.03125 11.9248 1.54297C11.8239 1.05469 11.679 0.602214 11.4902 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28606">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                Sustainability Reports
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28610)">
                  <path d="M11.4902 0.185547C11.4382 0.0683594 11.3503 0.00651073 11.2266 0C11.1029 -0.00651073 11.0085 0.0488281 10.9434 0.166016C10.7936 0.426433 10.6146 0.664062 10.4062 0.878906C10.1979 1.08724 9.96842 1.26628 9.71777 1.41602C9.46712 1.56575 9.19857 1.67969 8.91211 1.75781C8.62565 1.83594 8.32617 1.875 8.01367 1.875H6.45117C5.93685 1.875 5.45182 1.97266 4.99609 2.16797C4.54036 2.36328 4.1416 2.63184 3.7998 2.97363C3.45801 3.31543 3.18945 3.71419 2.99414 4.16992C2.79883 4.61914 2.70117 5.10417 2.70117 5.625C2.70117 5.6901 2.70443 5.75684 2.71094 5.8252C2.71745 5.89355 2.72396 5.96029 2.73047 6.02539C3.04297 5.80404 3.39128 5.59245 3.77539 5.39062C4.15299 5.1888 4.57292 5.01302 5.03516 4.86328C5.4974 4.71354 6.00195 4.59635 6.54883 4.51172C7.0957 4.42057 7.68815 4.375 8.32617 4.375C8.41081 4.375 8.48405 4.40592 8.5459 4.46777C8.60775 4.52962 8.63867 4.60286 8.63867 4.6875C8.63867 4.77214 8.60775 4.84538 8.5459 4.90723C8.48405 4.96908 8.41081 5 8.32617 5C7.0957 5 6.03776 5.16276 5.15234 5.48828C4.26693 5.8138 3.52637 6.19954 2.93066 6.64551C2.33496 7.09147 1.87109 7.54883 1.53906 8.01758C1.21354 8.48633 0.992188 8.86068 0.875 9.14062C0.809896 9.29688 0.809896 9.45475 0.875 9.61426C0.940104 9.77376 1.05404 9.88607 1.2168 9.95117C1.37305 10.0163 1.53092 10.0163 1.69043 9.95117C1.84993 9.88607 1.96224 9.77539 2.02734 9.61914C2.04688 9.58008 2.16243 9.37826 2.37402 9.01367C2.58561 8.64909 2.9388 8.25846 3.43359 7.8418C3.59635 8.05664 3.78841 8.26497 4.00977 8.4668C4.23763 8.66862 4.49642 8.84115 4.78613 8.98438C5.07585 9.1276 5.39323 9.23503 5.73828 9.30664C6.08333 9.37826 6.45443 9.39453 6.85156 9.35547C7.61979 9.29688 8.32292 9.0918 8.96094 8.74023C9.59896 8.38867 10.1491 7.92969 10.6113 7.36328C11.0736 6.79688 11.4349 6.13932 11.6953 5.39062C11.9492 4.64844 12.0762 3.85742 12.0762 3.01758C12.0762 2.52279 12.0257 2.03125 11.9248 1.54297C11.8239 1.05469 11.679 0.602214 11.4902 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28610">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                Become a Partner
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28614)">
                  <path d="M11.4902 0.185547C11.4382 0.0683594 11.3503 0.00651073 11.2266 0C11.1029 -0.00651073 11.0085 0.0488281 10.9434 0.166016C10.7936 0.426433 10.6146 0.664062 10.4062 0.878906C10.1979 1.08724 9.96842 1.26628 9.71777 1.41602C9.46712 1.56575 9.19857 1.67969 8.91211 1.75781C8.62565 1.83594 8.32617 1.875 8.01367 1.875H6.45117C5.93685 1.875 5.45182 1.97266 4.99609 2.16797C4.54036 2.36328 4.1416 2.63184 3.7998 2.97363C3.45801 3.31543 3.18945 3.71419 2.99414 4.16992C2.79883 4.61914 2.70117 5.10417 2.70117 5.625C2.70117 5.6901 2.70443 5.75684 2.71094 5.8252C2.71745 5.89355 2.72396 5.96029 2.73047 6.02539C3.04297 5.80404 3.39128 5.59245 3.77539 5.39062C4.15299 5.1888 4.57292 5.01302 5.03516 4.86328C5.4974 4.71354 6.00195 4.59635 6.54883 4.51172C7.0957 4.42057 7.68815 4.375 8.32617 4.375C8.41081 4.375 8.48405 4.40592 8.5459 4.46777C8.60775 4.52962 8.63867 4.60286 8.63867 4.6875C8.63867 4.77214 8.60775 4.84538 8.5459 4.90723C8.48405 4.96908 8.41081 5 8.32617 5C7.0957 5 6.03776 5.16276 5.15234 5.48828C4.26693 5.8138 3.52637 6.19954 2.93066 6.64551C2.33496 7.09147 1.87109 7.54883 1.53906 8.01758C1.21354 8.48633 0.992188 8.86068 0.875 9.14062C0.809896 9.29688 0.809896 9.45475 0.875 9.61426C0.940104 9.77376 1.05404 9.88607 1.2168 9.95117C1.37305 10.0163 1.53092 10.0163 1.69043 9.95117C1.84993 9.88607 1.96224 9.77539 2.02734 9.61914C2.04688 9.58008 2.16243 9.37826 2.37402 9.01367C2.58561 8.64909 2.9388 8.25846 3.43359 7.8418C3.59635 8.05664 3.78841 8.26497 4.00977 8.4668C4.23763 8.66862 4.49642 8.84115 4.78613 8.98438C5.07585 9.1276 5.39323 9.23503 5.73828 9.30664C6.08333 9.37826 6.45443 9.39453 6.85156 9.35547C7.61979 9.29688 8.32292 9.0918 8.96094 8.74023C9.59896 8.38867 10.1491 7.92969 10.6113 7.36328C11.0736 6.79688 11.4349 6.13932 11.6953 5.39062C11.9492 4.64844 12.0762 3.85742 12.0762 3.01758C12.0762 2.52279 12.0257 2.03125 11.9248 1.54297C11.8239 1.05469 11.679 0.602214 11.4902 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28614">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                Press &amp; Media
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28618)">
                  <path d="M11.4902 0.185547C11.4382 0.0683594 11.3503 0.00651073 11.2266 0C11.1029 -0.00651073 11.0085 0.0488281 10.9434 0.166016C10.7936 0.426433 10.6146 0.664062 10.4062 0.878906C10.1979 1.08724 9.96842 1.26628 9.71777 1.41602C9.46712 1.56575 9.19857 1.67969 8.91211 1.75781C8.62565 1.83594 8.32617 1.875 8.01367 1.875H6.45117C5.93685 1.875 5.45182 1.97266 4.99609 2.16797C4.54036 2.36328 4.1416 2.63184 3.7998 2.97363C3.45801 3.31543 3.18945 3.71419 2.99414 4.16992C2.79883 4.61914 2.70117 5.10417 2.70117 5.625C2.70117 5.6901 2.70443 5.75684 2.71094 5.8252C2.71745 5.89355 2.72396 5.96029 2.73047 6.02539C3.04297 5.80404 3.39128 5.59245 3.77539 5.39062C4.15299 5.1888 4.57292 5.01302 5.03516 4.86328C5.4974 4.71354 6.00195 4.59635 6.54883 4.51172C7.0957 4.42057 7.68815 4.375 8.32617 4.375C8.41081 4.375 8.48405 4.40592 8.5459 4.46777C8.60775 4.52962 8.63867 4.60286 8.63867 4.6875C8.63867 4.77214 8.60775 4.84538 8.5459 4.90723C8.48405 4.96908 8.41081 5 8.32617 5C7.0957 5 6.03776 5.16276 5.15234 5.48828C4.26693 5.8138 3.52637 6.19954 2.93066 6.64551C2.33496 7.09147 1.87109 7.54883 1.53906 8.01758C1.21354 8.48633 0.992188 8.86068 0.875 9.14062C0.809896 9.29688 0.809896 9.45475 0.875 9.61426C0.940104 9.77376 1.05404 9.88607 1.2168 9.95117C1.37305 10.0163 1.53092 10.0163 1.69043 9.95117C1.84993 9.88607 1.96224 9.77539 2.02734 9.61914C2.04688 9.58008 2.16243 9.37826 2.37402 9.01367C2.58561 8.64909 2.9388 8.25846 3.43359 7.8418C3.59635 8.05664 3.78841 8.26497 4.00977 8.4668C4.23763 8.66862 4.49642 8.84115 4.78613 8.98438C5.07585 9.1276 5.39323 9.23503 5.73828 9.30664C6.08333 9.37826 6.45443 9.39453 6.85156 9.35547C7.61979 9.29688 8.32292 9.0918 8.96094 8.74023C9.59896 8.38867 10.1491 7.92969 10.6113 7.36328C11.0736 6.79688 11.4349 6.13932 11.6953 5.39062C11.9492 4.64844 12.0762 3.85742 12.0762 3.01758C12.0762 2.52279 12.0257 2.03125 11.9248 1.54297C11.8239 1.05469 11.679 0.602214 11.4902 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28618">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                Careers
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-icon w-[11.25px] h-[10px]">
                <g clipPath="url(#clip0_429_28622)">
                  <path d="M11.4902 0.185547C11.4382 0.0683594 11.3503 0.00651073 11.2266 0C11.1029 -0.00651073 11.0085 0.0488281 10.9434 0.166016C10.7936 0.426433 10.6146 0.664062 10.4062 0.878906C10.1979 1.08724 9.96842 1.26628 9.71777 1.41602C9.46712 1.56575 9.19857 1.67969 8.91211 1.75781C8.62565 1.83594 8.32617 1.875 8.01367 1.875H6.45117C5.93685 1.875 5.45182 1.97266 4.99609 2.16797C4.54036 2.36328 4.1416 2.63184 3.7998 2.97363C3.45801 3.31543 3.18945 3.71419 2.99414 4.16992C2.79883 4.61914 2.70117 5.10417 2.70117 5.625C2.70117 5.6901 2.70443 5.75684 2.71094 5.8252C2.71745 5.89355 2.72396 5.96029 2.73047 6.02539C3.04297 5.80404 3.39128 5.59245 3.77539 5.39062C4.15299 5.1888 4.57292 5.01302 5.03516 4.86328C5.4974 4.71354 6.00195 4.59635 6.54883 4.51172C7.0957 4.42057 7.68815 4.375 8.32617 4.375C8.41081 4.375 8.48405 4.40592 8.5459 4.46777C8.60775 4.52962 8.63867 4.60286 8.63867 4.6875C8.63867 4.77214 8.60775 4.84538 8.5459 4.90723C8.48405 4.96908 8.41081 5 8.32617 5C7.0957 5 6.03776 5.16276 5.15234 5.48828C4.26693 5.8138 3.52637 6.19954 2.93066 6.64551C2.33496 7.09147 1.87109 7.54883 1.53906 8.01758C1.21354 8.48633 0.992188 8.86068 0.875 9.14062C0.809896 9.29688 0.809896 9.45475 0.875 9.61426C0.940104 9.77376 1.05404 9.88607 1.2168 9.95117C1.37305 10.0163 1.53092 10.0163 1.69043 9.95117C1.84993 9.88607 1.96224 9.77539 2.02734 9.61914C2.04688 9.58008 2.16243 9.37826 2.37402 9.01367C2.58561 8.64909 2.9388 8.25846 3.43359 7.8418C3.59635 8.05664 3.78841 8.26497 4.00977 8.4668C4.23763 8.66862 4.49642 8.84115 4.78613 8.98438C5.07585 9.1276 5.39323 9.23503 5.73828 9.30664C6.08333 9.37826 6.45443 9.39453 6.85156 9.35547C7.61979 9.29688 8.32292 9.0918 8.96094 8.74023C9.59896 8.38867 10.1491 7.92969 10.6113 7.36328C11.0736 6.79688 11.4349 6.13932 11.6953 5.39062C11.9492 4.64844 12.0762 3.85742 12.0762 3.01758C12.0762 2.52279 12.0257 2.03125 11.9248 1.54297C11.8239 1.05469 11.679 0.602214 11.4902 0.185547Z" fill="#FDFBF6"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28622">
                    <rect width="11.25" height="10" fill="white" transform="matrix(1 0 0 -1 0.875 10)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[30px]">
                FAQs
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className="w-full lg:w-[345px] flex flex-col items-start gap-4">
          <h3 className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-2xl font-bold leading-9">
            Contact
          </h3>
          <div className="w-[45px] h-1 relative">
            <div className="w-[45px] h-1 rounded-[2px] bg-[#2e7d32]"></div>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Phone */}
            <div className="flex items-center gap-2 w-full">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon w-4 h-4 flex-shrink-0">
                <g clipPath="url(#clip0_429_28631)">
                  <path d="M14.1543 12.4629C14.1543 12.6387 14.1191 12.873 14.0488 13.166C13.9785 13.459 13.9082 13.6875 13.8379 13.8516C13.6973 14.1914 13.2871 14.5488 12.6074 14.9238C11.9746 15.2637 11.3535 15.4336 10.7441 15.4336C10.5566 15.4336 10.3809 15.4219 10.2168 15.3984C10.041 15.375 9.84766 15.334 9.63672 15.2754C9.42578 15.2051 9.26758 15.1523 9.16211 15.1172C9.05664 15.082 8.86914 15.0176 8.59961 14.9238C8.33008 14.8184 8.16602 14.7539 8.10742 14.7305C7.45117 14.4961 6.86523 14.2207 6.34961 13.9043C5.50586 13.377 4.62109 12.6504 3.69531 11.7246C2.78125 10.8105 2.06055 9.93164 1.5332 9.08789C1.20508 8.57227 0.923828 7.98633 0.689453 7.33008C0.677734 7.25977 0.619141 7.0957 0.513672 6.83789C0.419922 6.56836 0.349609 6.38086 0.302734 6.27539C0.267578 6.16992 0.220703 6.01172 0.162109 5.80078C0.103516 5.58984 0.0625 5.39648 0.0390625 5.2207C0.015625 5.04492 0.00390625 4.86914 0.00390625 4.69336C0.00390625 4.07227 0.173828 3.45117 0.513672 2.83008C0.888672 2.15039 1.24609 1.74023 1.58594 1.59961C1.75 1.5293 1.97852 1.45898 2.27148 1.38867C2.56445 1.31836 2.79883 1.2832 2.97461 1.2832C3.06836 1.2832 3.13867 1.29492 3.18555 1.31836C3.30273 1.35352 3.47852 1.60547 3.71289 2.07422C3.79492 2.20312 3.90039 2.38477 4.0293 2.61914C4.14648 2.85352 4.26367 3.06445 4.38086 3.25195C4.48633 3.45117 4.58594 3.63281 4.67969 3.79688C4.70312 3.82031 4.76172 3.90234 4.85547 4.04297C4.96094 4.18359 5.03711 4.30664 5.08398 4.41211C5.13086 4.50586 5.1543 4.59961 5.1543 4.69336C5.1543 4.82227 5.05469 4.98633 4.85547 5.18555C4.66797 5.39648 4.46289 5.58398 4.24023 5.74805C4.01758 5.91211 3.80664 6.08789 3.60742 6.27539C3.41992 6.46289 3.32617 6.61523 3.32617 6.73242C3.32617 6.80273 3.34375 6.87891 3.37891 6.96094C3.41406 7.05469 3.44336 7.125 3.4668 7.17188C3.49023 7.21875 3.53711 7.30078 3.60742 7.41797C3.67773 7.52344 3.71289 7.58789 3.71289 7.61133C4.22852 8.52539 4.81445 9.31055 5.4707 9.9668C6.12695 10.623 6.91211 11.2031 7.82617 11.707C7.83789 11.7188 7.90234 11.7598 8.01953 11.8301C8.13672 11.9004 8.21875 11.9473 8.26562 11.9707C8.3125 11.9941 8.37695 12.0234 8.45898 12.0586C8.55273 12.0938 8.62891 12.1113 8.6875 12.1113C8.81641 12.1113 8.97461 12.0117 9.16211 11.8125C9.34961 11.625 9.52539 11.4199 9.68945 11.1973C9.85352 10.9746 10.0352 10.7637 10.2344 10.5645C10.4336 10.377 10.6035 10.2832 10.7441 10.2832C10.8379 10.2832 10.9316 10.3066 11.0254 10.3535C11.1191 10.4004 11.2363 10.4707 11.377 10.5645C11.5176 10.6699 11.6055 10.7285 11.6406 10.7402C11.8047 10.8457 11.9805 10.9512 12.168 11.0566C12.3672 11.1621 12.584 11.2793 12.8184 11.4082C13.0527 11.5371 13.2285 11.6367 13.3457 11.707C13.8145 11.9414 14.0723 12.123 14.1191 12.252C14.1426 12.2988 14.1543 12.3691 14.1543 12.4629Z" fill="white"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28631">
                    <rect width="14.16" height="18" fill="white" transform="matrix(1 0 0 -1 0 18)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[26px] flex-1">
                +254 (0) 20 632 4806
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2 w-full">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon w-4 h-4 flex-shrink-0">
                <path d="M13.7402 5.22266C13.7858 5.17708 13.8405 5.17025 13.9043 5.20215C13.9681 5.23405 14 5.2819 14 5.3457V10.9375C14 11.3021 13.8724 11.612 13.6172 11.8672C13.362 12.1224 13.0521 12.25 12.6875 12.25H1.3125C0.947917 12.25 0.638021 12.1224 0.382812 11.8672C0.127604 11.612 0 11.3021 0 10.9375V5.3457C0 5.2819 0.0296224 5.23405 0.0888672 5.20215C0.148112 5.17025 0.205078 5.17708 0.259766 5.22266C0.569661 5.45964 1.0026 5.7832 1.55859 6.19336C2.11458 6.60352 3.08984 7.31445 4.48438 8.32617C4.76693 8.53581 5.13607 8.80697 5.5918 9.13965C6.04753 9.47233 6.51693 9.63411 7 9.625C7.49219 9.63411 7.96615 9.47005 8.42188 9.13281C8.8776 8.79557 9.24675 8.52669 9.5293 8.32617C10.9238 7.31445 11.8968 6.60352 12.4482 6.19336C12.9997 5.7832 13.4303 5.45964 13.7402 5.22266ZM7 8.75C6.68099 8.75911 6.32324 8.61328 5.92676 8.3125C5.53027 8.01172 5.2181 7.7793 4.99023 7.61523C3.17643 6.30273 2.03711 5.47103 1.57227 5.12012C1.10742 4.76921 0.665365 4.42969 0.246094 4.10156C0.173177 4.03776 0.113932 3.96029 0.0683594 3.86914C0.0227865 3.778 0 3.68229 0 3.58203V3.0625C0 2.69792 0.127604 2.38802 0.382812 2.13281C0.638021 1.8776 0.947917 1.75 1.3125 1.75H12.6875C13.0521 1.75 13.362 1.8776 13.6172 2.13281C13.8724 2.38802 14 2.69792 14 3.0625V3.58203C14 3.68229 13.9772 3.778 13.9316 3.86914C13.8861 3.96029 13.8268 4.03776 13.7539 4.10156C13.3346 4.42969 12.8926 4.76921 12.4277 5.12012C11.9629 5.47103 10.8236 6.30273 9.00977 7.61523C8.7819 7.7793 8.46973 8.01172 8.07324 8.3125C7.67676 8.61328 7.31901 8.75911 7 8.75Z" fill="white"></path>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[26px] flex-1">
                info@biovisionafricatrust.org
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-center gap-2 w-full">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon w-4 h-4 flex-shrink-0">
                <g clipPath="url(#clip0_429_28639)">
                  <path d="M6.5 0C5.67708 0 4.90104 0.15625 4.17188 0.46875C3.44271 0.78125 2.80469 1.21094 2.25781 1.75781C1.71094 2.30469 1.28125 2.94271 0.96875 3.67188C0.65625 4.40104 0.5 5.17708 0.5 6C0.5 7.10417 0.791667 8.23438 1.375 9.39062C1.94792 10.5365 2.58854 11.5833 3.29688 12.5312C4.00521 13.4792 4.66146 14.2656 5.26562 14.8906C5.88021 15.5156 6.21354 15.8542 6.26562 15.9062C6.29688 15.9375 6.33333 15.9609 6.375 15.9766C6.41667 15.9922 6.45833 16 6.5 16C6.54167 16 6.58333 15.9922 6.625 15.9766C6.66667 15.9609 6.70312 15.9375 6.73438 15.9062C6.78646 15.8542 7.11979 15.5156 7.73438 14.8906C8.33854 14.2656 8.99479 13.4792 9.70312 12.5312C10.4115 11.5833 11.0521 10.5365 11.625 9.39062C12.2083 8.23438 12.5 7.10417 12.5 6C12.5 5.17708 12.3438 4.40104 12.0312 3.67188C11.7188 2.94271 11.2891 2.30469 10.7422 1.75781C10.1953 1.21094 9.55729 0.78125 8.82812 0.46875C8.09896 0.15625 7.32292 0 6.5 0ZM6.5 9.32812C6.04167 9.32812 5.60938 9.24479 5.20312 9.07812C4.79688 8.90104 4.44271 8.66146 4.14062 8.35938C3.83854 8.05729 3.59896 7.70312 3.42188 7.29688C3.25521 6.89062 3.17188 6.45833 3.17188 6C3.17188 5.54167 3.25521 5.10938 3.42188 4.70312C3.59896 4.29688 3.83854 3.94271 4.14062 3.64062C4.44271 3.33854 4.79688 3.09896 5.20312 2.92188C5.60938 2.75521 6.04167 2.67188 6.5 2.67188C6.95833 2.67188 7.39062 2.75521 7.79688 2.92188C8.20312 3.09896 8.55729 3.33854 8.85938 3.64062C9.16146 3.94271 9.40104 4.29688 9.57812 4.70312C9.74479 5.10938 9.82812 5.54167 9.82812 6C9.82812 6.45833 9.74479 6.89062 9.57812 7.29688C9.40104 7.70312 9.16146 8.05729 8.85938 8.35938C8.55729 8.66146 8.20312 8.90104 7.79688 9.07812C7.39062 9.24479 6.95833 9.32812 6.5 9.32812Z" fill="white"></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_28639">
                    <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.5 16)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[26px] flex-1">
                Duduville Campus, Kasarani Nairobi, Kenya
              </div>
            </div>
            
            {/* P.O. Box */}
            <div className="flex items-center gap-2 w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon w-4 h-4 flex-shrink-0">
                <path d="M6 0C5.17708 0 4.40104 0.15625 3.67188 0.46875C2.94271 0.78125 2.30469 1.21094 1.75781 1.75781C1.21094 2.30469 0.78125 2.94271 0.46875 3.67188C0.15625 4.40104 0 5.17708 0 6C0 7.10417 0.291667 8.23438 0.875 9.39062C1.44792 10.5365 2.08854 11.5833 2.79688 12.5312C3.50521 13.4792 4.16146 14.2656 4.76562 14.8906C5.38021 15.5156 5.71354 15.8542 5.76562 15.9062C5.79688 15.9375 5.83333 15.9609 5.875 15.9766C5.91667 15.9922 5.95833 16 6 16C6.04167 16 6.08333 15.9922 6.125 15.9766C6.16667 15.9609 6.20312 15.9375 6.23438 15.9062C6.28646 15.8542 6.61979 15.5156 7.23438 14.8906C7.83854 14.2656 8.49479 13.4792 9.20312 12.5312C9.91146 11.5833 10.5521 10.5365 11.125 9.39062C11.7083 8.23438 12 7.10417 12 6C12 5.17708 11.8438 4.40104 11.5312 3.67188C11.2188 2.94271 10.7891 2.30469 10.2422 1.75781C9.69531 1.21094 9.05729 0.78125 8.32812 0.46875C7.59896 0.15625 6.82292 0 6 0ZM6 9.32812C5.54167 9.32812 5.10938 9.24479 4.70312 9.07812C4.29688 8.90104 3.94271 8.66146 3.64062 8.35938C3.33854 8.05729 3.09896 7.70312 2.92188 7.29688C2.75521 6.89062 2.67188 6.45833 2.67188 6C2.67188 5.54167 2.75521 5.10938 2.92188 4.70312C3.09896 4.29688 3.33854 3.94271 3.64062 3.64062C3.94271 3.33854 4.29688 3.09896 4.70312 2.92188C5.10938 2.75521 5.54167 2.67188 6 2.67188C6.45833 2.67188 6.89062 2.75521 7.29688 2.92188C7.70312 3.09896 8.55729 3.33854 8.35938 3.64062C8.66146 3.94271 8.90104 4.29688 9.07812 4.70312C9.24479 5.10938 9.32812 5.54167 9.32812 6C9.32812 6.45833 9.24479 6.89062 9.07812 7.29688C8.90104 7.70312 8.66146 8.05729 8.35938 8.35938C8.05729 8.66146 7.70312 8.90104 7.29688 9.07812C6.89062 9.24479 6.45833 9.32812 6 9.32812Z" fill="white"></path>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[26px] flex-1">
                P.O. Box 12345, Nairobi, Kenya
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-center gap-2 w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon w-4 h-4 flex-shrink-0">
                <path d="M6 0C5.17708 0 4.40104 0.15625 3.67188 0.46875C2.94271 0.78125 2.30469 1.21094 1.75781 1.75781C1.21094 2.30469 0.78125 2.94271 0.46875 3.67188C0.15625 4.40104 0 5.17708 0 6C0 7.10417 0.291667 8.23438 0.875 9.39062C1.44792 10.5365 2.08854 11.5833 2.79688 12.5312C3.50521 13.4792 4.16146 14.2656 4.76562 14.8906C5.38021 15.5156 5.71354 15.8542 5.76562 15.9062C5.79688 15.9375 5.83333 15.9609 5.875 15.9766C5.91667 15.9922 5.95833 16 6 16C6.04167 16 6.08333 15.9922 6.125 15.9766C6.16667 15.9609 6.20312 15.9375 6.23438 15.9062C6.28646 15.8542 6.61979 15.5156 7.23438 14.8906C7.83854 14.2656 8.49479 13.4792 9.20312 12.5312C9.91146 11.5833 10.5521 10.5365 11.125 9.39062C11.7083 8.23438 12 7.10417 12 6C12 5.17708 11.8438 4.40104 11.5312 3.67188C11.2188 2.94271 10.7891 2.30469 10.2422 1.75781C9.69531 1.21094 9.05729 0.78125 8.32812 0.46875C7.59896 0.15625 6.82292 0 6 0ZM6 9.32812C5.54167 9.32812 5.10938 9.24479 4.70312 9.07812C4.29688 8.90104 3.94271 8.66146 3.64062 8.35938C3.33854 8.05729 3.09896 7.70312 2.92188 7.29688C2.75521 6.89062 2.67188 6.45833 2.67188 6C2.67188 5.54167 2.75521 5.10938 2.92188 4.70312C3.09896 4.29688 3.33854 3.94271 3.64062 3.64062C3.94271 3.33854 4.79688 3.09896 4.70312 2.92188C5.10938 2.75521 5.54167 2.67188 6 2.67188C6.45833 2.67188 6.89062 2.75521 7.29688 2.92188C7.70312 3.09896 8.05729 3.33854 8.35938 3.64062C8.66146 3.94271 8.90104 4.29688 9.07812 4.70312C9.24479 5.10938 9.32812 5.54167 9.32812 6C9.32812 6.45833 9.24479 6.89062 9.07812 7.29688C8.90104 7.70312 8.66146 8.05729 8.35938 8.35938C8.05729 8.66146 7.70312 8.90104 7.29688 9.07812C6.89062 9.24479 6.45833 9.32812 6 9.32812Z" fill="white"></path>
              </svg>
              <div className="text-[#fdfbf6] font-['Helvetica_Neue',_-apple-system,_'Roboto',_'Helvetica',_sans-serif] text-base font-normal leading-[26px] flex-1">
                <span>Monday - Friday: 8:00 AM - 5:00 PM EAT</span>
                <br />
                <span>Saturday: 9:00 AM - 1:00 PM EAT</span>
                <br />
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
  );

  // Main App Render
  return (
    <div className="w-full h-full">
      {currentPage === 'auth' ? <AuthPage /> : <Homepage />}
    </div>
  );
}