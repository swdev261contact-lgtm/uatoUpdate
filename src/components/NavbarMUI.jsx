import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar, Toolbar, IconButton, Button, Drawer, List,
  ListItem, ListItemButton, ListItemText, Box, Typography,
  Divider, Container, alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const homeLinks = [
  { href: '#accueil', label: 'Accueil', type: 'anchor', sectionId: 'accueil' },
  { href: '#a-propos', label: 'À propos', type: 'anchor', sectionId: 'a-propos' },
  { href: '#programmes', label: 'Programmes', type: 'anchor', sectionId: 'programmes' },
  { href: '#partenariat', label: 'Partenaires', type: 'anchor', sectionId: 'partenariat' },
  { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
  { href: '/calendrier', label: 'Calendrier', type: 'route' },
  { href: '/actualites', label: 'Actualités', type: 'route' },
];

const otherLinks = [
  { href: '/', label: 'Accueil', type: 'route' },
  { href: '/#a-propos', label: 'À propos', type: 'route' },
  { href: '/#programmes', label: 'Programmes', type: 'route' },
  { href: '/#partenariat', label: 'Partenaires', type: 'route' },
  { href: '/vie-etudiante', label: 'Vie étudiante', type: 'route' },
  { href: '/calendrier', label: 'Calendrier', type: 'route' },
  { href: '/actualites', label: 'Actualités', type: 'route' },
];

const NavbarMUI = ({ type = 'home' }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const observer = useRef(null);
  const location = useLocation();

  const links = type === 'home' ? homeLinks : otherLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (type !== 'home') return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    homeLinks.forEach(({ sectionId }) => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) observer.current.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  }, [type]);

  const isActive = (link) => {
    if (link.type === 'anchor') return activeSection === link.sectionId;
    return location.pathname === link.href;
  };

  const renderDesktopLink = (link) => {
    const active = isActive(link);

    if (link.type === 'anchor') {
      return (
        <Button
          key={link.href}
          component="a"
          href={link.href}
          onClick={() => setActiveSection(link.sectionId)}
          sx={{
            color: active ? 'primary.main' : 'text.secondary',
            fontWeight: active ? 700 : 500,
            fontSize: '0.875rem',
            px: 1.75,
            py: 1,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 4,
              left: '50%',
              transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
              width: '60%',
              height: 2,
              backgroundColor: 'primary.main',
              borderRadius: 1,
              transition: 'transform 0.2s ease',
            },
            '&:hover': {
              color: 'primary.main',
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05),
              '&::after': { transform: 'translateX(-50%) scaleX(1)' },
            },
          }}
        >
          {link.label}
        </Button>
      );
    }

    return (
      <Button
        key={link.href}
        component={RouterLink}
        to={link.href}
        sx={{
          color: active ? 'primary.main' : 'text.secondary',
          fontWeight: active ? 700 : 500,
          fontSize: '0.875rem',
          px: 1.75,
          py: 1,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 4,
            left: '50%',
            transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
            width: '60%',
            height: 2,
            backgroundColor: 'primary.main',
            borderRadius: 1,
            transition: 'transform 0.2s ease',
          },
          '&:hover': {
            color: 'primary.main',
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05),
            '&::after': { transform: 'translateX(-50%) scaleX(1)' },
          },
        }}
      >
        {link.label}
      </Button>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled
            ? '0 2px 24px rgba(15,23,42,0.10)'
            : '0 1px 8px rgba(15,23,42,0.04)',
          transition: 'all 0.35s ease',
          borderBottom: '1px solid rgba(226,232,240,0.7)',
          color: 'text.primary',
        }}
      >
        <Container maxWidth={false} className="section-container">
          <Toolbar
            disableGutters
            sx={{
              height: { xs: 64, md: scrolled ? 64 : 72 },
              transition: 'height 0.35s ease',
              gap: 1,
            }}
          >
            {/* Brand */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                flexShrink: 0,
                mr: 2,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo UPA"
                sx={{
                  width: scrolled ? 36 : 44,
                  height: 'auto',
                  transition: 'width 0.35s ease',
                }}
              />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: scrolled ? '0.8rem' : '0.95rem',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                    transition: 'font-size 0.35s ease',
                    letterSpacing: '-0.02em',
                  }}
                >
                  UPA
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.6rem',
                    color: 'text.secondary',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    mt: 0.25,
                  }}
                >
                  Toujours Plus Haut
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav Links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.25,
              }}
            >
              {links.map(renderDesktopLink)}
            </Box>

            {/* Desktop CTA */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 'auto' }}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/admission"
                startIcon={<SchoolIcon fontSize="small" />}
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{ fontWeight: 700, px: 3, py: 1.25 }}
              >
                S'inscrire
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { lg: 'none' }, ml: 'auto' }}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Ouvrir le menu"
                sx={{
                  color: 'primary.main',
                  border: '1.5px solid',
                  borderColor: 'primary.light',
                  borderRadius: 2,
                  p: 0.75,
                  '&:hover': { backgroundColor: (t) => alpha(t.palette.primary.main, 0.05) },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 288,
            borderRadius: '0 0 0 20px',
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box component="img" src={logo} alt="UPA" sx={{ width: 36 }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #2563eb, #1e3a8a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                UPA
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Menu
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            size="small"
            sx={{ color: 'text.secondary', border: '1px solid', borderColor: 'divider', borderRadius: 1.5 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Nav Links */}
        <List sx={{ px: 1.5, py: 2, flexGrow: 1 }}>
          {links.map((link) => {
            const active = isActive(link);
            return (
              <ListItem key={link.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={link.type === 'route' ? RouterLink : 'a'}
                  to={link.type === 'route' ? link.href : undefined}
                  href={link.type === 'anchor' ? link.href : undefined}
                  onClick={() => {
                    if (link.sectionId) setActiveSection(link.sectionId);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 1.25,
                    backgroundColor: active ? (t) => alpha(t.palette.primary.main, 0.08) : 'transparent',
                    '&:hover': { backgroundColor: (t) => alpha(t.palette.primary.main, 0.06) },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.95rem',
                      color: active ? 'primary.main' : 'text.primary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider />

        {/* CTA */}
        <Box sx={{ p: 2.5 }}>
          <Button
            variant="contained"
            fullWidth
            component={RouterLink}
            to="/admission"
            startIcon={<SchoolIcon />}
            onClick={() => setDrawerOpen(false)}
            sx={{ py: 1.5, borderRadius: 2, fontWeight: 700 }}
          >
            S'inscrire maintenant
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMUI;
