import { View, Text } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

interface Props {
  searchInput: string;
  setSearchInput: (text: string) => void;
}

const SearchBar = ({ searchInput, setSearchInput }: Props) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(text) => {
        setSearchInput(text);
      }}
      value={searchInput}
    />
  );
};

export default SearchBar;
