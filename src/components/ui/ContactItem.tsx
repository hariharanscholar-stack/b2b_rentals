import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-7 h-7 flex items-center justify-center">
        <Icon className="w-6 h-6 text-gray-900" />
      </div>
      <div>
        <h3 className="text-gray-900 text-sm font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
