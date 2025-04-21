
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Warehouse } from "@/components/WarehouseCard";
import { MapPin, Square, IndianRupee, Tag, Calendar, Phone, Mail, Building, Clock } from "lucide-react";

// Mock data for warehouses - would come from a real API in production
const warehouseData: Warehouse[] = [
  {
    id: "1",
    title: "Premium Warehouse in Mumbai",
    location: "Andheri East, Mumbai",
    area: "15,000 sq.ft",
    price: "₹55/sq.ft/month",
    type: "Grade A",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Logistics Hub in Delhi NCR",
    location: "Gurgaon, Haryana",
    area: "25,000 sq.ft",
    price: "₹45/sq.ft/month",
    type: "Logistics",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Cold Storage Facility",
    location: "Bangalore, Karnataka",
    area: "10,000 sq.ft",
    price: "₹65/sq.ft/month",
    type: "Cold Storage",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Industrial Warehouse Space",
    location: "Chennai, Tamil Nadu",
    area: "20,000 sq.ft",
    price: "₹40/sq.ft/month",
    type: "Industrial",
    image: "https://voitco.com/wp-content/uploads/2022/09/The-Future-of-Industrial-Real-Estate-1.jpg"
  },
  {
    id: "5",
    title: "Distribution Center",
    location: "Hyderabad, Telangana",
    area: "30,000 sq.ft",
    price: "₹50/sq.ft/month",
    type: "Distribution",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEVJxf_UpJfCDvySFLHnSvjpvzNK1Da1uJQ&s"
  },
  {
    id: "6",
    title: "E-commerce Fulfillment Center",
    location: "Pune, Maharashtra",
    area: "18,000 sq.ft",
    price: "₹58/sq.ft/month",
    type: "Fulfillment",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Modern Storage Facility",
    location: "Ahmedabad, Gujarat",
    area: "12,000 sq.ft",
    price: "₹42/sq.ft/month",
    type: "Grade A",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCTtW4m_uv1lO4DIB3i_3Ezr2gXtsL0P3Zg&s"
  },
  {
    id: "8",
    title: "Pharmaceutical Warehouse",
    location: "Chandigarh, Punjab",
    area: "8,000 sq.ft",
    price: "₹70/sq.ft/month",
    type: "Cold Storage",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "9",
    title: "Port Adjacent Warehouse",
    location: "Kochi, Kerala",
    area: "22,000 sq.ft",
    price: "₹48/sq.ft/month",
    type: "Logistics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7w6XYkKpNsjcbL3kYPLQKDyHQm3WWW4HTg&s"
  }
];

const WarehouseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the warehouse with the matching id
  const warehouse = warehouseData.find(w => w.id === id);
  
  if (!warehouse) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Warehouse not found</h2>
        <p className="mt-4 text-gray-600">The warehouse you're looking for does not exist or has been removed.</p>
        <Link to="/warehouses">
          <Button className="mt-6 bg-warehouse-blue hover:bg-warehouse-darkBlue">
            Back to Warehouses
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-warehouse-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/warehouses" className="hover:text-warehouse-blue">Warehouses</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{warehouse.title}</span>
        </div>
        
        {/* Warehouse Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{warehouse.title}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 text-warehouse-orange mr-1" />
              <span className="text-gray-600">{warehouse.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button className="bg-warehouse-orange hover:bg-warehouse-darkOrange">
              Contact Owner
            </Button>
            <Button variant="outline" className="border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white">
              Schedule Visit
            </Button>
          </div>
        </div>
        
        {/* Warehouse Image and Key Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={warehouse.image} 
                alt={warehouse.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-warehouse-blue mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-medium">{warehouse.area}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <IndianRupee className="h-5 w-5 text-warehouse-blue mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Rent</p>
                      <p className="font-medium">{warehouse.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 text-warehouse-blue mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <Badge className="mt-1 bg-warehouse-orange">{warehouse.type}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-warehouse-blue mr-4" />
                    <div>
                      <p className="text-sm text-gray-500">Availability</p>
                      <p className="font-medium">Immediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h4 className="font-medium mb-4">Contact Information</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-warehouse-orange mr-2" />
                      <p>Akash Properties Ltd.</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-warehouse-orange mr-2" />
                      <p>+91 98765 43210</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-warehouse-orange mr-2" />
                      <p>info@akashproperties.com</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-warehouse-orange mr-2" />
                      <p>Response time: Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Tabs for Details, Features, Location */}
        <Tabs defaultValue="details" className="mb-8">
          <TabsList className="w-full justify-start bg-white border border-gray-200 rounded-t-md">
            <TabsTrigger value="details" className="text-base">Details</TabsTrigger>
            <TabsTrigger value="features" className="text-base">Features</TabsTrigger>
            <TabsTrigger value="location" className="text-base">Location</TabsTrigger>
          </TabsList>
          
          <div className="bg-white border border-t-0 border-gray-200 rounded-b-md p-6">
            <TabsContent value="details" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">Warehouse Description</h3>
              <p className="text-gray-700 mb-4">
                This premium Grade A warehouse is located in the heart of Andheri East, one of Mumbai's prime industrial areas. The facility offers 15,000 sq.ft of well-maintained space ideal for storage, distribution, and light manufacturing activities.
              </p>
              <p className="text-gray-700 mb-4">
                The warehouse features a high ceiling (7 meters clear height), reinforced concrete flooring capable of handling heavy loads, and 24/7 security. It's equipped with modern fire safety systems and has ample parking space for loading/unloading operations.
              </p>
              <p className="text-gray-700">
                Located just 2 km from the Western Express Highway and 5 km from the Mumbai International Airport, this warehouse offers excellent connectivity advantages for businesses focusing on urban distribution or time-sensitive logistics operations.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Clear Height: 7 meters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Floor Strength: 5 tons/sqm</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Loading Docks: 4</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Office Space: 500 sq.ft included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Power Supply: 100 KVA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warehouse-blue mr-2"></div>
                    <span className="text-gray-700">Water Supply: Available 24/7</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">Warehouse Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-warehouse-blue mb-2">Security Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>24/7 Security Personnel</li>
                      <li>CCTV Surveillance System</li>
                      <li>Biometric Access Control</li>
                      <li>Perimeter Fencing</li>
                      <li>Fire Detection and Sprinkler System</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-warehouse-blue mb-2">Infrastructure</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>High-quality Concrete Flooring</li>
                      <li>Insulated Roofing</li>
                      <li>Dock Levelers</li>
                      <li>Wide Internal Roads</li>
                      <li>Truck Parking Area</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-warehouse-blue mb-2">Utilities</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Backup Power Generator</li>
                      <li>Industrial-grade Electricity Supply</li>
                      <li>Water Storage Tanks</li>
                      <li>Drainage System</li>
                      <li>Waste Management System</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-warehouse-blue mb-2">Additional Amenities</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Office Space with Air Conditioning</li>
                      <li>Canteen Area</li>
                      <li>Restrooms for Staff</li>
                      <li>Break Room</li>
                      <li>Visitor Parking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">Location & Connectivity</h3>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h4 className="font-medium text-warehouse-blue mb-2">Proximity</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center justify-between">
                        <span>Western Express Highway</span>
                        <span className="font-medium">2 km</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Mumbai International Airport</span>
                        <span className="font-medium">5 km</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Andheri Railway Station</span>
                        <span className="font-medium">3 km</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Nhava Sheva Port</span>
                        <span className="font-medium">32 km</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>City Center</span>
                        <span className="font-medium">15 km</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-warehouse-blue mb-2">Area Information</h4>
                    <p className="text-gray-700 mb-3">
                      Andheri East is a prime industrial and commercial hub in Mumbai. The area hosts numerous business establishments, making it an ideal location for warehouse operations.
                    </p>
                    <p className="text-gray-700">
                      The warehouse is situated in a designated industrial zone with good road connectivity and access to skilled manpower. The area is well served by public transportation, making it convenient for staff commuting.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.119240101697!2d85.82136237526023!3d20.294848810360336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c1e0892073%3A0x7b3fd4b164d5f61a!2sDLF%20Cybercity%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1713610613689!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Warehouse Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Call to Action */}
        <div className="bg-warehouse-blue rounded-lg p-8 text-white">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Interested in this Warehouse?</h3>
              <p className="mt-2 text-warehouse-lightBlue">
                Contact the owner now to book a visit or request more information.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button className="bg-white text-warehouse-blue hover:bg-warehouse-lightBlue hover:text-white">
                Contact Owner
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warehouse-blue">
                Request Similar Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetail;
