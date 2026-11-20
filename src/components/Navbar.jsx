import { useContext, useState } from "react";
import { RiCloseLine, RiMenu3Line, RiMoonLine, RiSunLine } from "@remixicon/react";
import { NAVIGATION_LINKS } from "../constants";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Dipin T home">
        <span className="brand-mark">DT</span>
        <span className="brand-name">
          Dipin T
          <small>Full-stack developer</small>
        </span>
      </a>

      <button
        className="icon-button menu-toggle"
        type="button"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      <nav
        className={`primary-navigation${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {NAVIGATION_LINKS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? <RiMoonLine aria-hidden="true" /> : <RiSunLine aria-hidden="true" />}
        <span>{theme === "light" ? "Dark" : "Light"}</span>
      </button>
    </header>
  );
}

export default Navbar;
