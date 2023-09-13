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

export const OneComment = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={styles.image}
      ></Image>
      <View style={styles.box}>
        <Text style={styles.text}>sdagfgsfdg6565sdgdfgsdffgsgag</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // flexBasis: "100%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: "stretch",
    justifyContent: "flex-start",
    alignItems: "stretch",
    // borderColor: "rgba(0,0,0,0.3)",
  },
  box: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.03)",
    // width: "inherit",
    // height: 60,
    padding: 16,
    marginLeft: 16,
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
