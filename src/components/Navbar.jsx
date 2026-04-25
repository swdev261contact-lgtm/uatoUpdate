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
  listeNews: [
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
  const [activeSection, setActiveSection] = useState(
    type === 'listeNews' ? '' : navLinksByType[type]?.find(link => link.type === 'anchor')?.href || ''
  );
  const observer = useRef(null);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar, but change style
      setVisible(true);

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (type === 'listeNews') {
      setActiveSection('');
      return;
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '-50% 50px -50% 50px',
      threshold: 0,
    });

    navLinksByType[type]?.forEach(({ href, type: linkType }) => {
      if (linkType === 'anchor') {
        const section = document.getElementById(href);
        if (section) observer.current.observe(section);
      }
    });

    return () => observer.current && observer.current.disconnect();
  }, [type]);

  const renderLink = ({ href, label, type: linkType }) => {
    const isActive = linkType === 'anchor' && activeSection === href;

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
            className="hidden lg:block px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
          >
            {label}
          </RouterLink>

          <RouterLink
            to={href}
            onClick={closeMenu}
            className="block lg:hidden px-6 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-all duration-300"
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
            onClick={() => {
              setActiveSection('admissions');
              closeMenu();
            }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <GraduationCap className="w-4 h-4" />
            {label}
          </RouterLink>

          <RouterLink
            to={href}
            onClick={() => {
              setActiveSection('admissions');
              closeMenu();
            }}
            className="block lg:hidden w-full text-center px-6 py-4 bg-primary-600 text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300"
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
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <RouterLink to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className={`relative transition-all duration-300 ${scrolled ? 'w-10' : 'w-12'}`}>
              <img
                src={logo}
                alt="Logo UPA"
                className="w-full h-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent transition-all duration-300 leading-tight ${
                scrolled ? 'text-xs' : 'text-sm'
              }`}>
                UPA
              </h1>
              <p className={`uppercase font-semibold text-gray-500 dark:text-gray-400 transition-all duration-300 ${
                scrolled ? 'text-[0.5rem]' : 'text-[0.65rem]'
              }`}>
                Toujours Plus Haut
              </p>
            </div>
          </RouterLink>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinksByType[type]?.map((link) => (
              <div key={link.href}>{renderLink(link)}</div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 h-screen right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo UPA" className="w-10" />
                    <div>
                      <h2 className="font-bold text-primary-600 dark:text-primary-400 text-lg">UPA</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Menu</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navLinksByType[type]?.map((link) => (
                    <div key={link.href}>{renderLink(link)}</div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
