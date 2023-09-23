import { View, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../colorScheme/ThemeContext";
import { useTheme } from "@react-navigation/native";

const ThemeToggle = () => {
  const themeCon = useContext(ThemeContext);
  const { colors } = useTheme(); 

  return (
    <View style={{ marginRight: 10 }}>
      <Pressable onPress={themeCon.handleThemeToggle}>
        {themeCon.themeState === "dark" ? (
          <Feather name="sun" size={24} color={colors.primary} />
        ) : (
          <Feather name="moon" size={24} color={colors.primary} />
        )}
      </Pressable>
    </View>
  );
};

export default ThemeToggle;
