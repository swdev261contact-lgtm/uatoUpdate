import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import muiTheme from "./theme/muiTheme";
import Contenue from "./pages/Contenue";
import VieEtudiante from "./pages/VieEtudiante";
import Admission from "./pages/Admission";
<<<<<<< HEAD
import News from "./pages/News";
import Calendrier from "./pages/Calendrier";
import ArticleDetail from "./pages/ArticleDetail";
import ClubDetail from "./pages/ClubDetail";
import BlogDetail from "./pages/BlogDetail";
=======
import Blog from "./pages/Blog";
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EventModal from "./components/EventModal";

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <EventModal />
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 duration-700 transition-all ease-in-out overflow-x-hidden">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Contenue />} />
            <Route path="/vie-etudiante" element={<VieEtudiante />} />
            <Route path="/actualites" element={<Blog />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
>>>>>>> dfd29cf5ec9415cbd74f96d0f7c4fb9930d72354
  );
};

export default App;