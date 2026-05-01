import React, { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import welcomeImg1 from '../assets/upaSite.jpg';
import welcomeImg2 from '../assets/welcome.jpg';
import welcomeImg3 from '../assets/upasalle.jpg';
import welcomeImg4 from '../assets/VieEtudiante1.jpg';
import welcomeImg5 from '../assets/loisirSalle.jpg';
import welcomeImg6 from '../assets/infosalle.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

const highlights = [
  { icon: <MenuBookRoundedIcon />, title: 'Programmes solides', desc: 'Formations orientées carrière' },
  { icon: <Groups2RoundedIcon />, title: 'Communauté active', desc: 'Vie étudiante inclusive et dynamique' },
  { icon: <WorkspacePremiumRoundedIcon />, title: 'Excellence', desc: 'Diplômes reconnus et accompagnement' },
];

const Welcome = () => {
  const images = useMemo(() => [welcomeImg1, welcomeImg2, welcomeImg3, welcomeImg4, welcomeImg5, welcomeImg6], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box component="section" className="bg-gradient-to-b from-slate-50 to-white py-20">
      <Container maxWidth={false} className="max-w-7xl mx-auto px-6">
        <Box className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Chip label="À propos de l'UPA" color="primary" className="!mb-4" />
            <Typography variant="h2" className="!text-4xl md:!text-5xl !font-bold !text-slate-900 !mb-4">
              Une université pensée pour la génération numérique
            </Typography>
            <Typography className="!text-slate-600 !mb-7 !text-lg">
              Campus moderne, pédagogie innovante et expériences concrètes pour préparer votre futur professionnel.
            </Typography>

            <Stack spacing={2} className="mb-8">
              {highlights.map((item) => (
                <Card key={item.title} className="!rounded-2xl !shadow-sm hover:!shadow-md transition-shadow">
                  <CardContent className="!flex !items-start !gap-4">
                    <Box className="bg-blue-100 text-blue-700 rounded-xl p-2">{item.icon}</Box>
                    <Box>
                      <Typography className="!font-semibold !text-slate-900">{item.title}</Typography>
                      <Typography className="!text-sm !text-slate-500">{item.desc}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            <Button component={RouterLink} to="/admission" variant="contained" endIcon={<ArrowForwardRoundedIcon />} className="!rounded-full !px-6 !py-3">
              Découvrir nos formations
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Box className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[currentIndex]} alt="Campus UPA" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

              <Box className="absolute top-4 right-4 bg-white/90 rounded-xl p-2">
                <img src={miniLogoUpa} alt="UPA" className="w-14 h-14 rounded-lg object-cover" />
              </Box>

              <Box className="absolute inset-x-0 bottom-4 px-4 flex items-center justify-between">
                <Box className="flex gap-2">
                  <IconButton onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)} className="!bg-white/30 !text-white">
                    <ChevronLeft />
                  </IconButton>
                  <IconButton onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)} className="!bg-white/30 !text-white">
                    <ChevronRight />
                  </IconButton>
                </Box>
                <Box className="flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/60'}`}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;
