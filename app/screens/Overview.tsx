import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import OverviewCard from "./OverviewCard";
import CategoryDrawer from "./CategoryDrawer";
import DetailsModal from "./DetailsModal";
import { ApiDatatype } from "./APIInterface";

interface Props {
  data: ApiDatatype[];
}

const Overview = ({ data }: Props) => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const [searchInput, setSearchInput] = useState("");
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
      <View style={{ width: "93%", justifyContent: "center" }}>
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </View>

      <CategoryDrawer
        activeCategory={activeCategory}
        handleCategoryPress={handleCategoryPress}
      />
      <ScrollView style={styles.cardContainer}>
        {data
          .filter((item) =>
            item.categories.some(
              (category) =>
                category.name === activeCategory || activeCategory === ""
            )
          )
          .map((item, index) => (
            <OverviewCard
              name={item.name}
              distance={50}
              categories={item.categories.map((item) => item.name)}
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
