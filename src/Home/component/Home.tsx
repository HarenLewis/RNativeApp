import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is was a test!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  }
});
