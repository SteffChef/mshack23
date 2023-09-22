import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import OverviewCard from "./OverviewCard";
import CategoryDrawer from "./CategoryDrawer";

const Overview = () => {
  const { colors } = useTheme();

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
  }

  const data: datatype[] = [
    {
      name: "Station",
      distance: 500,
      categories: [
        "Kleidung",
        "Haushaltsgegenstände",
        "Spielzeug & Spiele",
        "Bücher & Medien",
        "Elektronik",
        "Möbel",
      ],
    },
    {
      name: "Sozialamt",
      distance: 500,
      categories: ["Kleidung", "Haushaltsgegenstände"],
    },
    {
      name: "Rathaus",
      distance: 500,
      categories: ["Kleidung", "Haushaltsgegenstände"],
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        gap: 20,
        marginTop: 20,
        alignItems: "center",
      }}
    >
      <View style={{ width: "93%", justifyContent: "center" }}>
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </View>

      <CategoryDrawer
        activeCategory={activeCategory}
        handleCategoryPress={handleCategoryPress}
      />
      <View style={styles.cardContainer}>
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
            />
          ))}
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 15,
    width: "93%",
  },
});
