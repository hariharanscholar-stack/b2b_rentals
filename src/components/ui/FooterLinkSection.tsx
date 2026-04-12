import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h3 className="text-gray-500 text-sm font-semibold mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-900 text-sm hover:text-gray-500 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkSection;
