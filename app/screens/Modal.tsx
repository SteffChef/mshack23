import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Page2 from "./Page2";

interface Props {
  id: string;
}
const Modal = ({ id }: Props) => {
  const { colors } = useTheme();

  const mock = {
    name: "Name",
    description:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    adress: "Coerdeplatz 18, 48147 Münster",
    isBookmarked: true,
    pic: "https://www.muensterhack.de/img/logo_muensterhack.png",
    openingHours: "Mo-Do 9-17 Uhr",
  };

  const img = { uri: mock.pic };

  return (
    <ScrollView style={{ margin: 8, height: "100%" }}>
      <ImageBackground source={img} resizeMode="cover">
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <Text style={{ color: colors.text, ...styles.title }}>
              {mock.name}
            </Text>
            <Text style={{ color: colors.text, fontSize: 18, bottom: 0 }}>
              {mock.openingHours}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={{ color: colors.text, fontSize: 18 }}>{mock.adress}</Text>
      <View
        style={{ height: 35, backgroundColor: "red", borderRadius: 5 }}
      ></View>
      <View style={styles.descriptionContainer}>
        <Text style={{ color: colors.text, ...styles.description }}>
          {mock.description}
        </Text>
      </View>
      <Text style={{ color: colors.text }}>{mock.isBookmarked}</Text>
      <View style={styles.mapIcon}>
        <FontAwesome name="map-marker" size={38} y color="black" />
      </View>
    </ScrollView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  headerPicture: {
    height: 220,
    resizeMode: "cover",
  },
  descriptionContainer: {
    marginTop: 10,
    paddingLeft: 9,
    paddingBottom: 8,
    borderRadius: 10,
    borderWidth: 2,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    height: 220,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    fontSize: 20,
  },
  mapIcon: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
    right: 5,
    position: "absolute",
  },
});
