
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-warehouse-blue">Warehousing</span>
              <span className="text-2xl font-bold text-warehouse-orange">Adda</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-warehouse-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/warehouses" className="text-gray-600 hover:text-warehouse-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Warehouses</Link>
              <Link to="/services" className="text-gray-600 hover:text-warehouse-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
              <Link to="/about" className="text-gray-600 hover:text-warehouse-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-600 hover:text-warehouse-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
              <Link to="/login">
                <Button variant="outline" className="ml-4 border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white transition-colors">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-warehouse-orange hover:bg-warehouse-darkOrange text-white transition-colors">
                  Register
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-warehouse-blue hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="text-gray-600 hover:text-warehouse-blue block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/warehouses" className="text-gray-600 hover:text-warehouse-blue block px-3 py-2 rounded-md text-base font-medium">Warehouses</Link>
            <Link to="/services" className="text-gray-600 hover:text-warehouse-blue block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-warehouse-blue block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-warehouse-blue block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="flex space-x-2 mt-4 px-3">
              <Link to="/login" className="w-1/2">
                <Button variant="outline" className="w-full border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-1/2">
                <Button className="w-full bg-warehouse-orange hover:bg-warehouse-darkOrange text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
