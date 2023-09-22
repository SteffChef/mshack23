import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import DetailsModal from "./DetailsModal";
import CategoryDrawer from "./CategoryDrawer";
import OverviewCard from "./OverviewCard";
import { useTheme } from "@react-navigation/native";

const Bookmarks = () => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryPress = (text: string) => {
    if (text === activeCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(text);
    }
  };

  interface datatype {
    name: string;
    distance: number;
    categories: string[];
  }

  const data: datatype[] = [
    {
      name: "Station",
      distance: 500,
      categories: [
        "clothing",
        "household",
        "toys",
        "media",
        "electronics",
        "bicycles",
        "furniture",
      ],
    },
    {
      name: "Station",
      distance: 500,
      categories: [
        "clothing",
        "household",
        "toys",
        "media",
        "electronics",
        "bicycles",
        "furniture",
      ],
    },
    {
      name: "Station",
      distance: 500,
      categories: [
        "clothing",
        "household",
        "toys",
        "media",
        "electronics",
        "bicycles",
        "furniture",
      ],
    },
    {
      name: "Station",
      distance: 500,
      categories: [
        "clothing",
        "household",
        "toys",
        "media",
        "electronics",
        "bicycles",
        "furniture",
      ],
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        gap: 20,
        marginTop: 20,
        alignItems: "center",
        paddingBottom: 135,
      }}
    >
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <ScrollView style={styles.cardContainer}>
        {data
          .filter(
            (item) =>
              item.categories.includes(activeCategory) || activeCategory === ""
          )
          .map((item: datatype, index) => (
            <OverviewCard
              name={item.name}
              distance={item.distance}
              categories={item.categories}
              key={index}
              activeCategory={activeCategory}
              setModalVisible={setModalVisible}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  cardContainer: {
    width: "93%",
  },
});
