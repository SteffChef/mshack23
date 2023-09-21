import { createContext } from "react";

export const ThemeContext = createContext({
  themeState: "dark",
  handleThemeToggle: () => {},
});
