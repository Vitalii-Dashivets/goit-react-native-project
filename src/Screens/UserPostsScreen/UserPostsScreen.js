import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";
import { User } from "../Components/User";
import Logout from "../../Img/log-out.svg";
import { PictureCard } from "../Components/PictureCard";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { usePosts } from "../../hooks/usePosts";
import { useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { getPosts } from "../../redux/posts/postsOperations";
import { useAuth } from "../../hooks/useAuth";

const UserPostsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { params } = useRoute();
  const isFocused = useIsFocused();
  const { posts } = usePosts();
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
    dispatch(getPosts(params.data.owner));
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <User
          displayName={params.data.name}
          avatarUrl={params.data.photoURL}
          email={params.data.email}
        ></User>

        <View style={styles.pictureContainer}>
          {posts.map((item) => {
            return <PictureCard key={item.id} post={item}></PictureCard>;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "white",
    paddingBottom: 20,
    //justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  pictureContainer: {
    width: "100%",
    marginTop: 33,
    gap: 32,
  },
});
export default UserPostsScreen;
