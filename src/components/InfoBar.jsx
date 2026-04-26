import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const InfoBar = () => {
  const quickLinks = [
    { label: 'Étudiants', href: '/vie-etudiante' },
    { label: 'Blog', href: '/blog' },
    { label: 'Admission', href: '/admission' },
  ];

  return (
    <div className="bg-primary-900 text-white text-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-10">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-primary-200 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>+261 34 12 345 67</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary-200 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>contact@upa.mg</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary-200 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span>Ambohydratrimo, Madagascar</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {quickLinks.map((link) => (
              <RouterLink
                key={link.label}
                to={link.href}
                className="hidden sm:block px-3 py-1 rounded hover:bg-primary-800 transition-colors"
              >
                {link.label}
              </RouterLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;