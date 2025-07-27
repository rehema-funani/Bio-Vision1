'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AuthPage() {
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phoneNumber.trim()) {
      console.log(`${isSignIn ? 'Signing in' : 'Signing up'} with:`, formData);
      setTimeout(() => {
        router.push('/');
      }, 500);
    } else {
      alert('Please enter your phone number');
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/background2.png"
          alt="Background"
          fill
          className="object-cover brightness-100 contrast-110"
          priority
        />
      </div>

      {/* Africa Map Overlay */}
      <div
        className={`absolute top-0 h-full w-[40%] z-10 pointer-events-none hidden md:block ${
          isSignIn ? 'left-0 ml-20' : 'right-0 mr-20'
        }`}
      >
        <Image
          src="/images/africa2.png"
          alt="Africa Map"
          fill
          className={`object-contain mix-blend-multiply brightness-100 contrast-125 ${
            isSignIn ? 'object-left' : 'object-right'
          }`}
        />
      </div>

      {/* Form Area */}
      <div
        className={`flex h-full items-center ${
          isSignIn
            ? 'justify-end mr-20 pr-6 md:pr-12'
            : 'justify-start ml-20 pl-6 md:pl-12'
        }`}
      >
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-xl p-8 w-full max-w-md shadow-2xl space-y-4 z-20">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isSignIn ? 'Sign In' : 'Join us today'}
          </h1>

          <p className="text-gray-700 text-sm leading-relaxed">
            {isSignIn
              ? 'Enter your phone number to sign in to your account'
              : 'Empowering communities through agroecology. Start by entering your phone number.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <div>
                <label
                  htmlFor="fullName"
                  className="text-xs text-gray-700 block mb-1"
                >
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

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-xs text-gray-700 block mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <div className="flex items-center px-2 py-2 border border-gray-300 bg-white rounded-md text-sm space-x-1.5">
                  <Image
                    src="/images/flag.png"
                    alt="Kenya Flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
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

            {isSignIn && (
              <div className="flex items-center space-x-2 text-xs text-gray-700">
                <input type="checkbox" id="remember" className="h-4 w-4" />
                <label htmlFor="remember">Remember me</label>
              </div>
            )}

            <p className="text-xs text-gray-600 italic">
              We’ll never share your number. Standard SMS rates may apply.
            </p>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-md transition"
            >
              Send OTP
            </button>

            <p className="text-xs text-gray-700">
              {isSignIn ? (
                <>
                  Don’t have an account?{' '}
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

            <p className="text-[11px] text-gray-500">
              By continuing you accept our{' '}
              <a href="#" className="text-green-600 hover:underline">
                Terms of Service
              </a>
              . Also learn how we process your data in our{' '}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-green-600 hover:underline">
                Cookies policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
