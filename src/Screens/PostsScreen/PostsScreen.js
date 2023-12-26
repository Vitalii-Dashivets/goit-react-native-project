import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { User } from "../Components/User";
import Logout from "../../Img/log-out.svg";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Logout
          onPress={() => {
            dispatch(logout());

            navigation.navigate("Login");
          }}
        />
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
