import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleMode: () => void;
}>({
  isDarkMode: false,
  toggleMode: () => null,
});

export const useTheme = () => {
  const data = useContext(ThemeContext);
  return data;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  const setLightTheme = () => {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    setDarkMode(false);
  };

  const setDarkTheme = () => {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setDarkMode(true);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") setLightTheme();
    else setDarkTheme();
  }, []);

  const toggleMode = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
