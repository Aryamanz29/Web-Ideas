import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div>
      <nav
        class={
          isDarkMode
            ? "navbar navbar-dark bg-dark justify-content-around"
            : "navbar navbar-light bg-light justify-content-around"
        }
      >
        <a class="navbar-brand">Quoter</a>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </nav>
    </div>
  );
};

export default Navbar;
