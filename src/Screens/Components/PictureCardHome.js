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
import CommentsIcon from "../../Img/comentsIcon.svg";
import LikesIcon from "../../Img/likesIcon.svg";
import CommentsWhiteIcon from "../../Img/commentsWhiteIcon.svg";
export const PictureCardHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.fotobox}>
          <NoFoto style={styles.noFoto} />
        </View>
      </View>
      <Text style={styles.title}>Имя фото</Text>
      <View style={styles.statistics}>
        <View style={styles.navigation}>
          <View style={styles.commentsBox}>
            <CommentsWhiteIcon style={styles.commentsIcon}></CommentsWhiteIcon>
            <Text>8</Text>
          </View>
          {/* <View style={styles.commentsBox}>
            <LikesIcon style={styles.commentsLikesIcon}></LikesIcon>
            <Text>12</Text>
          </View> */}
        </View>
        <View style={styles.navBox}>
          <MapPin style={styles.mapPin}></MapPin>
          <Text>Ivano-Frankivsk region, Ukraine</Text>
        </View>
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
  },
  noFoto: {
    width: 60,
    height: 60,
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
