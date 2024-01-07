import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";

import { ContentBox } from "./ContentBox";
import ArrowLeft from "../../Img/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ArrowLeft onPress={() => navigation.navigate("PostsScreen")} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <ContentBox></ContentBox>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    width: "100%",
  },
  scrollContainer: {
    height: "100%",
  },
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
export default CreatePostsScreen;
