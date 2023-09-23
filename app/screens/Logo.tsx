import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        style={{ height: 50, width: 50, marginLeft: 15, marginTop: 5 }}
        source={require("../../assets/LogoHinUndWegOutline.png")}
      />
    </>
  );
};

export default Logo;
