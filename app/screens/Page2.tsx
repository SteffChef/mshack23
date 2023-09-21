import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Page2 = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Page2</Text>
    </View>
  );
};

export default Page2;
