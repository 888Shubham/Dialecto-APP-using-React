import { themeContext } from "./themeContext";
import { langaugeContext } from "./languageContext";
import { useContext } from "react";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const {theme, setTheme} = useContext(themeContext);
  const {language, setLanguage} = useContext(langaugeContext);
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={toggleTheme}>{theme == "light"? "dark theme" : "light theme"} </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
