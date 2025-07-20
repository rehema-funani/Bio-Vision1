"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  Microscope,
  Coins,
  UserRound,
  GraduationCap,
  Map,
  Smile,
} from "lucide-react";
import { Users } from "lucide-react";

export default function Home() {
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
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* ✅ Background image using <img src="/about-hero.jpg" /> */}
      <img
        src="/images/farmers.png"
        alt="Hero Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 bg-black/40  " />

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
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full text-sm">
          Explore Products
        </button>
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


{/* ✅ Stats Section with Lucide icons */}
<section className="bg-white py-20 px-4 md:px-8 lg:px-16 text-gray-900">
  <div className="max-w-7xl mx-auto flex flex-col gap-16">
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
        {/* 20+ Years */}
        <div>
          <Microscope className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">20+</div>
          <div className="text-base text-gray-600 mt-2">years of advancing agroecology</div>
        </div>

        {/* $2.4M+ */}
        <div>
          <Coins className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">$2.4M+</div>
          <div className="text-base text-gray-600 mt-2">generated in sustainable income</div>
        </div>

        {/* 2.3M+ */}
        <div>
          <UserRound className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">2.3M+</div>
          <div className="text-base text-gray-600 mt-2">farmers supported in best practices</div>
        </div>

        {/* 50+ */}
        <div>
          <GraduationCap className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">50+</div>
          <div className="text-base text-gray-600 mt-2">partnerships with leading universities</div>
        </div>

        {/* 180K+ */}
        <div>
          <Map className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">180K+</div>
          <div className="text-base text-gray-600 mt-2">hectares under sustainable practice</div>
        </div>

        {/* 98% */}
        <div>
          <Smile className="mx-auto h-8 w-8 text-green-700 mb-2" />
          <div className="text-green-700 text-3xl md:text-4xl font-extrabold">98%</div>
          <div className="text-base text-gray-600 mt-2">customer satisfaction</div>
        </div>
      </div>
    </div>

    {/* Partner logos (unchanged) */}



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
{/* ✅ Find Outlets Section */}
<section className="relative bg-red py-24 px-4 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto text-center relative z-10">

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





</div>

  </div>
</section>



{/* ✅ Featured Products Section with Two Columns */}
<section className="bg-white py-[-1] px-4 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-[-100px]">

    {/* ✅ LEFT: Product Cards Grid */}
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

    {/* ✅ RIGHT: Green Card with Call-to-Action */}
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

{/* ✅ How It Works Section */}
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
              <div className="w-24 h-24 border-4 border-green-700 rounded-full bg-[#fdfcf7] flex items-center justify-center">
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
              <div className="w-24 h-24 border-4 border-green-700 rounded-full bg-[#fdfcf7] flex items-center justify-center">
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
              <div className="w-24 h-24 border-4 border-green-700 rounded-full bg-[#fdfcf7] flex items-center justify-center">
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
              <div className="w-24 h-24 border-4 border-green-700 rounded-full bg-[#fdfcf7] flex items-center justify-center">
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







    </div>
  );
}
