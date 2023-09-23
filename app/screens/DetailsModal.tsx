import { View, Text, Button, Modal } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CategoryDrawer from "./CategoryDrawer";

interface Props {
  modalVisible: boolean;
  item: any;
  setModalVisible: (x: boolean) => void;
}

const DetailsModal = ({ modalVisible, setModalVisible, item }: Props) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      presentationStyle="pageSheet"
      style={{ height: 20, backgroundColor: colors.background }}
    >
      <Text>{item.length}</Text>
      <View style={{ flex: 1, margin: 8, backgroundColor: colors.background }}>
        <View style={styles.closeButtonContainer}>
          <FontAwesome
            name="times"
            size={30}
            color={colors.text}
            onPress={() => setModalVisible(false)}
            style={{ color: colors.text, ...styles.closeButton }}
          />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <Text style={{ color: colors.text, ...styles.title }}>
              {item.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 55,
            borderRadius: 5,
            paddingVertical: 5,
            marginTop: 10,
          }}
        >
          <CategoryDrawer activeCategory={""} handleCategoryPress={() => {}} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ color: colors.text, ...styles.description }}>
            {item.comments}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.text, fontSize: 18 }}>
            {item.openingHours}
          </Text>
        </View>
      </View>
      <View style={styles.mapIcon}>
        <FontAwesome name="map-marker" size={38} color="black" />
      </View>
    </Modal>
  );
};

export default DetailsModal;

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 10,
    paddingLeft: 9,
    paddingBottom: 8,
    borderRadius: 10,
    borderWidth: 1.1,
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
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButton: {
    borderRadius: 15,
    padding: 5,
  },
});
