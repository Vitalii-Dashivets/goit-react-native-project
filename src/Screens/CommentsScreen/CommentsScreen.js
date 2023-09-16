import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

// import { Header } from "./Header";
import { TabBarColor } from "../Components/TabBarComent";
import { ContentBox } from "./ContentBox";
import { Comments } from "./Comments";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header style={styles.header}></Header> */}
      <ContentBox></ContentBox>
      <Comments></Comments>
      <TabBarColor style={styles.footer}></TabBarColor>
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
export default CommentsScreen;
