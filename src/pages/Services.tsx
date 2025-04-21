
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Warehouse, Clock, Shield, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Warehouse Listings",
    description: "Browse through our extensive collection of verified warehouses across India. Find properties that match your specific requirements.",
    icon: Warehouse,
    color: "bg-warehouse-blue"
  },
  {
    title: "Logistics Solutions",
    description: "Connect with trusted logistics partners to ensure smooth transportation of your goods to and from warehouses.",
    icon: Truck,
    color: "bg-warehouse-orange"
  },
  {
    title: "Inventory Management",
    description: "Access state-of-the-art inventory management systems integrated with your chosen warehouse.",
    icon: Package,
    color: "bg-green-500"
  },
  {
    title: "Real-time Tracking",
    description: "Monitor your inventory and shipments in real-time with our advanced tracking systems.",
    icon: Clock,
    color: "bg-purple-500"
  },
  {
    title: "Warehouse Verification",
    description: "All warehouses on our platform undergo a thorough verification process to ensure quality and safety standards.",
    icon: Shield,
    color: "bg-red-500"
  },
  {
    title: "Cost Calculator",
    description: "Use our intelligent cost calculator to estimate storage costs based on your specific requirements.",
    icon: Calculator,
    color: "bg-yellow-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Services = () => {
  return (
    <div className="py-12 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-warehouse-blue to-warehouse-darkBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive warehouse solutions to meet all your storage and logistics needs
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center ${service.color} text-white mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 min-h-[100px]">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="mt-4 border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warehouse-blue rounded-xl shadow-xl p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Streamline Your Warehouse Operations?</h2>
                <p className="mt-3 text-lg text-warehouse-lightBlue">
                  Join thousands of businesses that trust Warehousing Adda for their storage needs.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/3 md:text-right">
                <Button className="bg-white text-warehouse-blue hover:bg-warehouse-lightBlue hover:text-white">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say About Our Services</h2>
            <p className="mt-4 text-xl text-gray-500">Trusted by businesses across India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Client"
                    className="h-16 w-16 rounded-full mb-4" 
                  />
                  <p className="text-gray-700 text-center mb-4">
                    "The warehouse verification service saved us from a potentially problematic partnership. Their thorough checks ensured we got a quality facility."
                  </p>
                  <h3 className="font-semibold">Rajesh Kumar</h3>
                  <p className="text-sm text-gray-500">Operations Director, Global Logistics</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Client"
                    className="h-16 w-16 rounded-full mb-4" 
                  />
                  <p className="text-gray-700 text-center mb-4">
                    "The inventory management system recommended by Warehousing Adda increased our efficiency by 40%. It's been a game-changer for our business."
                  </p>
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">CEO, Innovative Retail Solutions</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/62.jpg" 
                    alt="Client"
                    className="h-16 w-16 rounded-full mb-4" 
                  />
                  <p className="text-gray-700 text-center mb-4">
                    "Their logistics solutions connected us with the perfect transportation partner. Seamless integration with our warehouse operations."
                  </p>
                  <h3 className="font-semibold">Amit Patel</h3>
                  <p className="text-sm text-gray-500">Logistics Manager, Fresh Foods Inc</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
