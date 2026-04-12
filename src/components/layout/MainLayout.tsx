import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Header Section - Top Menu */}
      <Header />

      {/* Main Content Area - Grows with content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer Section - Always at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
