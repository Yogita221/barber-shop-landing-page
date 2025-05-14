import React from 'react'
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1b1b1b] text-white px-4 py-10 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="mb-3 font-bold text-lg">PMC Barbershop</div>
            <p className="text-gray-500">Classic cuts with modern style</p>
            <div className="flex mt-4 space-x-3">
              <button className="bg-gray-800 p-3 rounded-full">
                <FaInstagram className="text-white" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full">
                <FaFacebookF className="text-white" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-500">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-500">518 Acme St unit 101, Denton, TX 76205, United States</p>
            <p className="text-gray-500 mt-2">+19408081569</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-500 mb-2">Subscribe to our newsletter to receive updates and news.</p>
            <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-gray-800 text-white text-center" />
            <button className="mt-2 w-full bg-yellow-400 text-black py-2 rounded">Subscribe</button>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
