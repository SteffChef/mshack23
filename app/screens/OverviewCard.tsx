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
  setModalVisible: (x: boolean) => void;
}

const OverviewCard = ({
  name,
  distance,
  categories,
  activeCategory,
  setModalVisible,
}: Props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        borderColor: colors.border,
        backgroundColor: colors.card,
      }}
      onPress={() => setModalVisible(true)}
    >
      <View style={styles.topContainer}>
        <Text style={{ ...styles.titleText, color: colors.text }}>{name}</Text>
        <View style={styles.upperRightContainer}>
          <Text style={{ color: colors.text }}>{distance}m</Text>
          <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)}>
            {isBookmarked ? (
              <FontAwesome name="bookmark" size={24} color={colors.primary} />
            ) : (
              <FontAwesome name="bookmark-o" size={24} color={colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ ...styles.seperator, backgroundColor: colors.border }}
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
  },
});