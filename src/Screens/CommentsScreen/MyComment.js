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
import NoFoto from "../../Img/Group 1.svg";
import MapPin from "../../Img/map-pin.svg";

export const MyComment = ({ comment, currentUser }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{comment.comment}</Text>
        <Text style={styles.date}>{comment.createdAt}</Text>
      </View>
      <Image
        source={{ uri: currentUser.data.photoURL }}
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // flexBasis: "100%",
    //width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: "stretch",
    justifyContent: "flex-end",
    //alignItems: "stretch",
    // borderColor: "rgba(0,0,0,0.3)",
  },
  box: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.03)",
    // width: "inherit",
    // height: 60,
    padding: 16,
    marginRight: 16,
    alignItems: "flex-end",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  text: {
    width: "100%",
    fontSize: 13,
    fontFamily: "Roboto-400",
    lineHeight: 18,
  },
  date: {
    marginTop: 8,
    fontSize: 10,
    fontFamily: "Roboto-400",
    color: "rgba(189, 189, 189, 1)",
  },
});
