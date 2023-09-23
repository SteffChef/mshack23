import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import OverviewCard from "./OverviewCard";
import CategoryDrawer from "./CategoryDrawer";
import DetailsModal from "./DetailsModal";

const Overview = () => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Kleidung");

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
    comments?: string;
    openingHours?: string;
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
        data={data}
      />
      <View style={{ width: "93%", justifyContent: "center" }}>
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </View>

      <CategoryDrawer
        activeCategory={activeCategory}
        handleCategoryPress={handleCategoryPress}
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

export default Overview;

const styles = StyleSheet.create({
  cardContainer: {
    width: "93%",
  },
});
