import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";

import * as React from "react";
import BtnAdd from "../../Img/Union1.svg";
import { PictureCard } from "../Components/PictureCard";
import { useNavigation } from "@react-navigation/native";
import BackImage from "../../Img/img1.png";
import Logout from "../../Img/log-out.svg";
import { AvatarBox } from "../Components/AvatarBox";
import { usePosts } from "../../hooks/usePosts";
import { useAuth } from "../../hooks/useAuth";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/posts/postsOperations";
import { updateUserAvatar, logout } from "../../redux/auth/authOperations";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { displayName, avatarUrl, uid } = useAuth();
  const isFocused = useIsFocused();
  const { posts } = usePosts();
  const dispatch = useDispatch();
  const [avatarURL, setAvatarURL] = React.useState(avatarUrl);
  const { isLoggedIn } = useAuth();

  const onLogout = () => {
    dispatch(logout());
    //navigation.navigate("Login");
  };
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("Login");
    } else {
      return;
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    dispatch(getPosts(uid));
  }, [isFocused]);
  React.useEffect(() => {
    dispatch(updateUserAvatar({ uid: uid, avatar: avatarURL }));
  }, [avatarURL]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={styles.box} removeClippedSubviews={false}>
            <View style={styles.imageContainer}>
              <AvatarBox avatarUrl={avatarURL} setAvatarUrl={setAvatarURL} />
            </View>
            <View style={styles.logoutContainer}>
              <Pressable onPress={onLogout}>
                <Logout></Logout>
              </Pressable>
            </View>
            <Text style={styles.title}>{displayName}</Text>
            <View style={styles.pictureContainer}>
              {posts.map((item) => {
                return <PictureCard key={item.id} post={item}></PictureCard>;
              })}
            </View>
            <View height={100}></View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  containerScroll: {
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  box: {
    top: 145,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 147,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    // zIndex: 10,
    top: -60,
  },
  imageBox: {
    width: 120,
    height: 120,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  title: {
    color: "black",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto-500",
    textAlign: "center",
  },

  btnAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  pictureContainer: {
    width: "100%",
    marginTop: 33,
    gap: 32,
  },
  logoutContainer: {
    position: "absolute",
    right: 16,
    top: 22,
  },
});
export default ProfileScreen;
