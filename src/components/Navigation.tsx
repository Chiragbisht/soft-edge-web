
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 glow">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              GamBlock
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                  location.pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow">
                Get Protected
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
