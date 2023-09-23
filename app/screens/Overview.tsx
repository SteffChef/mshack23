import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import OverviewCard from "./OverviewCard";
import CategoryDrawer from "./CategoryDrawer";
import DetailsModal from "./DetailsModal";
import LocationTypeDrawer from "./LocationTypeDrawer";
import { Octicons } from "@expo/vector-icons";

interface Props {
  data: any;
  bookmarkReference: any;
}

const Overview = ({ data, bookmarkReference }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeLocation, setActiveLocation] = useState<string>("");
  const [activeItem, setActiveItem] = useState<number>(1);

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
    comments?: string;
    openingHours?: string;
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
        item={data.filter((item: any) => item.id === activeItem)[0]}
      />

      <CategoryDrawer
        activeCategory={activeCategory}
        handleCategoryPress={handleCategoryPress}
      />
      <LocationTypeDrawer
        activeLocationType={activeLocation}
        handleLocationPress={handleLocationPress}
      />
      {/* <View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          transform: [{ rotate: "45deg" }],
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Octicons
          style={{
            transform: [{ rotate: "-45deg" }],
            marginTop: 5,
            marginLeft: 5,
          }}
          name="heart"
          size={60}
          color="white"
        />
      </View> */}
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
            setActiveItem={setActiveItem}
            bookmarkReference={bookmarkReference}
            locationType={item.locationType}
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
