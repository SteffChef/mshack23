import React, { useContext } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "./Overview";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { ThemeContext } from "../colorScheme/ThemeContext";
import { CustomDarkTheme, CustomLightTheme } from "../colorScheme/Theme";
import ThemeToggle from "./ThemeToggle";
import { FontAwesome5 } from "@expo/vector-icons";

const NavigationComponent = () => {
  const { colors } = useTheme();

  const HomeLayout = createBottomTabNavigator();

  const HomeIcon = ({ color }: any) => {
    return <FontAwesome5 name="home" size={24} color={color} />;
  };

  return (
    <HomeLayout.Navigator
      screenOptions={{ tabBarActiveTintColor: colors.primary }}
    >
      <HomeLayout.Screen
        name="Überblick"
        component={Overview}
        options={{ headerRight: ThemeToggle, tabBarIcon: HomeIcon }}
      />
      <HomeLayout.Screen
        name="Page2"
        component={Page2}
        options={{ headerRight: ThemeToggle }}
      />
      <HomeLayout.Screen
        name="Page3"
        component={Page3}
        options={{ headerRight: ThemeToggle }}
      />
    </HomeLayout.Navigator>
  );
};

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
