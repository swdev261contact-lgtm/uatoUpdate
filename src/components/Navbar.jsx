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
    { href: '/actualites', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],

  vieEtudiante: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/actualites', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],

  admission: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/actualites', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],

  blog: [
    { href: '/', label: 'Accueil', type: 'route' },
    { href: '/#a-propos', label: 'À propos', type: 'route' },
    { href: '/#programmes', label: 'Programmes', type: 'route' },
    { href: '/#partenariat', label: 'Partenaires', type: 'route' },
    { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
    { href: '/actualites', label: 'Blog', type: 'route' },
    { href: '/admission', label: "S'inscrire", type: 'button' },
  ],
};

const Navbar = ({ type = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const lastScrollY = useRef(0);

  // ✅ unique function (FIX DUPLICATE BUG)
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setVisible(true);
      setScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = ({ href, label, type: linkType }) => {
    const isActive = activeSection === href;

    if (linkType === 'anchor') {
      return (
        <>
          <a
            href={`#${href}`}
            onClick={() => {
              setActiveSection(href);
              closeMenu();
            }}
            className={`hidden lg:block px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
              isActive
                ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            {label}
          </a>

          <a
            href={`#${href}`}
            onClick={() => {
              setActiveSection(href);
              closeMenu();
            }}
            className={`block lg:hidden px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700/50'
            }`}
          >
            {label}
          </a>
        </>
      );
    }

    if (linkType === 'route') {
      return (
        <>
          <RouterLink
            to={href}
            onClick={closeMenu}
            className="hidden lg:block px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {label}
          </RouterLink>

          <RouterLink
            to={href}
            onClick={closeMenu}
            className="block lg:hidden px-6 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {label}
          </RouterLink>
        </>
      );
    }

    if (linkType === 'button') {
      return (
        <>
          <RouterLink
            to={href}
            onClick={closeMenu}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg"
          >
            <GraduationCap className="w-4 h-4" />
            {label}
          </RouterLink>

          <RouterLink
            to={href}
            onClick={closeMenu}
            className="block lg:hidden w-full text-center px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg"
          >
            {label}
          </RouterLink>
        </>
      );
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md'
          : 'bg-white/90 dark:bg-gray-900/90'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo UPA" className="w-10" />
          </RouterLink>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop */}
          <nav className="hidden lg:flex gap-2">
            {navLinksByType[type]?.map((link) => (
              <div key={link.href}>{renderLink(link)}</div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              className="absolute right-0 top-0 w-full max-w-sm h-full bg-white dark:bg-gray-900 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-6">
                <img src={logo} alt="Logo" className="w-10" />
                <button onClick={closeMenu}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinksByType[type]?.map((link) => (
                  <div key={link.href}>{renderLink(link)}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;