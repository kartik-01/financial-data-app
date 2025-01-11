import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4E505B] text-white mt-auto">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social Links */}
            <div className="space-y-6">
              <img src="/images/footer_logo.png" alt="ValueGlance" className="h-8" />
              <div>
                <p className="font-medium mb-2">Follow us</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:opacity-75">
                  <img width="30" height="30" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                  </a>
                  <a href="#" className="hover:opacity-75">
                  <img width="30" height="30" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                  </a>
                  <a href="#" className="hover:opacity-75">
                  <img width="28" height="28" src="https://img.icons8.com/forma-light/24/twitterx.png" alt="twitterx"/>
                  </a>
                  <a href="#" className="hover:opacity-75">
                  <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                  </a>
                  <a href="#" className="hover:opacity-75">
                  <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1"/>
                  </a>
                  <a href="#" className="hover:opacity-75">
                  <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-sm mb-2">Need help?</p>
                  <p> Ask <a href="mailto:support@valueglance.com" className="text-sm underline hover:opacity-75">
                    support@valueglance.com
                  </a></p>
                  
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:opacity-75">About</a></li>
                <li><a href="#" className="text-sm hover:opacity-75">Features</a></li>
                <li><a href="#" className="text-sm hover:opacity-75">Price</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-medium mb-4">Legal & Privacy</h3>
              <ul className="space-y-2">
                <li><a href="https://valueglance.com/assets/Privacy_Policy-ba672357.pdf" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">Privacy</a></li>
                <li><a href="https://valueglance.com/assets/Terms_of_Service-052b81c6.pdf" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">Terms</a></li>
              </ul>
            </div>

            {/* More Links */}
            <div>
            <h3 className="font-medium mb-4">More</h3>
            <ul className="space-y-2">
              <li><a href="https://www.amazon.com/dp/B0BZ3WDCC1" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">Book</a></li>
              <li><a href="https://valueglance.com/affiliate" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">Affiliates</a></li>
              <li><a href="https://valueglance.substack.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">Blog</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-75">FAQ</a></li>
            </ul>
          </div>

          </div>

          {/* Newsletter Section */}
          <div className="mt-12 border-t border-[rgb(103,102,102)] pt-8">
      <div className="flex justify-between items-center">
        <div className="max-w-2xl">
          <h3 className="text-xl font-medium mb-2">Subscribe to our free newsletter</h3>
          <p className="text-sm text-gray-300">
            The latest investing insights, tips to implement the strategy, and promotional offers.
          </p>
        </div>
        <button 
          onClick={() => window.open('https://valueglance.substack.com/', '_blank', 'noopener,noreferrer')}
          className="bg-white text-[#1a1f36] px-6 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90"
        >
          Subscribe
        </button>
      </div>
    </div>

          {/* Copyright */}
          <div className="mt-6 border-t border-gray-500">
          <div className="mt-6 text-sm text-center text-gray-300">
            © 2024 ValueGlance. All Rights Reserved
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
