
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import WarehouseCard, { Warehouse } from "@/components/WarehouseCard";
import { Search, Filter, MapPin } from "lucide-react";

// Mock data for warehouses
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

// Warehouse types for filtering
const warehouseTypes = ["All", "Grade A", "Logistics", "Cold Storage", "Industrial", "Distribution", "Fulfillment"];
const locations = ["All Locations", "Mumbai", "Delhi NCR", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Kochi"];

const Warehouses = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Filter warehouses based on selected filters and search query
  const filteredWarehouses = warehouseData.filter(warehouse => {
    // Filter by type
    const typeMatch = activeFilter === "All" || warehouse.type === activeFilter;
    
    // Filter by search query
    const searchMatch = 
      warehouse.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      warehouse.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by location
    const locationMatch = 
      locationFilter === "All Locations" || 
      warehouse.location.includes(locationFilter);
    
    // Filter by price (assuming price format is "₹XX/sq.ft/month")
    const priceString = warehouse.price.replace("₹", "").split("/")[0];
    const price = parseInt(priceString);
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    
    return typeMatch && searchMatch && locationMatch && priceMatch;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-warehouse-blue py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold">Find Your Perfect Warehouse</h1>
              <p className="mt-2 text-warehouse-lightBlue">
                Browse through our extensive collection of verified warehouses across India
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white rounded-lg flex items-center p-2 shadow-md">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <Input 
                  className="border-0 focus-visible:ring-0 p-0 text-black"
                  placeholder="Search warehouses..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between mb-8">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {warehouseTypes.map((type) => (
              <Button
                key={type}
                variant={activeFilter === type ? "default" : "outline"}
                className={
                  activeFilter === type 
                    ? "bg-warehouse-blue hover:bg-warehouse-darkBlue" 
                    : "border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white"
                }
                onClick={() => setActiveFilter(type)}
              >
                {type}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-warehouse-orange text-warehouse-orange"
            onClick={handleFilterToggle}
          >
            <Filter size={18} />
            Advanced Filters
          </Button>
        </div>
        
        {isFilterOpen && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Refine Your Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select 
                  value={locationFilter} 
                  onValueChange={setLocationFilter}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (₹/sq.ft/month)
                </label>
                <div className="pt-6 px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-1"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-warehouse-blue hover:bg-warehouse-darkBlue"
                  onClick={() => {
                    // Reset all filters
                    setActiveFilter("All");
                    setSearchQuery("");
                    setLocationFilter("All Locations");
                    setPriceRange([0, 100]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-4 flex items-center text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span>Showing {filteredWarehouses.length} warehouses</span>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWarehouses.map((warehouse) => (
            <div key={warehouse.id} className="animate-fade-in">
              <WarehouseCard warehouse={warehouse} />
            </div>
          ))}
        </div>
        
        {filteredWarehouses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium text-gray-600">No warehouses found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button className="bg-warehouse-orange hover:bg-warehouse-darkOrange text-white px-8 py-3">
            Load More Warehouses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Warehouses;
