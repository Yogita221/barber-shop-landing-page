import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import barberTeam from '../assets/barbar team.jpg'; 

const Home = () => {
  return (
    <section id="home" className="bg-[#1b1b1b] text-white py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 pr-10">
        <p className="text-yellow-500 font-semibold text-sm">
          Premium Barber Services in Denton
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Classic Cuts, Modern Style
        </h1>
        <h2 className="text-5xl font-bold text-yellow-500 underline decoration-yellow-600 underline-offset-4">
          Premium Barber Shop
        </h2>
        <p className="text-gray-300 text-lg">
          At PMC Barbershop, we combine traditional barbering techniques with modern styling
          to give you the perfect look. Our experienced barbers deliver precision cuts,
          beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
        </p>

        {/* Location Tag */}
        <div className="flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-full w-fit text-white">
          <MapPin className="w-5 h-5 text-yellow-500" />
          <span>Denton, TX</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 pt-4">
         <button className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-md hover:bg-zinc-800 transition">
    <Phone className="w-5 h-5" />
    Our Services
  </button>
          <button className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition">
    <Phone className="w-5 h-5" />
    Book Now
  </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
       <img
  src={barberTeam}
  alt="PMC Barber Team"
  className="w-full sm:w-full md:w-full lg:w-[500px] h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
/>

      </div>
    </section>
  );
};

export default Home;
