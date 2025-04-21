import { useState } from "react";
import { Button } from "@/components/ui/button";
import WarehouseCard, { Warehouse } from "./WarehouseCard";

// Mock data for warehouses
const warehouseData: Warehouse[] = [
  {
    id: "1",
    title: "Premium Warehouse in Mumbai",
    location: "Andheri East, Mumbai",
    area: "15,000 sq.ft",
    price: "₹55/sq.ft/month",
    type: "Grade A",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Logistics Hub in Delhi NCR",
    location: "Gurgaon, Haryana",
    area: "25,000 sq.ft",
    price: "₹45/sq.ft/month",
    type: "Logistics",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Cold Storage Facility",
    location: "Bangalore, Karnataka",
    area: "10,000 sq.ft",
    price: "₹65/sq.ft/month",
    type: "Cold Storage",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Industrial Warehouse Space",
    location: "Chennai, Tamil Nadu",
    area: "20,000 sq.ft",
    price: "₹40/sq.ft/month",
    type: "Industrial",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJ36YLqj1Lrxn47XNoIV-y9RVHpnqcKKlhg&s",
  },
  {
    id: "5",
    title: "Distribution Center",
    location: "Hyderabad, Telangana",
    area: "30,000 sq.ft",
    price: "₹50/sq.ft/month",
    type: "Distribution",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEVJxf_UpJfCDvySFLHnSvjpvzNK1Da1uJQ&s",
  },
  {
    id: "6",
    title: "E-commerce Fulfillment Center",
    location: "Pune, Maharashtra",
    area: "18,000 sq.ft",
    price: "₹58/sq.ft/month",
    type: "Fulfillment",
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
const warehouseTypes = [
  "All",
  "Grade A",
  "Logistics",
  "Cold Storage",
  "Industrial",
  "Distribution",
  "Fulfillment",
];

const FeaturedWarehouses = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredWarehouses =
    activeFilter === "All"
      ? warehouseData
      : warehouseData.filter((warehouse) => warehouse.type === activeFilter);

  const displayedWarehouses = showAll
    ? filteredWarehouses
    : filteredWarehouses.slice(0, 6);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-warehouse-orange font-semibold tracking-wide uppercase">
            Featured Properties
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover Top Warehouses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Browse our selection of premium warehouses available for rent across India.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {warehouseTypes.map((type) => (
            <Button
              key={type}
              variant={activeFilter === type ? "default" : "outline"}
              className={
                activeFilter === type
                  ? "bg-warehouse-blue hover:bg-warehouse-darkBlue"
                  : "border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white"
              }
              onClick={() => {
                setActiveFilter(type);
                setShowAll(false); // reset on filter change
              }}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedWarehouses.map((warehouse) => (
            <div key={warehouse.id} className="animate-fade-in">
              <WarehouseCard warehouse={warehouse} />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredWarehouses.length > 6 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(true)}
              className="bg-warehouse-orange hover:bg-warehouse-darkOrange text-white px-8 py-3"
            >
              View More Warehouses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedWarehouses;
