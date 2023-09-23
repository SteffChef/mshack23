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
  {
    name: "donate",
    code: "#19CD91",
    showName: "Spenden",
  },
  {
    name: "repair",
    code: "#82A0D8",
    showName: "Reparatur",
  },
  {
    name: "dispose",
    code: "#ECEE81",
    showName: "Recyclen",
  },
];

interface Props {
  activeLocationType: string;
  handleLocationPress: (text: string) => void;
}

const LocationTypeDrawer = ({
  activeLocationType,
  handleLocationPress,
}: Props) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      horizontal={true}
      style={{
        paddingHorizontal: "3.5%",
        height: 50,
      }}
    >
      {categories.map(({ name, code, showName }, index) => (
        <TouchableOpacity key={index} onPress={() => handleLocationPress(name)}>
          <View
            style={{
              ...styles.category,
              backgroundColor: activeLocationType === name ? code : colors.card,
              borderColor: code,
            }}
          >
            <CategoryIcon name={name} isHighlighted={false} />
            <Text style={{ marginRight: 5, color: colors.text }}>
              {showName}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default LocationTypeDrawer;

const styles = StyleSheet.create({
  container: {},
  category: {
    borderWidth: 1.5,
    borderRadius: 1000,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    gap: 5,
    marginRight: 5,
  },
});
