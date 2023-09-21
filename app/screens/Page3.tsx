import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Page3 = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Page3</Text>
    </View>
  );
};

export default Page3;
