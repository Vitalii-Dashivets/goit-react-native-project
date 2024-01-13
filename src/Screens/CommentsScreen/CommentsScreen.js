import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { TabBarComment } from "../Components/TabBarComent";
import { ContentBox } from "./ContentBox";
import { Comments } from "./Comments";
import { useRoute } from "@react-navigation/native";
import { getPosts } from "../../redux/posts/postsOperations";
import { useAuth } from "../../hooks/useAuth";
import { getComments } from "../../redux/posts/postsOperations";
import { usePosts } from "../../hooks/usePosts";

const CommentsScreen = () => {
  const { uid } = useAuth();
  const dispatch = useDispatch();
  const { params } = useRoute();
  const isFocused = useIsFocused();
  const [needToRend, setNeedToRend] = React.useState(false);
  const { comments } = usePosts();

  React.useEffect(() => {
    dispatch(getComments(params.post.id));
  }, [isFocused, needToRend]);

  return (
    <View style={styles.container}>
      {/* <Header style={styles.header}></Header> */}
      <ContentBox post={params.post}></ContentBox>
      {comments.length > 0 && <Comments comments={comments}></Comments>}
      <TabBarComment
        style={styles.footer}
        params={params}
        setNeedToRend={setNeedToRend}
      ></TabBarComment>
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
