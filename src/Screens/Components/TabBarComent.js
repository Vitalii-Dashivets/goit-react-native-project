import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import ArrowUp from "../../Img/ArrowUp.svg";

export const TabBarColor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
        ></TextInput>
        <Pressable style={styles.button}>
          <ArrowUp style={styles.arrowUp}></ArrowUp>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",

    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  box: {
    position: "relative",
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    borderRadius: 25,
    color: "#BDBDBD",
    fontSize: 20,
  },
  button: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    backgroundColor: "#FF6C00",
  },
  arrowUp: {
    width: 10,
    height: 14,
  },
});
