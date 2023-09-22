import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import CategoryIcon from "./CategoryIcon";
import { useTheme } from "@react-navigation/native";

interface Props {
  name: string;
  distance: number;
  categories: string[];
  activeCategory: string;
}

const OverviewCard = ({
  name,
  distance,
  categories,
  activeCategory,
}: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>{name}</Text>
        <View style={styles.upperRightContainer}>
          <Text>{distance}m</Text>
          <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)}>
            {isBookmarked ? (
              <FontAwesome name="bookmark" size={24} color="black" />
            ) : (
              <FontAwesome name="bookmark-o" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ ...styles.seperator, backgroundColor: colors.text }}
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
    </View>
  );
};

export default OverviewCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1.5,
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  upperRightContainer: {
    flexDirection: "row",
    gap: 10,
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
  },
});
