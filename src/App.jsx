import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import muiTheme from "./theme/muiTheme";
import Contenue from "./pages/Contenue";
import VieEtudiante from "./pages/VieEtudiante";
import Admission from "./pages/Admission";
import News from "./pages/News";
import Calendrier from "./pages/Calendrier";
import ArticleDetail from "./pages/ArticleDetail";
import ClubDetail from "./pages/ClubDetail";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop />
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: '64px' }}>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Contenue />} />
              <Route path="/vie-etudiante" element={<VieEtudiante />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              <Route path="/blog-article/:slug" element={<BlogDetail />} />
              <Route path="/club/:slug" element={<ClubDetail />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/calendrier" element={<Calendrier />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;