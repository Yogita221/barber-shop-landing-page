import React from "react";
import { Quote } from "lucide-react";
import aboutImage from "../assets/about shop.jpg"; // Replace with actual image path

const About = () => {
  return (
    <section id="about" className="bg-[#1b1b1b] text-white px-6 py-20 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-yellow-400 font-semibold">Our Story</p>

  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
  About <span className="relative z-10">PMC</span> Barbershop
  {/* Animated underline */}
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>


        <p className="text-gray-400 max-w-3xl mx-auto mt-4">
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Image with badge */}
        <div className="w-full md:w-full lg:w-[50%] relative overflow-hidden group">
  <img
    src={aboutImage}
    alt="PMC Shop"
    className="w-full h-auto max-h-[400px] rounded-xl shadow-lg object-cover transform transition duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
  />
  <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-md shadow-md">
    5+ years
  </div>
</div>



        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="border-l-4 border-yellow-400 pl-4 text-gray-300 text-base leading-relaxed">
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </div>

          <div className="bg-[#2b2b2b] p-6 rounded-lg text-gray-300 flex gap-4 items-start shadow-md">
            <Quote className="w-6 h-6 text-yellow-400 mt-1" />
            <p>
              We take pride in our attention to detail and personalized service,
              ensuring each client leaves looking and feeling their best. Our skilled
              barbers combine traditional techniques with modern trends to create custom
              styles that suit each individual's personality and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
