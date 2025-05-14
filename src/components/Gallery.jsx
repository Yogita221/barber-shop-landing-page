// section 1 images

import img1 from '../assets/work1.jpg'
import img2 from '../assets/work2.jpg'
import img3 from '../assets/work3.jpg'
import img4 from '../assets/work4.jpg'
import img5 from '../assets/work5.jpg'
import img6 from '../assets/work6.jpg'
import img7 from '../assets/work7.jpg'
import img8 from '../assets/work8.jpg'

// section 2 images
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import barberWork1 from '../assets/barber1.jpg'
import barberWork2 from '../assets/barber2.jpg'
import barberWork3 from '../assets/barber3.jpg'

const Gallery = () => {
 const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const team = [
  {
    name: 'Jason Rodriguez',
    title: 'Owner & Master Barber',
    description:
      "With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and...",
    WorkImage: barberWork1,
    social: ['instagram', 'facebook'],
    active: false,
  },
  {
    name: 'Marcus Williams',
    title: 'Senior Barber',
    description:
      'Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal...',
   WorkImage: barberWork2,
    social: ['instagram', 'facebook'],
    active: true, // highlighted card
  },
  {
    name: 'Terrence Jackson',
    title: 'Barber & Stylist',
    description:
      'Terrence specializes in modern men\'s styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look...',
   WorkImage: barberWork3,
    social: ['instagram', 'facebook'],
    active: false,
  },
];

  return (
    <>
   {/* section 1 */}
   <section className="bg-[#1b1b1b] text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">Our Work & Shop</p>   
  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
Our <span className="relative z-10">Barbershop</span> Gallery
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>
<p 
style={{color:"#71717b"}}
className="text-gray-400 max-w-2xl mx-auto mt-9">         
Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
  </p>
   </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      
    </section>

    {/* section 2 */}

     <section className="bg-[#1b1b1b] text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">Expert Stylists</p>   
  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
Maat <span className="relative z-10">Our</span> Barbers
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>
<p 
style={{color:"#71717b"}}
className="text-gray-400 max-w-2xl mx-auto mt-9">         
Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
  </p>
   </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-md border border-transparent hover:border-yellow-500 hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={member.WorkImage}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="border-t-2 border-yellow-500 w-12 mb-3"></div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-yellow-400 text-sm mb-3">{member.title}</p>
                <p className="text-sm text-gray-400 mb-4">{member.description}</p>
                <div className="flex space-x-3">
                  {member.social.includes('instagram') && (
                    <a href="#" className="bg-yellow-600 p-2 rounded-full hover:bg-yellow-500 transition">
                      <FaInstagram className="text-white" />
                    </a>
                  )}
                  {member.social.includes('facebook') && (
                    <a href="#" className="bg-yellow-600 p-2 rounded-full hover:bg-yellow-500 transition">
                      <FaFacebookF className="text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </section>
     </>
  );
  }


export default Gallery;
