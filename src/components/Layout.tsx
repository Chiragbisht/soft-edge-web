
import { ReactNode } from "react";
import ResizableNavbar from "./ResizableNavbar";
import { BackgroundBeams } from "./BackgroundBeams";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10">
        <ResizableNavbar />
        <main className="pt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
