import { createContext } from "react";

interface ThemeContextType {
  themeState: string;
  handleThemeToggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeState: "light",
  handleThemeToggle: () => {},
});