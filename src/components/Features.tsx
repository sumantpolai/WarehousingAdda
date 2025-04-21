
import { Search, Map, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Extensive Listings",
    description: "Browse through our extensive collection of warehouses across India to find the perfect match for your needs.",
    icon: Search,
  },
  {
    name: "Strategic Locations",
    description: "Find warehouses in prime locations near ports, highways, and transport hubs for optimal logistics efficiency.",
    icon: Map,
  },
  {
    name: "Quick Processing",
    description: "Our streamlined process ensures you can secure your warehouse space quickly without unnecessary delays.",
    icon: Clock,
  },
  {
    name: "Verified Properties",
    description: "All warehouses on our platform are thoroughly verified to ensure they meet our quality and safety standards.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-warehouse-orange font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to find warehouses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover why thousands of businesses trust Warehousing Adda for their storage needs.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="animate-fade-in">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-warehouse-blue text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </div>
                <p className="mt-2 ml-16 text-base text-gray-500 animate-fade-in">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
