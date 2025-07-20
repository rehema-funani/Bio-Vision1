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
  
  <div className="max-w-7xl mx-auto text-center  relative z-10">
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
{/* ✅ Stories & Insights From the Field Section */}
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
    {/* ✅ Upcoming Events & Trainings Section */}
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
              July 18, 2025 | 10:00 AM EAT | Organic Farmers Market, Karen, Nairobi
            </p>
            
            <button className="w-full bg-green-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-800 transition-colors duration-300">
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
              AE/EOA in Practice: Online Webinar for Consumers & Advocates
            </h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              How can consumers make impact-driven choices? Join us for a dynamic online session featuring stories from producers, a live Q&A, and actionable tips for conscious consumption.
            </p>
            <p className="text-white/70 text-xs mb-6">
              August 1, 2025 | 4:00 PM EAT | Online via Zoom
            </p>
            
            <button className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors duration-300">
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
<section className="bg-green-700 py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
  {/* Decorative background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
    <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
  </div>
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
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
<section className="bg-[#2C2A29] py-16 px-4 md:px-8 lg:px-12">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
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
      <footer className="bg-gray-900 py-16 px-4 md:px-8 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  {/* Africa Map Icon */}
                  <div className="relative w-12 h-12">
                    <svg viewBox="0 0 48 48" className="w-full h-full text-white fill-current">
                      <path d="M24 4c-8.5 0-15.5 5.2-18.5 12.5C3.8 19.8 3 23.8 3 28c0 11.6 9.4 21 21 21s21-9.4 21-21c0-4.2-0.8-8.2-2.5-11.5C39.5 9.2 32.5 4 24 4z" />
                      {/* Simplified Africa continent shape */}
                      <path d="M20 12c2-1 4-1 6 0 1 1 2 3 2 5 0 1-1 2-1 3 1 1 2 1 3 2 1 2 0 4-1 5-1 1-3 1-4 2 0 1 1 2 0 3-1 1-2 0-3 1-1 1-1 3-2 4-1 0-2-1-3-1-1 0-2 1-3 0-1-1 0-3-1-4-1-1-2 0-3-1 0-1 1-2 0-3-1-1-3-1-4-2-1-1-2-3-1-5 1-1 2-1 3-2 0-1-1-2-1-3 0-2 1-4 2-5z" className="fill-green-700" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xl font-bold">Biovision</div>
                    <div className="text-white text-sm">Africa Trust</div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">
                Growing Africa's Future Through Sustainable Agriculture
              </h4>
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
                We partner with farmers across Africa to build sustainable food systems through agroecology, creating premium products that support rural communities.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.332 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-6">Explore</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Our Mission</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Shop</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Learn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Press & Media</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Career</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Become a Partner</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-6">Contact</h5>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+254 (0) 20 632 4806</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@biovisionafricatrust.org</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>Duduville Campus, Kasarani Nairobi, Kenya</p>
                    <p className="mt-1">P.O. Box 12345, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="pt-2 space-y-1 text-sm">
                  <p><span className="text-white font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM EAT</p>
                  <p><span className="text-white font-medium">Saturday:</span> 9:00 AM - 1:00 PM EAT</p>
                  <p><span className="text-white font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 BioVision Africa Trust. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Use</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>





    






    </div>
  );
}
