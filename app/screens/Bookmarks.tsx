import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import DetailsModal from "./DetailsModal";
import OverviewCard from "./OverviewCard";
import { useTheme } from "@react-navigation/native";

interface Props {
  data: any;
  bookmarkReference: any;
}

const Bookmarks = ({ data, bookmarkReference }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [activeItem, setActiveItem] = useState<number>(1);

  return (
    <View
      style={{
        width: "100%",
        gap: 20,
        marginTop: 20,
        alignItems: "center",
        paddingBottom: 0,
      }}
    >
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={data.filter((item: any) => item.id === activeItem)[0]}
      />

      <ScrollView style={styles.cardContainer}>
        {data
          .filter((dataItem: any) =>
            bookmarkReference.bookMarkedIds.includes(dataItem.id)
          )
          .map((item: any, index: number) => (
            <OverviewCard
              name={item.name}
              distance={item.distance}
              categories={item.categories.map((category: any) => category.name)}
              key={index}
              activeCategory={""}
              setModalVisible={setModalVisible}
              id={item.id}
              bookmarkReference={bookmarkReference}
              setActiveItem={setActiveItem}
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
