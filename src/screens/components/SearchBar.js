import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        placeholder="search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        TextInput
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#DCDCDC",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 4,
    flexDirection: "row",
  },
  textInput: {
    borderRadius: 5,
    padding: 7,
    flex: 1,
    marginBottom: 3,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default SearchBar;
