import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";

import { HeaderPosts } from "../Components/HeaderPosts";
import TabBarAdd from "../Components/TabBarAdd";
import { ContentBoxHome } from "./ContentBoxHome";
import Logout from "../../Img/log-out.svg";
const Home = ({ navigation }) => {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Logout onPress={() => navigation.navigate("Login")} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <HeaderPosts style={styles.header}></HeaderPosts>
      {/* <ContentBox></ContentBox> */}
      <ScrollView>
        <ContentBoxHome></ContentBoxHome>
      </ScrollView>

      <TabBarAdd />
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

export default Home;
