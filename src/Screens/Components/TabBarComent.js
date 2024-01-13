import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import ArrowUp from "../../Img/ArrowUp.svg";
import { useDispatch } from "react-redux";
import { updatePost, getPosts } from "../../redux/posts/postsOperations";
import { useNavigation } from "@react-navigation/native";

export const TabBarComment = ({ params, setNeedToRend }) => {
  const dispatch = useDispatch();
  const { post, user } = params;
  const [comment, setComment] = React.useState("");
  const navigation = useNavigation();

  const addComment = () => {
    let comments = [...post.data.comments];
    const date = new Date();

    function getMonthName(monthNumber) {
      date.setMonth(monthNumber - 1);

      return date.toLocaleString("en-US", { month: "long" });
    }
    const commentObj = {
      owner: user,
      comment: comment,
      createdAt: `${date.getDate()} ${getMonthName(
        date.getMonth() + 1
      )} ${date.getFullYear()} | ${date.getHours()}:${`${date.getMinutes()}`.padStart(
        2,
        "0"
      )}`,
    };
    comments.push(commentObj);

    dispatch(
      updatePost({
        postId: post.id,
        update: { comments: comments },
        owner: user,
      })
    );
    setComment("");
    setNeedToRend((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          value={comment}
          onChangeText={setComment}
        ></TextInput>
        <Pressable style={styles.button} onPress={addComment}>
          <ArrowUp style={styles.arrowUp}></ArrowUp>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",

    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  box: {
    position: "relative",
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    borderRadius: 25,
    color: "#BDBDBD",
    fontSize: 20,
  },
  button: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    backgroundColor: "#FF6C00",
  },
  arrowUp: {
    width: 10,
    height: 14,
  },
});
