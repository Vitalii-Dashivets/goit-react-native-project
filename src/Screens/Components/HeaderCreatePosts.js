import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import ArrowLeft from "../../Img/arrow-left.svg";
export const HeaderCreatePosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.arrowLeft}>
          <ArrowLeft width={24} height={24} />
        </Pressable>
        <View style={styles.textbox}>
          <Text style={styles.text}>Створити публікацію</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 88,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: 17,
    // fontFamily: "Roboto-500",
  },
  textbox: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeft: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 44,
  },
});
