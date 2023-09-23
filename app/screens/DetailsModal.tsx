import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CategoryDisplay from "./CategoryDisplay";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";

interface Props {
  modalVisible: boolean;
  item: any;
  setModalVisible: (x: boolean) => void;
}

const DetailsModal = ({ modalVisible, setModalVisible, item }: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  if (item === undefined) {
    return null; // You might want to handle this differently
  }

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      presentationStyle="pageSheet"
      style={{ backgroundColor: "transparent" }}
    >
      <View style={{ ...styles.container, backgroundColor: colors.background }}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={{ ...styles.title, color: colors.text }}>
              {item.name}
            </Text>
            <FontAwesome
              name="times"
              size={30}
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
              color={colors.primary}
            />
          </View>
          <CategoryDisplay
            handleCategoryPress={() => {}}
            categories={item.categories.map((entry) => entry.name)}
          />
          <Text
            style={{
              ...styles.description,
              color: colors.texts,
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            {item.comments
              ? item.comments
              : "Das ist eine Beispielbeschreibung"}
          </Text>
          <View
            style={{
              ...styles.openingHoursContainer,
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
          >
            <Text style={{ ...styles.openingHoursTitle, color: colors.text }}>
              Öffnungszeiten:
            </Text>
            <Text style={{ ...styles.openingHours, color: colors.text }}>
              {item.openingHours}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.mapIcon}
          onPress={() => {
            navigation.navigate("Karte");
            setModalVisible(false);
          }}
        >
          <FontAwesome name="map-marker" size={38} color={colors.text} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DetailsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  headerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  openingHoursContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  openingHours: {
    fontSize: 18,
  },
  openingHoursTitle: {
    fontWeight: "700",
  },
  closeButton: {},
  mapIcon: {
    alignSelf: "center",
    marginTop: 16,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
