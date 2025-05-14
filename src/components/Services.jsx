import { FaCut, FaUser, FaCrown } from 'react-icons/fa';

// section 1
const BarberServices = [
  {
    title: 'Haircuts',
    description:
      'Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.',
    points: ['Classic Cuts', 'Modern Styles'],
    icon: <FaCut className="text-white text-2xl" />,
    accentColor: 'bg-gray-700',
    textColor: 'text-white',
  },
  {
    title: 'Beard Services',
    description:
      'Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves.',
    points: ['Beard Trims', 'Beard Shaping'],
    icon: <FaUser className="text-white text-2xl" />,
    accentColor: 'bg-gray-700',
    textColor: 'text-white',
  },
  {
    title: 'Premium Services',
    description:
      'Enhance your look with our premium barbering services including hair coloring, revitalizing scalp treatments, and styling for special occasions.',
    points: ['Hair Coloring', 'Scalp Treatments'],
    icon: <FaCrown className="text-white text-2xl" />,
    accentColor: 'bg-gray-700',
    textColor: 'text-white',
  },
];

// section 2
const BarberShop = [
  {
   title1 : 'User',
   description1 : 'Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and mens styling',
   heading1 : 'Expert Barbers',
  },

    {
   title1 : 'Scissors',
   description1 : 'We use only high-quality barbering tools and premium men grooming products to ensure the best results for your hair and skin',
   heading1 : 'Premium Tools & Products',
  },

    {
   title1 : 'Home',
   description1 : 'Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave',
   heading1 : 'Classic Barbershop Experience',
  },

]

const Services = () => {
  return (
    <>
    {/* section 1 */}
   <section className="bg-[#1b1b1b] text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">Premium Grooming</p>   
  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
  Our <span className="relative z-10">Barber</span> Services
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>
        <p 
        style={{color:"#71717b"}}
        className="text-gray-400 max-w-2xl mx-auto mt-9">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BarberServices.map((service, index) => (
          <div
            key={index}
            style={{backgroundColor: '#222222'}}
         className={`rounded-lg p-6 text-left transition-all duration-300 transform border border-gray-700 hover:shadow-2xl hover:-translate-y-2 hover:border-t-4 hover:border-t-yellow-400 hover:border-l hover:border-r hover:border-b hover:border-yellow-400 min-h-[500px] flex flex-col justify-between`}

          >
            <div className="mb-4">
              <div
                className={`${service.accentColor} w-24 h-24 flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110 mt-12`}
              >
                {service.icon}
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${service.textColor}`}>{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* section 2 */}

    <section className="bg-[#1b1b1b] text-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="text-center mb-12">
    <p className="text-yellow-400 font-semibold">Our Commitment</p>   
  <h2 className="text-3xl md:text-4xl font-bold mt-2 group relative inline-block">
  Why Choose <span className="relative z-10">PMC</span> Barbershop?
  <span className="absolute left-1/2 bottom-0 top-11 h-1 bg-yellow-400 transition-all duration-500 ease-in-out -translate-x-1/2 w-[60px] group-hover:w-full"></span>
</h2>
<p 
style={{color:"#71717b"}}
className="text-gray-400 max-w-2xl mx-auto mt-9">         
What makes us the premier barbershop in Denton, TX.
  </p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
  {BarberShop.map((item, index) => (
    <div
      key={index}
      className="bg-[#222222] text-white rounded-lg p-6 border border-gray-700 shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl opacity-0 animate-fade-in-up"
    >
      {/* Box Content */}
      <div 
      className='bg-darkBrown text-yellow-400 w-20 h-20 flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 hover:text-white mt-2'>
      {item.title1}
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-4">{item.heading1}</h3>
      <p style={{color:"#71717b"}} >{item.description1}</p>
    </div>
  ))}
</div>
  </section>
    </>
  )
}

export default Services
