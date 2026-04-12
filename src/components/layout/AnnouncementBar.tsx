import React from "react";
import { Mail, Phone } from "lucide-react";

const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="bg-gray-900 h-11 w-full flex items-center justify-end px-20 gap-6"
      data-name="announcement-bar"
    >
      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-normal">
          sales@b2brentals.in
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center">
        <span className="text-white text-sm font-normal mr-1">Questions?</span>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-normal">+91 1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
