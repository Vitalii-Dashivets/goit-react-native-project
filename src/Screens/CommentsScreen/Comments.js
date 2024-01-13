import {
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as React from "react";

import { OneComment } from "./OneComment";
import { MyComment } from "./MyComment";
import { useAuth } from "../../hooks/useAuth";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getComments } from "../../redux/posts/postsOperations";
import { usePosts } from "../../hooks/usePosts";

export const Comments = ({ comments }) => {
  const dispatch = useDispatch();
  const { uid } = useAuth();
  const isFocused = useIsFocused();
  const { usersList } = useAuth();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {comments.length > 0 &&
          comments.map((item) => {
            let id = uuid.v4();
            if (item.owner === uid) {
              let index = usersList.findIndex((current) => {
                return current.data.owner === uid;
              });
              let currentUser = usersList[index];
              return (
                <MyComment
                  key={id}
                  comment={item}
                  currentUser={currentUser}
                ></MyComment>
              );
            } else {
              let index = usersList.findIndex((current) => {
                return current.data.owner === item.owner;
              });
              let currentUser = usersList[index];
              return (
                <OneComment
                  key={id}
                  comment={item}
                  currentUser={currentUser}
                ></OneComment>
              );
            }
          })}
        {/* <OneComment></OneComment>
      <MyComment></MyComment> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    //position: "relative",
    alignItems: "stretch",
    justifyContent: "flex-start",

    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 16,
  },
});
