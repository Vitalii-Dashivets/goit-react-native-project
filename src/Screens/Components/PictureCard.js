import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import NoFoto from "../../Img/Group 1.svg";
import MapPin from "../../Img/map-pin.svg";
import CommentsIcon from "../../Img/comentsIcon.svg";
import LikesIcon from "../../Img/likesIcon.svg";
import { updateDataInFirestore } from "../../firebaseOperations/firestoreApi";
import { useDispatch } from "react-redux";
import { getPosts, updatePost } from "../../redux/posts/postsOperations";
import { useAuth } from "../../hooks/useAuth";

export const PictureCard = ({ post }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = React.useState(false);
  const { uid } = useAuth();
  const [colorLike, setColorLike] = React.useState();

  React.useEffect(() => {
    if (post.data.likes.includes(uid)) {
      setIsLiked(true);
      setColorLike("red");
    } else {
      setIsLiked(false);
      setColorLike(null);
    }
  }, [post]);

  const goToComments = () => {
    navigation.navigate("Comments", { post: post, user: uid });
  };
  const goToMap = () => {
    navigation.navigate("Map");
  };
  const onPressLike = () => {
    if (isLiked) {
      let likesArray = post.data.likes.filter((item) => item !== uid);
      dispatch(
        updatePost({
          postId: post.id,
          update: { likes: likesArray },
          owner: uid,
        })
      );
    } else {
      let likesArray = [...post.data.likes];
      likesArray.push(uid);
      dispatch(
        updatePost({
          postId: post.id,
          update: { likes: likesArray },
          owner: uid,
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.fotobox}>
          <Image
            source={{ uri: post.data.photoURL }}
            style={styles.noFoto}
          ></Image>
        </View>
      </View>
      <Text style={styles.title}>{post.data.title}</Text>
      <View style={styles.statistics}>
        <View style={styles.navigation}>
          <Pressable style={styles.commentsBox} onPress={goToComments}>
            <CommentsIcon style={styles.commentsIcon}></CommentsIcon>
            <Text>{post.data.comments.length}</Text>
          </Pressable>
          <Pressable style={styles.commentsBox} onPress={onPressLike}>
            <LikesIcon
              // style={styles.commentsLikesIcon}
              style={{ stroke: colorLike }}
            ></LikesIcon>
            <Text>{post.data.likes.length}</Text>
          </Pressable>
        </View>
        <Pressable style={styles.navBox}>
          <MapPin style={styles.mapPin} onPress={goToMap}></MapPin>
          <Text>{post.data.locationArea}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    // flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    borderColor: "rgba(0,0,0,0.3)",
  },
  box: {
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "white",
    // width: 171,
    // height: 60,

    alignItems: "flex-start",
  },
  fotobox: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    overflow: "hidden",
  },
  noFoto: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto-500",
    marginTop: 8,
    lineHeight: 18,
  },
  navigation: {
    flexDirection: "row",
  },
  statistics: {
    marginTop: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commentsBox: {
    flexDirection: "row",
    marginRight: 24,
    alignItems: "center",
  },
  commentsBox: {
    flexDirection: "row",
    marginRight: 24,
    alignItems: "center",
  },
  commentsIcon: {
    marginRight: 9,
  },
  commentsLikesIcon: {
    marginRight: 6,
  },
  navBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  mapPin: {
    marginRight: 4,
  },
  navText: {
    fontFamily: "Roboto-400",
    fontSize: 25,
    lineHeight: 18,
    textDecorationLine: "line-through",
  },
});
