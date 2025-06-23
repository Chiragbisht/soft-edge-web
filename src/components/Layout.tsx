
import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
