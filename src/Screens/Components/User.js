import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { useAuth } from "../../hooks/useAuth";

export const User = () => {
  const { email, displayName, avatarUrl } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={{ uri: avatarUrl }} style={styles.image}></Image>
        <View style={styles.textBox}>
          <Text style={styles.name}>{displayName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    borderColor: "rgba(0,0,0,0.3)",
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 32,
    // paddingBottom: 32,
  },
  box: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: 171,
    height: 60,
    marginTop: 9,
    alignItems: "center",
  },
  textBox: {
    marginLeft: 8,
  },
  name: {
    fontSize: 13,
    // fontWeight: 700,
    fontFamily: "Roboto-500",
    lineHeight: 15,
  },
  email: {
    fontSize: 11,
    // fontWeight: 400,
    fontFamily: "Roboto-400",
    lineHeight: 13,
  },
  image: {
    width: 60,
    height: 60,
    // backgroundColor: "grey",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "black",
  },
});
