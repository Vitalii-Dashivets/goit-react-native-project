import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { User } from "../Components/User";
import Logout from "../../Img/log-out.svg";
import { useNavigation } from "@react-navigation/native";
const PostsScreen = () => {
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
});
export default PostsScreen;
