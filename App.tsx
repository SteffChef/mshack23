import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "./app/colorScheme/ThemeContext";
import Home from "./app/screens/Home";

export default function App() {
  const [themeState, setThemeState] = useState("dark");

  const handleThemeToggle = () => {
    themeState === "dark" ? setThemeState("light") : setThemeState("dark");
  };

  const value = { themeState, handleThemeToggle };

  return (
    <ThemeContext.Provider value={value}>
      <Home />
    </ThemeContext.Provider>
  );
}
