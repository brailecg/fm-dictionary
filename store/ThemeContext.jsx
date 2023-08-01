import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [typeFace, setTypeFace] = useState("inter");

  const isLocalStorageEmpty = () => {
    const isDarkTheme = !localStorage.getItem("isDarkTheme");
    const usedTypeFace = !localStorage.getItem("usedTypeFace");
    return { isDarkTheme, usedTypeFace };
  };

  useEffect(() => {
    initialThemeHandler();
  }, []);

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty().isDarkTheme) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body").classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
      isDarkTheme && document.querySelector("body").classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }

    if (isLocalStorageEmpty().usedTypeFace) {
      localStorage.setItem("usedTypeFace", typeFace);
    } else {
      const localTypeFace = localStorage.getItem("usedTypeFace");
      setTypeFace(localTypeFace);
    }
  };

  const toggleThemeHandler = () => {
    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  };

  const toggleDarkClassToBody = () => {
    document.querySelector("body").classList.toggle("dark");
  };

  const setValueToLocalStorage = () => {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  };

  const toggleTypeFace = (selectedTypeFace) => {
    setTypeFace(selectedTypeFace);
    localStorage.setItem("usedTypeFace", selectedTypeFace);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, toggleThemeHandler, typeFace, toggleTypeFace }}>
      {children}
    </ThemeContext.Provider>
  );
};
