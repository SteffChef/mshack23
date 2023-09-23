import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "./Overview";
import Page2 from "./Page2";
import Map from "./Map/Map";
import { ThemeContext } from "../colorScheme/ThemeContext";
import { CustomDarkTheme, CustomLightTheme } from "../colorScheme/Theme";
import ThemeToggle from "./ThemeToggle";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Bookmarks from "./Bookmarks";

const NavigationComponent = () => {
  const { colors } = useTheme();

  const HomeLayout = createBottomTabNavigator();

  const [data, setData] = useState<any>([]);

  const [bookMarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const handleBookmarks = (id: number) => {
    if (bookMarkedIds.includes(id)) {
      const updatedNumbers = bookMarkedIds.filter((n) => n !== id);
      setBookmarkedIds(updatedNumbers);
    } else {
      setBookmarkedIds([...bookMarkedIds, id]);
    }
  };
  const bookmarkReference = { bookMarkedIds, handleBookmarks };

  const HomeIcon = ({ color }: any) => {
    return <FontAwesome5 name="home" size={24} color={color} />;
  };

  const BookmarkIcon = ({ color }: any) => {
    return <FontAwesome name="bookmark" size={24} color={color} />;
  };

  ///längengrad/breitengrad

  const fetchData = async () => {
    fetch("http://172.16.2.102:8080/location/all/51.950794/7.638197", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  };

  const OverviewContent = () => {
    return <Overview data={data} bookmarkReference={bookmarkReference} />;
  };
  const BookmarkContent = () => {
    return <Bookmarks data={data} bookmarkReference={bookmarkReference} />;
  };

  const MapCall = () => {
    const themeContext = useContext(ThemeContext);
  
    return <Map bookmarkReference={bookmarkReference} theme={themeContext.themeState} />;
  };

  useEffect(() => {
    fetchData();
  }, []);
  const MapIcon = ({ color }: any) => {
    return <FontAwesome5 name="map-pin" size={24} color={color} />
  }

  return (
    <HomeLayout.Navigator
      screenOptions={{ tabBarActiveTintColor: colors.primary }}
    >
      <HomeLayout.Screen
        name="Überblick"
        initialParams={data}
        component={OverviewContent}
        options={{ headerRight: ThemeToggle, tabBarIcon: HomeIcon }}
      />
      <HomeLayout.Screen
        name="Karte"
        component={MapCall}
        options={{ headerRight: ThemeToggle, tabBarIcon: MapIcon }}
      />
      <HomeLayout.Screen
        name="Lesezeichen"
        component={BookmarkContent}
        options={{ headerRight: ThemeToggle, tabBarIcon: BookmarkIcon }}
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
