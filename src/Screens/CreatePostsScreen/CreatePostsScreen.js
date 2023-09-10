import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { HeaderCreatePosts } from "../Components/HeaderCreatePosts";
import { TabBar } from "../Components/TabBar";
import { ContentBox } from "./ContentBox";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCreatePosts style={styles.header}></HeaderCreatePosts>
      <ContentBox></ContentBox>
      <TabBar></TabBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
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
