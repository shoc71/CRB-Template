import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContactMePage from "./pages/ContactMePage";
import AboutMePage from "./pages/AboutMePage.jsx"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div style={{
      backgroundColor: isDarkMode ? 'black' : 'white',
      minHeight: '100vh',
      color: isDarkMode ? 'white' : 'black'
    }}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
