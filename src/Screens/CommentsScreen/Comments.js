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

export const Comments = ({ params }) => {
  //console.log(params);
  const { uid } = useAuth();
  const comments = [...params.post.data.comments];
  const { usersList } = useAuth();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {comments.map((item) => {
          let id = uuid.v4();
          if (item.owner === uid) {
            const currentUser = usersList.find(
              (current) => current.data.owner === uid
            );

            return (
              <MyComment
                key={id}
                comment={item}
                currentUser={currentUser}
              ></MyComment>
            );
          } else {
            const currentUser = usersList.find(
              (current) => current.data.owner === item.owner
            );

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
