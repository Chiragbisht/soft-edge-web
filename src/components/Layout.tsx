import { ReactNode, memo } from "react";
import SimpleNavbarDemo from "./simple-navbar-demo";
import { BackgroundBeams } from "./BackgroundBeams";

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10">
        <SimpleNavbarDemo />
        <main className="pt-24">
          {children}
        </main>
      </div>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
