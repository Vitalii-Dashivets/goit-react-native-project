import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import GridIcon from "../../Img/grid.svg";
import UserIcon from "../../Img/user.svg";
import Union from "../../Img/Union2.svg";
export const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={styles.image}
        ></Image>
        <View style={styles.textBox}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.email}>Email</Text>
        </View>
      </View>
      {/* <View style={styles.box}>
        <Pressable style={styles.icon}>
          <GridIcon width={24} height={24} />
        </Pressable>
        <Pressable style={styles.button}>
          <Union width={13} height={13} />
        </Pressable>
        <Pressable style={styles.icon}>
          <UserIcon width={24} height={24} />
        </Pressable>
      </View> */}
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
    fontFamily: "Roboto-700",
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

    borderRadius: 16,
  },
});
