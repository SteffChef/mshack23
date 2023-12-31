import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CategoryIcon from "./CategoryIcon";
import { useTheme } from "@react-navigation/native";

const categories = [
  "clothing",
  "household",
  "toys",
  "media",
  "electronics",
  "bicycles",
  "furniture",
];

interface Props {
  activeCategory: string;
  handleCategoryPress: (text: string) => void;
}

const CategoryDrawer = ({ activeCategory, handleCategoryPress }: Props) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      horizontal={true}
      style={{ paddingHorizontal: "3.5%", height: 50 }}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(category)}
        >
          <View
            style={{
              ...styles.category,
              backgroundColor:
                activeCategory === category ? colors.primary : colors.card,
              borderColor: colors.border,
            }}
          >
            <CategoryIcon name={category} isHighlighted={false} />
            <Text style={{ marginRight: 5, color: colors.text }}>
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryDrawer;

const styles = StyleSheet.create({
  container: {},
  category: {
    borderWidth: 1.5,
    borderRadius: 1000,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    gap: 5,
    marginRight: 5,
  },
});
