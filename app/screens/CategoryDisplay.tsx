import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions, // Import Dimensions from react-native
} from "react-native";
import React from "react";
import CategoryIcon from "./CategoryIcon";
import { useTheme } from "@react-navigation/native";

interface Props {
  handleCategoryPress: (text: string) => void;
  categories: string[];
}

const CategoryDisplay = ({ handleCategoryPress, categories }: Props) => {
  const { colors } = useTheme();

  // Calculate the maximum number of categories that can fit in a row
  const screenWidth = Dimensions.get("window").width;
  const maxCategoriesPerRow = Math.floor(screenWidth / 120); // Adjust 120 as needed for spacing

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(category)}
        >
          <View
            style={{
              ...styles.category,
              backgroundColor: colors.card,
              borderColor: colors.border,
              marginRight: (index + 1) % maxCategoriesPerRow === 0 ? 0 : 5,
              marginBottom: 5, // Add spacing between rows
            }}
          >
            <CategoryIcon name={category} isHighlighted={false} />
            <Text style={{ marginRight: 5, color: colors.text }}>
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Display containers horizontally
    flexWrap: "wrap", // Allow containers to wrap to the next
  },
  category: {
    borderWidth: 1.5,
    borderRadius: 1000,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    gap: 5,
    width: "auto", // Adjust the width as needed
  },
});
