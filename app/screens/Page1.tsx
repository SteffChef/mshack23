import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Page1 = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Page1011</Text>
    </View>
  );
};

export default Page1;

