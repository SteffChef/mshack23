import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import OverviewCard from "./OverviewCard";
import CategoryDrawer from "./CategoryDrawer";
import DetailsModal from "./DetailsModal";
import LocationTypeDrawer from "./LocationTypeDrawer";

interface Props {
  data: any;
  bookmarkReference: any;
}

const Overview = ({ data, bookmarkReference }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeLocation, setActiveLocation] = useState<string>("");

  const handleCategoryPress = (text: string) => {
    if (text === activeCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(text);
    }
  };
  const handleLocationPress = (text: string) => {
    if (text === activeLocation) {
      setActiveLocation("");
    } else {
      setActiveLocation(text);
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

      <CategoryDrawer
        activeCategory={activeCategory}
        handleCategoryPress={handleCategoryPress}
      />
      <LocationTypeDrawer
        activeLocationType={activeLocation}
        handleLocationPress={handleLocationPress}
      />
      <FlatList
        style={{ width: "93%" }}
        onEndReachedThreshold={5}
        data={data
          .filter((item: any) =>
            item.categories.some(
              (category: any) =>
                category.name === activeCategory || activeCategory === ""
            )
          )
          .filter(
            (item: any) =>
              item.locationType === activeLocation || activeLocation === ""
          )}
        renderItem={({ item }) => (
          <OverviewCard
            name={item.name}
            distance={item.distance}
            id={item.id}
            categories={item.categories.map((item: any) => item.name)}
            key={item.id}
            activeCategory={activeCategory}
            setModalVisible={setModalVisible}
            bookmarkReference={bookmarkReference}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        windowSize={20}
      />
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  cardContainer: {
    width: "93%",
  },
});
