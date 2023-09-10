import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { HeaderPosts } from "../Components/HeaderPosts";

import { User } from "../Components/User";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderPosts style={styles.header}></HeaderPosts>
      <View style={styles.box}>
        <User></User>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    // height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  header: {
    // // position: "absolute",
    // top: 0,
  },
  footer: {
    // position: "absolute",
    // bottom: 0,
  },
});
export default PostsScreen;
