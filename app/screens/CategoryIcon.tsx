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

export const GetIcon = (name: string, size:number, color:string) => {
  const { colors } = useTheme();
  switch (name) {
    case "clothing":
      return <Ionicons name="shirt" size={size} color={color} />;
    case "household":
      return (
        <MaterialCommunityIcons
          name="washing-machine"
          size={size}
          color={color}
        />
      );
    case "toys":
      return <FontAwesome5 name="dice" size={size} color={color} />;
    case "media":
      return <FontAwesome name="book" size={size} color={color} />;
    case "electronics":
      return <MaterialIcons name="devices" size={size} color={color} />;
    case "bicycles":
      return <FontAwesome5 name="bicycle" size={size} color={color} />;
    case "furniture":
      return (
        <MaterialCommunityIcons
          name="table-furniture"
          size={size}
          color={color}
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
      {GetIcon(name, 15, colors.text)}
    </View>
  );
};

export default CategoryIcon;
