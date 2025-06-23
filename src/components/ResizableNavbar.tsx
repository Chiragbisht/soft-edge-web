
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const ResizableNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ResizablePanelGroup direction="horizontal" className="h-16">
          {/* Logo Panel */}
          <ResizablePanel defaultSize={25} minSize={20}>
            <div className="flex items-center h-full">
              <Link to="/" className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 glow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  GamBlock
                </span>
              </Link>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Navigation Panel */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="hidden md:flex items-center justify-center h-full space-x-8">
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
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Auth Panel */}
          <ResizablePanel defaultSize={25} minSize={20}>
            <div className="flex items-center justify-end h-full space-x-4">
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
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full text-gray-300 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow">
                  Get Protected
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResizableNavbar;
