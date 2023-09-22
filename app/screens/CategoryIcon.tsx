import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface Props {
  name: string;
  isHighlighted: boolean;
}

const GetIcon = (name: string) => {
  const { colors } = useTheme();
  switch (name) {
    case "clothing":
      return <Ionicons name="shirt" size={15} color={colors.text} />;
    case "household":
      return (
        <MaterialCommunityIcons
          name="washing-machine"
          size={15}
          color={colors.text}
        />
      );
    case "toys":
      return <FontAwesome5 name="dice" size={15} color={colors.text} />;
    case "media":
      return <FontAwesome name="book" size={15} color={colors.text} />;
    case "electronics":
      return <MaterialIcons name="devices" size={15} color={colors.text} />;
    case "bicycles":
      return <FontAwesome5 name="bicycle" size={15} color={colors.text} />;
    case "furniture":
      return (
        <MaterialCommunityIcons
          name="table-furniture"
          size={15}
          color={colors.text}
        />
      );
  }
};

const CategoryIcon = ({ name, isHighlighted }: Props) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        borderWidth: 1.5,
        borderRadius: 100,
        padding: 3,
        backgroundColor: isHighlighted ? colors.primary : colors.card,
        borderColor: colors.border,
      }}
    >
      {GetIcon(name)}
    </View>
  );
};

export default CategoryIcon;
