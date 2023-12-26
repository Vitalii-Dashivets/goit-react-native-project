import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";
import { ContentBoxHome } from "./ContentBoxHome";
import Logout from "../../Img/log-out.svg";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Logout onPress={() => navigation.navigate("Login")} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ContentBoxHome></ContentBoxHome>
      </ScrollView>
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

export default Home;
