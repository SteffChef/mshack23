import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import CategoryIcon from "./CategoryIcon";
import { useTheme } from "@react-navigation/native";

interface Props {
  name: string;
  id: number;
  distance: number;
  categories: string[];
  activeCategory: string;
  setModalVisible: (x: boolean) => void;
  setActiveItem: (x: number) => void;
  bookmarkReference: any;
  locationType: string;
}

const colorMatching = {};

const OverviewCard = ({
  name,
  distance,
  id,
  categories,
  activeCategory,
  setModalVisible,
  setActiveItem,
  bookmarkReference,
  locationType,
}: Props) => {
  const { colors } = useTheme();

  let accentcolor = "black";

  if (locationType === "donate") {
    accentcolor = "#19CD91";
  }
  if (locationType === "repair") {
    accentcolor = "#82A0D8";
  }
  if (locationType === "dispose") {
    accentcolor = "#ECEE81";
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        borderColor: accentcolor,
        backgroundColor: colors.card,
      }}
      onPress={() => {
        setModalVisible(true);
        setActiveItem(id);
      }}
    >
      <View style={styles.topContainer}>
        <Text style={{ ...styles.titleText, color: colors.text }}>{name}</Text>
        <View style={styles.upperRightContainer}>
          <Text style={{ color: colors.text }}>{distance}m</Text>
          <TouchableOpacity
            onPress={() => bookmarkReference.handleBookmarks(id)}
          >
            {bookmarkReference.bookMarkedIds.includes(id) ? (
              <FontAwesome name="bookmark" size={24} color={accentcolor} />
            ) : (
              <FontAwesome name="bookmark-o" size={24} color={accentcolor} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ ...styles.seperator, backgroundColor: accentcolor }}
      ></View>
      <View style={styles.bottomContainer}>
        {categories.map((category, index) => (
          <CategoryIcon
            name={category}
            key={index}
            isHighlighted={activeCategory === category}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default OverviewCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1.5,
    marginVertical: 7.5,
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  upperRightContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 10,
  },
  seperator: {
    height: 1.5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "700",
    flex: 1,
  },
});
