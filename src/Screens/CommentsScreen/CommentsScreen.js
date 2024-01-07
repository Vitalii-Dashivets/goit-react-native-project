import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";

// import { Header } from "./Header";
import { TabBarComment } from "../Components/TabBarComent";
import { ContentBox } from "./ContentBox";
import { Comments } from "./Comments";
import { useRoute } from "@react-navigation/native";

const CommentsScreen = () => {
  const { params } = useRoute();
  //console.log(params);
  return (
    <View style={styles.container}>
      {/* <Header style={styles.header}></Header> */}
      <ContentBox post={params.post}></ContentBox>

      <Comments params={params}></Comments>

      <TabBarComment style={styles.footer} params={params}></TabBarComment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    //position: "relative",
    backgroundColor: "white",
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
