import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.img} source={{ uri: result.image_url }} />
      <Text style={styles.txt}> {result.name} </Text>
      <Text style={styles.stats}>
        {" "}
        {result.rating} Stars, {result.review_count} reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginTop: 4,
    marginRight: 7,
  },
  txt: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },
  stats: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default ResultDetail;
