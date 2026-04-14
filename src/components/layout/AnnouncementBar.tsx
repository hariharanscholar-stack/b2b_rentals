import React from "react";
import { Mail, Phone } from "lucide-react";

const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="bg-gray-900 h-auto min-h-[44px] w-full flex items-center justify-end flex-wrap px-4 sm:px-8 md:px-20 gap-x-6 gap-y-1 py-1"
      data-name="announcement-bar"
    >
      {/* Email - hidden on mobile to save space */}
      <div className="hidden sm:flex items-center gap-2">
        <Mail className="w-4 h-4 text-white" />
        <span className="text-white text-xs sm:text-sm font-normal">
          sales@b2brentals.in
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center">
        <span className="text-white text-xs sm:text-sm font-normal mr-1">Questions?</span>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4 text-white" />
          <span className="text-white text-xs sm:text-sm font-normal">+91 1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
