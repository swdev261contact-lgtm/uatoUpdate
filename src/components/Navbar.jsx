import React, { useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
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
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const links = useMemo(() => navLinksByType[type] || navLinksByType.home, [type]);

  const renderDesktopLink = ({ href, label, type: linkType }) => {
    const isCurrentRoute = linkType !== 'anchor' && location.pathname === href;
    const commonSx = {
      borderRadius: 99,
      px: 2,
      color: isCurrentRoute ? 'primary.main' : 'text.primary',
    };

    if (linkType === 'anchor') {
      return (
        <Button key={href} href={`#${href}`} sx={commonSx} className="hover:!bg-blue-50">
          {label}
        </Button>
      );
    }

    if (linkType === 'button') {
      return (
        <Button
          key={href}
          component={RouterLink}
          to={href}
          variant="contained"
          startIcon={<SchoolIcon fontSize="small" />}
          sx={{ borderRadius: 99, px: 2.5 }}
          className="!shadow-lg hover:!shadow-xl"
        >
          {label}
        </Button>
      );
    }

    return (
      <Button key={href} component={RouterLink} to={href} sx={commonSx}>
        {label}
      </Button>
    );
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 6 : 0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(16px)',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.82)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
      }}
    >
      <Container maxWidth={false} className="max-w-7xl mx-auto px-6">
        <Toolbar disableGutters className="min-h-[72px] justify-between">
          <RouterLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo UPA" className="w-11 h-11 object-contain rounded-xl" />
            <Box>
              <p className="font-bold text-slate-900 leading-tight">UPA</p>
              <p className="text-xs text-slate-500">Université moderne</p>
            </Box>
          </RouterLink>

          <Box className="hidden lg:flex items-center gap-1">
            {links.map(renderDesktopLink)}
          </Box>

          <IconButton className="lg:!hidden" onClick={() => setOpen(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="w-[320px] h-full bg-slate-50 p-6 flex flex-col gap-5">
          <Box className="flex items-center justify-between">
            <Chip label="Navigation" color="primary" variant="outlined" />
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {links.map((link) => (
              <ListItemButton
                key={link.href}
                component={link.type === 'anchor' ? 'a' : RouterLink}
                href={link.type === 'anchor' ? `#${link.href}` : undefined}
                to={link.type !== 'anchor' ? link.href : undefined}
                onClick={() => setOpen(false)}
                className="!rounded-xl !mb-1 hover:!bg-blue-50"
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
