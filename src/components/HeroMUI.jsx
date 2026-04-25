import React from 'react';
import { motion } from 'framer-motion';
import {
  Box, Typography, Button, Grid, Container, Paper, alpha,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const stats = [
  { Icon: SchoolIcon, value: '3', label: 'Écoles' },
  { Icon: EmojiEventsIcon, value: '8+', label: 'Parcours' },
  { Icon: PeopleIcon, value: '200+', label: 'Étudiants' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const HeroMUI = () => (
  <Box
    component="section"
    sx={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 45%, #172554 100%)',
    }}
  >
    {/* Background image */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.12,
        filter: 'brightness(0.35)',
      }}
    />

    {/* Directional overlay */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(105deg, rgba(2,6,23,0.97) 0%, rgba(30,58,138,0.65) 55%, rgba(37,99,235,0.15) 100%)',
      }}
    />

    {/* Subtle grid texture */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }}
    />

    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 12, lg: 18 } }}>
      <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">

        {/* Left — Copy */}
        <Grid item xs={12} lg={7}>
          <motion.div {...fadeUp(0)}>
            {/* Eyebrow — institution name, not a marketing badge */}
            <Typography
              variant="overline"
              sx={{
                color: 'rgba(197,164,126,0.9)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                mb: 3,
                display: 'block',
              }}
            >
              Université Privée d'Ambohidratrimo · Madagascar
            </Typography>
          </motion.div>

          {/* Headline — split for gradient on second line */}
          <motion.div {...fadeUp(0.12)}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.2rem', md: '4rem', lg: '4.8rem', xl: '5.6rem' },
                color: 'white',
                lineHeight: 1.05,
                mb: 0.5,
              }}
            >
              Façonnez votre
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.2rem', md: '4rem', lg: '4.8rem', xl: '5.6rem' },
                lineHeight: 1.05,
                mb: 4,
                background: 'linear-gradient(135deg, #60a5fa 0%, #C5A47E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Avenir Professionnel
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.68)',
                fontWeight: 400,
                lineHeight: 1.85,
                maxWidth: 520,
                mb: 5,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Une formation de qualité dispensée par des experts, dans un
              environnement moderne et innovant. Trois écoles, huit parcours —
              un seul objectif : votre réussite.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.42)}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 7 }}>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/admission"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.75,
                  px: 4,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  boxShadow: '0 4px 24px rgba(37,99,235,0.45)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                    boxShadow: '0 8px 32px rgba(37,99,235,0.55)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                S'inscrire maintenant
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href="#programmes"
                endIcon={<ChevronRightIcon />}
                sx={{
                  py: 1.75,
                  px: 4,
                  fontSize: '1rem',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.28)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.55)',
                    backgroundColor: 'rgba(255,255,255,0.10)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Nos programmes
              </Button>
            </Box>
          </motion.div>

          {/* Stats row */}
          <motion.div {...fadeUp(0.6)}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: { xs: 2, sm: 3 },
                maxWidth: 420,
              }}
            >
              {stats.map(({ Icon, value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        backgroundColor: 'rgba(37,99,235,0.15)',
                        borderRadius: 2,
                        mb: 1.25,
                        border: '1px solid rgba(96,165,250,0.18)',
                      }}
                    >
                      <Icon sx={{ color: '#60a5fa', fontSize: 20 }} />
                    </Box>
                    <Typography
                      sx={{
                        color: 'white',
                        fontWeight: 800,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.78rem',
                        mt: 0.5,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Right — Image card */}
        <Grid
          item
          xs={12}
          lg={5}
          sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'center' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ width: '100%', maxWidth: 500 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 5,
                overflow: 'hidden',
                background:
                  'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(197,164,126,0.12) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                p: 2,
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              }}
            >
              <Box
                component="img"
                src={heroImg}
                alt="Campus de l'UPA"
                sx={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 3.5,
                  objectFit: 'cover',
                  aspectRatio: '4/3',
                }}
              />

              {/* Floating info chip */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 32,
                  left: 32,
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.5,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #2563eb, #1e3a8a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <SchoolIcon sx={{ color: 'white', fontSize: 18 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', lineHeight: 1 }}>
                    Promotion 2025
                  </Typography>
                  <Typography sx={{ fontSize: '0.72rem', color: '#64748b', mt: 0.25 }}>
                    Inscriptions ouvertes
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>

    {/* Bottom page-transition fade */}
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: 'linear-gradient(to top, #f8fafc, transparent)',
        pointerEvents: 'none',
      }}
    />
  </Box>
);

export default HeroMUI;
