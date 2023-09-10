import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import Logout from "../../Img/log-out.svg";
export const HeaderPosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textbox}>
          <Text style={styles.text}>Публікації</Text>
        </View>
      </View>

      <Pressable style={styles.logout}>
        <Logout width={25} height={25} />
      </Pressable>
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
    fontFamily: "Roboto-500",
  },
  textbox: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 44,
  },
});
