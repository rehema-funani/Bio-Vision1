// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// export default function AgroecologySignup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: ''
//   });

//   const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHN0eWxlPgouZ3JhZGllbnQtYmcgewogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZGI5NGYgMCUsICM0YTkwMzMgMjAlLCAjMzU3MDI2IDUwJSwgIzJkNWExZSA4MCUpOwp9Cjwvc3R5bGU+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTA4MCIgY2xhc3M9ImdyYWRpZW50LWJnIi8+Cjwvc3ZnPgo=')`
//         }}
//       >
//         {/* Overlay to simulate the greenhouse/garden effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-green-700/40 to-green-800/50"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-200/20"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-md">
//           {/* Main Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">
//               Join us today
//             </h1>
            
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Empowering communities through agroecology. Start by entering your phone number.
//             </p>

//             <div className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   First & Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="i.e. Devon Lean"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
//                 />
//               </div>

//               {/* Phone Number Field */}
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex">
//                   {/* Country Code Selector */}
//                   <div className="relative">
//                     <button
//                       type="button"
//                       className="flex items-center px-4 py-3 rounded-l-full border border-r-0 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
//                     >
//                       <div className="w-6 h-4 bg-green-600 rounded-sm mr-2 flex items-center justify-center">
//                         <div className="w-full h-full bg-gradient-to-b from-black via-red-600 to-green-600"></div>
//                       </div>
//                       <span className="text-sm font-medium text-gray-700 mr-1">+254</span>
//                       <ChevronDown className="w-4 h-4 text-gray-500" />
//                     </button>
//                   </div>
                  
//                   {/* Phone Input */}
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phoneNumber"
//                     placeholder="0712 345 678"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     className="flex-1 px-4 py-3 rounded-r-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
//                   />
//                 </div>
//               </div>

//               {/* Privacy Notice */}
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 We'll never share your number. Standard SMS rates may apply.
//               </p>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
//               >
//                 Send OTP
//               </button>

//               {/* Sign In Link */}
//               <p className="text-center text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <button type="button" className="text-green-600 hover:text-green-700 font-medium underline">
//                   Sign In
//                 </button>
//               </p>

//               {/* Terms and Privacy */}
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 By continuing you accept our{' '}
//                 <button type="button" className="text-green-600 hover:underline">
//                   Terms of Service
//                 </button>
//                 . Also learn how we process your data in our{' '}
//                 <button type="button" className="text-green-600 hover:underline">
//                   Privacy Policy
//                 </button>
//                 {' '}and{' '}
//                 <button type="button" className="text-green-600 hover:underline">
//                   Cookie Policy
//                 </button>
//                 .
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Toolbar */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//         <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
//           <div className="flex items-center space-x-4">
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 bg-blue-500 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded text-xs flex items-center justify-center font-bold">T</div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full ml-1"></div>
//               </div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//               <div className="w-6 h-6 border-2 border-gray-400 rounded text-xs flex items-center justify-center">
//                 &lt;/&gt;
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-start px-4 md:px-24"
      style={{
        backgroundImage: "url('/images/background2.png')", // ⬅️ Replace with your actual image path
      }}
    >
      {/* 🌍 Decorative Africa Map Overlay */}
      <Image
        src="/images/africa.png" // Replace with your transparent map image
        alt="Africa Map"
        width={500}
        height={500}
        className="absolute right-0 bottom-0  pointer-events-none select-none"
      />

      {/* 📋 Form Section */}
      <div className="z-10 bg-white/90 backdrop-blur-sm rounded-[20px] shadow-lg p-6 sm:p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Join us today</h1>
        <p className="text-sm text-gray-700 mb-6">
          Empowering communities through agroecology. Start by entering your phone number.
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">
            First &amp; Last Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="i.e. Davon Lean"
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 block mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 bg-white">
              <Image
                src="/images/flag.png"
                alt="Kenya Flag"
                width={24}
                height={16}
              />
              <span className="text-sm font-medium">+254</span>
            </div>
            <input
              id="phone"
              type="tel"
              placeholder="0712 345 678"
              className="w-full px-3 py-2 text-sm focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            We’ll never share your number. Standard SMS rates may apply.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-2.5 rounded-full">
            Send OTP
          </button>
        </div>

        {/* Sign In */}
        <p className="text-sm text-gray-700 mt-5 text-center">
          Already have an account?{" "}
          <a href="#" className="text-green-700 font-semibold underline">
            Sign In
          </a>
        </p>

        {/* Policies */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing you accept our{" "}
          <a href="#" className="underline">Terms of Service</a>. Also learn how we process your data in our{" "}
          <a href="#" className="underline">Privacy Policy</a> and{" "}
          <a href="#" className="underline">Cookies policy</a>.
        </p>
      </div>
    </main>
  );
}
