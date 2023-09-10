import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { HeaderPosts } from "../Components/HeaderPosts";

import { User } from "../Components/User";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
  },
});
export default PostsScreen;
