import React, { useContext } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Map from "./Map";
import { ThemeContext } from "../colorScheme/ThemeContext";
import { CustomDarkTheme, CustomLightTheme } from "../colorScheme/Theme";
import ThemeToggle from "./ThemeToggle";

const NavigationComponent = () => {
  const { colors } = useTheme();

  const HomeLayout = createBottomTabNavigator();

  return (
    <HomeLayout.Navigator
      screenOptions={{ tabBarActiveTintColor: colors.primary }}
    >
      <HomeLayout.Screen
        name="Page1"
        component={Page1}
        options={{ headerRight: ThemeToggle }}
      />
      <HomeLayout.Screen
        name="Page2"
        component={Page2}
        options={{ headerRight: ThemeToggle }}
      />
      <HomeLayout.Screen
        name="Map"
        component={MapCall}
        options={{ headerRight: ThemeToggle }}
      />
    </HomeLayout.Navigator>
  );
};

const MapCall = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Map theme={themeContext.themeState}/>
  )
}
const Home = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={
        themeContext.themeState === "dark" ? CustomDarkTheme : CustomLightTheme
      }
    >
      <NavigationComponent />
    </NavigationContainer>
  );
};

export default Home;
