import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <AnnouncementBar />
      <Navigation />
    </header>
  );
};

export default Header;
