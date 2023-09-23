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
    "id": 1,
    "locationType": "donate",
    "name": "Givebox Christuskirche",
    "address": "Ecke Hammerstraße/Friedrich-Ebert-Straße auf dem Grundstück der Christuskirche (Evangelisch-Freikirchliche-Gemeinde)",
    "latitude": 51.942209,
    "longitude": 7.623405,
    "openingHours": "immer",
    "infoLink": "https://www.baptisten-muenster.de/gemeindeleben/mission-diakonie/give-box.html",
    "carrier": "",
    "comments": null,
    "categories": [
      {
        "id": 2,
        "name": "household"
      },
      {
        "id": 3,
        "name": "media"
      },
      {
        "id": 4,
        "name": "toys"
      }
    ]
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
            {mock.comments}
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
