import { View, Text, Button, Modal } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CategoryDrawer from "./CategoryDrawer";

interface Props {
  modalVisible: boolean;
  setModalVisible: (x: boolean) => void;
}

const DetailsModal = ({ modalVisible, setModalVisible }: Props) => {
  const { colors } = useTheme();

  const mock = {
    name: "Name",
    description:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    adress:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    isBookmarked: true,
    pic: "https://www.muensterhack.de/img/logo_muensterhack.png",
    openingHours: "Mo-Do 9-17 Uhr",
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      presentationStyle="pageSheet"
      style={{ height: "100%" }}
    >
      <Button title="Close" onPress={() => setModalVisible(false)}></Button>
      <View style={{ flex: 1, margin: 8 }}>
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <Text style={{ color: colors.text, ...styles.title }}>
              {mock.name}
            </Text>
          </View>
        </View>
        <View style={{ height: 55, borderRadius: 5, paddingVertical: 5, marginTop: 10 }}>
          <CategoryDrawer
            activeCategory={""}
            handleCategoryPress={() => {}}
          />
        </View>
        <ScrollView style={styles.descriptionContainer}>
          <Text style={{ color: colors.text, ...styles.description }}>
            {mock.description}
          </Text>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: colors.text, fontSize: 18 }}>
            {mock.openingHours}
          </Text>
          <View style={styles.mapIcon}>
            <FontAwesome name="map-marker" size={38} color="black" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DetailsModal;

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 9,
    paddingBottom: 8,
    borderRadius: 10,
    borderWidth: 2,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    height: 80,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    fontSize: 20,
  },
  mapIcon: {
    margin: 16, // Adjust the margin as needed
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
