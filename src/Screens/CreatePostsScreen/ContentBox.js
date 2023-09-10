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

export const ContentBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.fotobox}>
          <NoFoto style={styles.noFoto} />
        </View>
        <Text style={styles.loadFotoText}>Завантажте фото</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.textInput}
          //   value={password}
          //   onChangeText={setPassword}
          placeholder="Назва..."
        />
        <View style={styles.mapInputBox}>
          <MapPin style={styles.mapPinIcon}></MapPin>
          <TextInput
            style={styles.textInputMap}
            //   value={password}
            //   onChangeText={setPassword}
            placeholder="Місцевість..."
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Опублікувати</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingBottom: 32,
  },
  box: {
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "white",
    // width: 171,
    // height: 60,
    marginTop: 9,
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
  loadFotoText: {
    fontSize: 16,
    fontFamily: "Roboto",
    marginTop: 8,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  textInput: {
    width: "100%",
    height: 50,
    marginTop: 16,
    marginBottom: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    color: "#BDBDBD",
    paddingLeft: 15,
    fontSize: 16,
  },
  textInputMap: {
    width: "100%",
    height: 50,
    marginTop: 16,
    marginBottom: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    color: "#BDBDBD",
    paddingLeft: 28,
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 27,
  },
  btnText: {
    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto-400",
  },
  mapInputBox: {
    position: "relative",
    width: "100%",
  },

  mapPinIcon: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 28,
    left: 0,
  },
});
