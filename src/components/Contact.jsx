import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';


const infoItems = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Address",
      detail: "518 Acme St unit 101, Denton, TX 76205, United States",
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: "Phone",
      detail: "+1 940-808-1569",
    },
    {
      icon: <FaClock size={20} />,
      title: "Business Hours",
      detail: "Mon–Fri: 9:00 AM – 7:00 PM, Sat: 9:00 AM – 5:00 PM, Sun: Closed",
    },
  ];






const Contact = () => {

    const [selectedService, setSelectedService] = useState('')
  const handleChange = (event) => {
    setSelectedService(event.target.value)
  }
 

  return (
    <>
    <section className="bg-[#1a1a1a] text-white px-4 py-12 md:px-10 lg:px-20">
      <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">Visit Our Shop</p>   
  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
  Our <span className="relative z-10">Location</span> 
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>
<p 
style={{color:"#71717b"}}
className="text-gray-400 max-w-2xl mx-auto mt-9">         
Conveniently located in Denton, TX:
  </p>
   </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Info Panel */}
       <div className="w-full lg:w-2/5 bg-[#2a2a2a] rounded-2xl p-6 lg:p-10">

<div className="space-y-8">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-[#2a2a2a] p-5 rounded-xl 
          shadow-md hover:shadow-xl transition-all duration-300 
          hover:bg-[#1f1f1f] hover:scale-[1.01] cursor-pointer"
        >
          <div className="bg-yellow-400 p-3 rounded-full text-black shadow-md">
            {item.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
        {/* Right Form Panel */}
        <div className="w-full lg:w-3/5 bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-yellow-500">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Your Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-yellow-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-yellow-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Service Interested In</label>
              <select 
              value={selectedService}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-yellow-500">
                <option className='text-black' value="">Select an option</option>
                <option className='text-black' value="Haircut">Haircut</option>
                <option className='text-black' value="Hair spa">Hair spa</option>
                <option className='text-black' value="Beard Trim">Beard Trim</option>
                 <option className='text-black' value="Kids Haircut">Kids Haircut</option>
                  <option className='text-black' value="Head Massage">Head Massage</option>
                   <option className='text-black' value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Preferred Date</label>
              <input type="date" className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-yellow-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea rows="5" placeholder="Tell us about your style preferences or any questions you have" className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-yellow-500" />
            </div>

            <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* bottom section */}

     <section className="bg-yellow-500 flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-10">Ready for a Fresh Cut?</h1>
        <p className="max-w-2xl text-white mb-10 ">
          Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md">Book an Appointment</button>
          <button className="bg-black text-white px-6 py-2 rounded-md">View Our Services</button>
        </div>
      </section>
</>
    
  );
};

export default Contact;
