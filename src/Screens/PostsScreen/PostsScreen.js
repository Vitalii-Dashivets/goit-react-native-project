import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";
import { User } from "../Components/User";
import Logout from "../../Img/log-out.svg";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useIsFocused } from "@react-navigation/native";
import { clearPostsArray } from "../../redux/posts/postsOperations";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { usersList } = useAuth();
  const isFocused = useIsFocused();
  const { isLoggedIn } = useAuth();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Logout
          onPress={() => {
            dispatch(logout());
          }}
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("Login");
    } else {
      return;
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    dispatch(clearPostsArray([]));
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      {usersList.map((item) => {
        return (
          <View style={styles.box} key={item.id}>
            <Pressable
              onPress={() => {
                navigation.navigate("UserPostsScreen", item);
              }}
            >
              <User
                displayName={item.data.name}
                avatarUrl={item.data.photoURL}
                email={item.data.email}
              ></User>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    //justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
});
export default PostsScreen;
