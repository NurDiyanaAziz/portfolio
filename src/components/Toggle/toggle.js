import React, { useContext } from "react";
import "./toggle.css";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className={`toggle-container ${darkMode ? "dark" : "light"}`} onClick={handleClick}>
      <FaRegMoon className="t-icon moon" />
      <FaRegSun className="t-icon sun" />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { left: "28px" }}
      ></div>
    </div>
  );
};

export default Toggle;