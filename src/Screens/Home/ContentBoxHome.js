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
import { User } from "../Components/User";
import { PictureCardHome } from "../Components/PictureCardHome";
export const ContentBoxHome = () => {
  return (
    <View style={styles.container}>
      <User></User>
      <PictureCardHome></PictureCardHome>
      <PictureCardHome></PictureCardHome>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    // height: "100%",
    backgroundColor: "white",
    // flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",

    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 100,
    gap: 32,
  },
});
