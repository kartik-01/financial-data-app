import React from 'react';

const NavBar = ({ isOpen, setIsOpen, visible }) => {
  return (
    <>
      <nav className={`bg-white border-b fixed w-full transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/valueglance-logo.png" alt="Logo" className="h-9 w-auto" />
          </div>

        {/* Page Title */}
          <div className="hidden md:flex flex-1 justify-center">
            <span className="text-xl text-[#162055]">Apple Financial Data</span>
          </div>

        {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => window.location.href = 'https://valueglance.com/register'}
              className="w-[106.19px] h-[42px] bg-[#162055] text-white rounded-lg transition-all duration-200 hover:shadow-md text-sm font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={() => window.location.href = 'https://valueglance.com/login'}
              className="w-[106.19px] h-[42px] text-[#162055] border border-[#162055] hover:text-gray-700 transition-all duration-200 hover:shadow-sm rounded-lg text-sm font-medium"
            >
              Sign In
            </button>
          </div>

        {/* Mobile Title */}
          <div className="md:hidden flex-1 text-center">
            <span className="text-l text-[#162055]">Apple Financial Data</span>
          </div>

        {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#162055] p-2"
              >
                {isOpen ? (
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t mt-6">
            <div className="px-4 py-2 space-y-3">
              <button
                onClick={() => window.location.href = 'https://valueglance.com/register'}
                className="w-full h-[42px] bg-[#162055] text-white rounded-lg transition-all duration-200 hover:shadow-md text-sm font-medium"
              >
                Sign Up
              </button>
              <button
                onClick={() => window.location.href = 'https://valueglance.com/login'}
                className="w-full h-[42px] text-[#162055] border border-[#162055] hover:text-gray-700 transition-all duration-200 hover:shadow-sm rounded-lg text-sm font-medium"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
      </nav>
      <div className="h-[92px]"></div>
    </>
  );
};

export default NavBar;
