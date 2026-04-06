import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinksByType = {
  home: [
    { href: 'accueil', label: 'Accueil', type: 'anchor' },
    { href: 'a-propos', label: 'À propos', type: 'anchor' },
    { href: 'programmes', label: 'Programmes', type: 'anchor' },
    { href: 'partenariat', label: 'Partenaires', type: 'anchor' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/blog', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
  vieEtudiante: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/blog', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
  admission: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/blog', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
  blog: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/blog', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
};

const Navbar = ({ type = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const renderLink = ({ href, label, type: linkType }) => {
    if (linkType === 'anchor') {
      return (
        <a
          href={`#${href}`}
          onClick={closeMenu}
          className="hidden lg:block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-300"
        >
          {label}
        </a>
      );
    }

    if (linkType === 'route') {
      return (
        <RouterLink
          to={href}
          onClick={closeMenu}
          className="hidden lg:block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-300"
        >
          {label}
        </RouterLink>
      );
    }

    if (linkType === 'button') {
      return (
        <RouterLink
          to={href}
          onClick={closeMenu}
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <GraduationCap className="w-4 h-4" />
          {label}
        </RouterLink>
      );
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <RouterLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Logo UPA"
                className="w-12 h-12 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <h1 className="font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent text-lg">
                Université Privée d'Ambohydratrimo
              </h1>
              <p className="uppercase text-xs text-gray-500 font-semibold">Toujours Plus Haut</p>
            </div>
          </RouterLink>

          <button
            className="lg:hidden p-2 text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinksByType[type]?.map((link) => (
              <div key={link.href}>{renderLink(link)}</div>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navLinksByType[type]?.map((link) => (
                <div key={link.href} onClick={closeMenu}>
                  {link.type === 'anchor' && (
                    <a
                      href={`#${link.href}`}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800"
                    >
                      {link.label}
                    </a>
                  )}
                  {link.type === 'route' && (
                    <RouterLink
                      to={link.href}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800"
                    >
                      {link.label}
                    </RouterLink>
                  )}
                  {link.type === 'button' && (
                    <RouterLink
                      to={link.href}
                      className="block px-4 py-3 mx-4 my-2 text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold"
                    >
                      {link.label}
                    </RouterLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;