"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Simple SVG icons to replace Tabler icons
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Navbar = ({ children, className }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn("fixed inset-x-0 top-4 z-40 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible: scrolled },
            )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 lg:flex transition-all duration-500 ease-out",
        "backdrop-blur-xl bg-black/20 border border-white/10",
        visible 
          ? "w-3/5 bg-black/30 transform translate-y-2 scale-95 shadow-2xl" 
          : "w-[95%] bg-black/10",
        className,
      )}
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: visible ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
        boxShadow: visible 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <div className="absolute inset-0 h-full w-full rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300" 
                 style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }} />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden rounded-xl transition-all duration-500 ease-out",
        "backdrop-blur-xl bg-black/20 border border-white/10",
        visible 
          ? "w-[85%] bg-black/30 transform translate-y-2 scale-95 shadow-2xl" 
          : "w-[95%] bg-black/10",
        className,
      )}
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: visible ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
        boxShadow: visible 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8 animate-in fade-in-0 slide-in-from-top-2 duration-300",
        "backdrop-blur-xl bg-black/30 border border-white/10",
        className,
      )}
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <CloseIcon className="text-gray-300 hover:text-white cursor-pointer transition-colors h-6 w-6" onClick={onClick} />
  ) : (
    <MenuIcon className="text-gray-300 hover:text-white cursor-pointer transition-colors h-6 w-6" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center glow">
        <span className="text-white font-bold text-sm">G</span>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        GamBlock
      </span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseClasses = "relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 glow",
    secondary: "bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20",
    dark: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
  };

  return (
    <Tag
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}; 