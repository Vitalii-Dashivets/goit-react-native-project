import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { TabBar } from "../Components/TabBar";
import { ContentBox } from "./ContentBox";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <ContentBox></ContentBox>
      <TabBar></TabBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
export default CreatePostsScreen;
