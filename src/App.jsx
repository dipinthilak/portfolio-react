import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function getInitialTheme() {
  return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <main className="portfolio" data-theme={theme}>
      <div className="ambient-background" aria-hidden="true" />
      <ThemeContext.Provider value={{ theme, onToggleTheme: toggleTheme }}>
        <div className="site-frame">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <footer className="site-footer">
            <span>Designed & built by Dipin T</span>
            <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
          </footer>
        </div>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
