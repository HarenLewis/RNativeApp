import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home/component/Home";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Home />
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
