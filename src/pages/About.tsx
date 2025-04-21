
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-warehouse-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12">
            <motion.h1 
  className="text-4xl font-bold mb-10 "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Abou Warehousing Adda
</motion.h1>

              <motion.p 
                className="text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                India's premier platform connecting businesses with warehouse solutions
              </motion.p>
            </div>
            <motion.div 
              className="mt-8 md:mt-0 md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljpFV30qDZV4oV3NdqqF-lGfg4dF4-kyT-Q&s" 
                alt="Warehouse interior"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-2 h-1 w-20 bg-warehouse-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, Warehousing Adda began with a simple mission: to transform how businesses find and manage warehouse spaces in India. Our founders, with decades of experience in logistics and real estate, recognized the challenges companies faced when searching for suitable storage solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a small directory of warehouses in Mumbai has grown into India's largest platform for warehouse listings, with thousands of verified properties across the country. Today, we serve businesses of all sizes, from startups to multinational corporations, helping them optimize their supply chain operations.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to quality, transparency, and customer satisfaction remains at the core of everything we do. We continue to innovate and expand our services to meet the evolving needs of the Indian logistics industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team meeting"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Office space"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team discussion"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Business meeting"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="mt-2 h-1 w-20 bg-warehouse-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-warehouse-blue h-16 w-16 rounded-full flex items-center justify-center mb-6 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Trust & Integrity</h3>
              <p className="text-gray-600 text-center">
                We verify every warehouse on our platform to ensure quality and accuracy. Our commitment to transparency builds trust with our clients and partners.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-warehouse-orange h-16 w-16 rounded-full flex items-center justify-center mb-6 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Innovation</h3>
              <p className="text-gray-600 text-center">
                We continuously evolve our platform and services to meet the changing needs of the logistics industry. Our technology-driven approach simplifies warehouse management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center mb-6 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Customer Focus</h3>
              <p className="text-gray-600 text-center">
                Our clients' success is our success. We provide personalized support and solutions tailored to each business's unique requirements and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <div className="mt-2 h-1 w-20 bg-warehouse-orange mx-auto"></div>
            <p className="mt-4 text-xl text-gray-500">Meet the experts behind Warehousing Adda</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Rajiv Mehta" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rajiv Mehta</h3>
                <p className="text-warehouse-blue mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of experience in logistics and supply chain management, Rajiv leads our vision and strategic direction.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Sunita Sharma" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sunita Sharma</h3>
                <p className="text-warehouse-blue mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Sunita oversees all operational aspects of our platform, ensuring seamless experiences for both warehouse owners and clients.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Anand Patel" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Anand Patel</h3>
                <p className="text-warehouse-blue mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Anand leads our technology team, developing innovative solutions that power our platform and enhance user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-warehouse-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Warehousing Adda Family</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for warehouse space or want to list your property, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-warehouse-blue hover:bg-warehouse-lightBlue hover:text-white">
              Find a Warehouse
            </Button>
            <Button variant="outline" className="bg-blue text-white hover:bg-white hover:text-warehouse-blue">
              List Your Property
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
