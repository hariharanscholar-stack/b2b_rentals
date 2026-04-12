import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import ContactItem from "../ui/ContactItem";
import FooterLinkSection from "../ui/FooterLinkSection";

const Footer: React.FC = () => {
  const categories = [
    { label: "Forklift", href: "#" },
    { label: "Electric Stacker", href: "#" },
    { label: "Pallet Truck", href: "#" },
    { label: "Reach Truck", href: "#" },
    { label: "Scrubber", href: "#" },
  ];

  const usefulLinks = [
    { label: "Contact", href: "/contact" },
    { label: "Clients", href: "#" },
    { label: "Careers", href: "/careers" },
    { label: "Request a Quote", href: "/request-quote" },
    { label: "Join our Rental Fleet", href: "/join-fleet" },
  ];

  const information = [
    { label: "FAQs", href: "#" },
    { label: "Terms & Condition", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];
  return (
    <footer
      className="bg-bg-gray w-full py-14 mt-auto"
      data-name="Footer Container"
    >
      <div className="container mx-auto px-20">
        {/* Top Contact Section */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          <ContactItem
            icon={Phone}
            title="Call Us"
            description="+91 99445 66447"
          />
          <ContactItem
            icon={Mail}
            title="Get in Touch"
            description="sales@b2brentals.in"
          />
          <ContactItem
            icon={Clock}
            title="Customer Service"
            description="All days Online"
          />
          <ContactItem
            icon={MapPin}
            title="Address"
            description="Kamatchi Nagar, Madambakkam, Chennai 600126"
          />
        </div>

        <hr className="border-t border-gray-300 mb-10" />

        {/* Logo & Links Section */}
        <div className="grid grid-cols-4 gap-8 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="mb-6 relative w-48 h-12">
              <Image
                src="/assets/logo-2.svg"
                alt="B2B Rentals"
                width={185}
                height={48}
              />
            </div>
            <p className="text-gray-900 text-base leading-relaxed mb-6">
              Combines industrial strength with digital intelligence, featuring
              a forklift at the center, flanked by a reach truck and cleaning
              equipment.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>

          <FooterLinkSection title="Categories" links={categories} />
          <FooterLinkSection title="Useful Links" links={usefulLinks} />
          <FooterLinkSection title="Information" links={information} />
        </div>

        <hr className="border-t border-gray-300 mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-900 text-sm">
            Copyright © 2025 b2brentals. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
