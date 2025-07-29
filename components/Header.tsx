// "use client"
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { useState } from "react";

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

//  const handleLogin =() => {
//     redirect("/auth")
//   }


// export const Header = () => {
//       const [currentPage, setCurrentPage] = useState('home');
//         const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     return (
//        <header className=" fixed  left-44 w-[1376px] top-0 mx-auto  z-50 bg-black/20 backdrop-blur-sm  border-b border-white/10">
//   <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//     {/* Logo */}
//     <div className="flex-shrink-0">
//       <img
//         src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
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
//                 : "text-white hover:text-green-300"
//             }`}
//           >
//             {item.name}
//           </Link>
//           {index < navigationItems.length - 1 && (
//             <span className="h-6 w-px bg-white/30 mx-2" />
//           )}
//         </div>
//       ))}
//     </nav>

//     {/* Hamburger button */}
//     <div className="block lg:hidden">
//       <button
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         className="text-white focus:outline-none"
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
//         <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
//           <svg 
//             className="w-5 h-5 text-white" 
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
//       <div className="flex items-center gap-1 text-white cursor-pointer">
//         <span className="text-sm font-medium">EN</span>
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
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
//         <button onClick = {() => handleLogin} className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   )}
// </header>
//     )
// }
// "use client"
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { useState } from "react";

// const navigationItems = [
//   { name: "Home", href: "/" },
//   { name: "Mission", href: "/mission" },
//   { name: "Shop", href: "/shop" },
//   { name: "Resources", href: "/resources" },
//   { name: "Outlets", href: "/outlets" },
//   { name: "Surveys", href: "/surveys" },
//   { name: "Events", href: "/events" },
//   { name: "Contacts", href: "/contact" },
// ];

// const handleLogin = () => {
//   redirect("/auth")
// }

// export const Header = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   return (
//     <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[1400px] z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 mx-auto">
//       <div className="w-full px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335"
//             alt="Biovision Africa Trust"
//             className="h-10 md:h-12 lg:h-14 object-contain"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-2">
//           {navigationItems.map((item, index) => (
//             <div key={item.name} className="flex items-center">
//               <Link
//                 href={item.href}
//                 className={`text-sm font-semibold px-2 transition ${
//                   currentPage === item.name.toLowerCase()
//                     ? "text-green-400"
//                     : "text-white hover:text-green-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//               {index < navigationItems.length - 1 && (
//                 <span className="h-6 w-px bg-white/30 mx-2" />
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Search + Sign Up - Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* Search with circular button */}
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
//               <svg 
//                 className="w-5 h-5 text-white" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
//                 />
//               </svg>
//             </div>
//           </div>
          
//           {/* Sign Up Button */}
//           <button className="bg-green-600 hover:bg-green-700 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition">
//             Sign Up
//           </button>
          
//           {/* Language Selector */}
//           <div className="flex items-center gap-1 text-white cursor-pointer">
//             <span className="text-sm font-medium">EN</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>

//         {/* Hamburger button - Mobile & Tablet */}
//         <div className="flex md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="text-white focus:outline-none p-2"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   mobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12" // X icon
//                     : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
//                 }
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {mobileMenuOpen && (
//         <div className="md:hidden px-4 pt-4 pb-6 bg-black/90 backdrop-blur-sm border-t border-white/10">
//           <nav className="space-y-3">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block text-sm font-semibold py-2 ${
//                   currentPage === item.name.toLowerCase()
//                     ? "text-green-400"
//                     : "text-white hover:text-green-300"
//                 }`}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Mobile Search and Sign Up */}
//           <div className="mt-6 space-y-4">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <span className="text-white text-sm">Search</span>
//             </div>
//             <button 
//               onClick={() => handleLogin()} 
//               className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium"
//             >
//               Sign Up
//             </button>
            
//             {/* Language Selector Mobile */}
//             <div className="flex items-center gap-2 text-white">
//               <span className="text-sm font-medium">Language:</span>
//               <div className="flex items-center gap-1 cursor-pointer">
//                 <span className="text-sm font-medium">EN</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }"use client";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { redirect } from "next/navigation";

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

const handleLogin = () => {
  redirect("/auth");
};

export const Header = ({ theme = "dark" }: { theme?: "light" | "dark" }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = theme === "light";

  const logoSrc = isLight
    ? "/images/greenlogo.png"
    : "https://api.builder.io/api/v1/image/assets/TEMP/5376572c943bbbbf555a8e8d2b23c9146eee9067?width=335";

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div
        className={`w-full ${
          isLight
            ? "bg-white border-b border-black/10"
            : "bg-black/40 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoSrc}
              alt="Biovision Africa Trust"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  className={`text-sm font-semibold px-2 transition ${
                    pathname === item.href
                      ? "text-green-400"
                      : isLight
                      ? "text-black hover:text-green-300"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  {item.name}
                </Link>
                {index < navigationItems.length - 1 && (
                  <span
                    className={`h-6 w-px mx-2 ${
                      isLight ? "bg-black/20" : "bg-white/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition ${
                isLight
                  ? "border-green-500 hover:bg-green-100/10"
                  : "border-white/40 hover:bg-white/10"
              }`}
            >
              <svg
                className={`w-5 h-5 ${isLight ? "text-green-500" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleLogin}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition"
            >
              Sign Up
            </button>

            {/* Language Selector */}
            <div
              className={`flex items-center gap-1 cursor-pointer ${
                isLight ? "text-green-500" : "text-white"
              }`}
            >
              <span className="text-sm font-medium">EN</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="block lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isLight ? "text-green-500" : "text-white"} focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`block lg:hidden px-4 pt-4 pb-6 ${
              isLight
                ? "bg-white border-t border-black/10"
                : "bg-black/80 border-t border-white/10"
            } backdrop-blur-sm`}
          >
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-semibold ${
                    pathname === item.href
                      ? "text-green-400"
                      : isLight
                      ? "text-black hover:text-green-300"
                      : "text-white hover:text-green-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                    isLight ? "border-green-500" : "border-white/40"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 ${isLight ? "text-green-500" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
