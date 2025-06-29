"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/simple-navbar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
];

const SimpleNavbarDemo = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <NavbarButton variant="secondary">Sign In</NavbarButton>
              </SignInButton>
              <SignUpButton mode="modal">
                <NavbarButton variant="primary">Get Started</NavbarButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 rounded-full ring-2 ring-blue-500/20"
                  }
                }}
              />
            </SignedIn>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 rounded-full ring-2 ring-blue-500/20"
                    }
                  }}
                />
              </SignedIn>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={closeMobileMenu}
                className="relative text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button 
                    variant="outline" 
                    className="w-full text-gray-300 border-gray-600 hover:bg-gray-700"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center pt-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-full ring-2 ring-blue-500/20"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
});

SimpleNavbarDemo.displayName = 'SimpleNavbarDemo';

export default SimpleNavbarDemo; 