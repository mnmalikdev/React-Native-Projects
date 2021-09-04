import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultSingle = ({ navigation }) => {
  const [results, setResult] = useState(null); // since initially there is no object. we expect an array of objects of photo urls.
  const id = navigation.getParam("id");
  //getting data from yelp api.
  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResults(id);
  }, []); // if we pass an empty array to useEffect, it only calls the ftn once each time component is rendered. so this avoids repeated api calls.

  if (!results) {
    return null;
  }

  return (
    <View style={{ marginLeft: 10 }}>
      <Text style={styles.txt}>{results.name}</Text>
      <Text style={styles.sub_txt}>City: {results.location.city}</Text>
      <Text style={styles.sub_txt}>Address: {results.location.address1}</Text>
      <Text style={styles.sub_txt}>Gallery</Text>
      <FlatList
        horizontal
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.img} source={{ uri: item }} />;
        }}
      />
      <Text>Phone: {results.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 250,
    borderRadius: 5,
    margin: 3,
  },
  txt: {
    fontSize: 19,
    marginVertical: 7,
  },
  sub_txt: {
    margin: 1,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ResultSingle;
