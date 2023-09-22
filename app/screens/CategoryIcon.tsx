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
  switch (name) {
    case "Kleidung":
      return <Ionicons name="shirt" size={15} color="black" />;
    case "Haushaltsgegenstände":
      return (
        <MaterialCommunityIcons
          name="washing-machine"
          size={15}
          color="black"
        />
      );
    case "Spielzeug & Spiele":
      return <FontAwesome5 name="dice" size={15} color="black" />;
    case "Bücher & Medien":
      return <FontAwesome name="book" size={15} color="black" />;
    case "Elektronik":
      return <MaterialIcons name="devices" size={15} color="black" />;
    case "Fahrräder":
      return <FontAwesome5 name="bicycle" size={15} color="black" />;
    case "Möbel":
      return (
        <MaterialCommunityIcons
          name="table-furniture"
          size={15}
          color="black"
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
      }}
    >
      {GetIcon(name)}
    </View>
  );
};

export default CategoryIcon;
