
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Events(){
  return (
    <View style={styles.container}>
      <Text>Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81ecec",
    alignItems: "center",
    justifyContent: "center",
  },
});