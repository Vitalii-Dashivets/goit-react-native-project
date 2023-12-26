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
import React, { useState, useEffect, useRef } from "react";
import MapPin from "../../Img/map-pin.svg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/posts/postsOperations";
import { useAuth } from "../../hooks/useAuth";

export const PostForm = ({ fotoLink, setFotoLink, location }) => {
  const [name, setName] = useState("");
  const [locationArea, setLocationArea] = useState("");
  const [disable, setDisable] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useAuth();

  const publicatePost = async () => {
    try {
      const data = {
        displayName: user.displayName,
        file: fotoLink,
        owner: user.uid,
        title: name,
        location: location,
        locationArea: locationArea,
      };
      dispatch(addPost(data));
      // const imageRef = await uploadFileToStorage({
      //   name: name,
      //   file: fotoLink,
      // });
      // await writeDataToFirestore({
      //   owner: user.uid,
      //   photoURL: imageRef,
      //   title: name,
      //   location: location,
      //   locationArea: locationArea,
      // });
      navigation.navigate("PostsScreen");
      setName("");
      setLocationArea(null);
      setFotoLink(null);
      setDisable(true);
    } catch (e) {}
  };

  useEffect(() => {
    if (fotoLink) {
      setDisable(false);
      console.log("disable:", disable);
    }
  }, [fotoLink]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Назва..."
        value={name}
        onChangeText={setName}
        placeholderTextColor="#BDBDBD"
      />
      <View style={styles.mapInputBox}>
        <MapPin style={styles.mapPinIcon}></MapPin>
        <TextInput
          style={styles.textInputMap}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
          value={locationArea}
          onChangeText={setLocationArea}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          //   {
          //     backgroundColor: pressed ? "rgb(210, 230, 255)" : "#FF6C00",
          //   },
          {
            backgroundColor: fotoLink
              ? pressed
                ? "#BF6C00"
                : "#FF6C00"
              : "#F6F6F6",
          },
          styles.buttonPost,
        ]}
        onPress={publicatePost}
        disabled={disable}
      >
        <Text
          style={[styles.btnText, { color: fotoLink ? "#FFFFFF" : "#BDBDBD" }]}
        >
          Опублікувати
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    color: "#212121",
    paddingLeft: 15,
    fontSize: 16,
  },
  textInputMap: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    color: "#212121",
    paddingLeft: 28,
    fontSize: 16,
  },
  buttonPost: {
    width: "100%",
    // backgroundColor: "#F6F6F6",
    paddingVertical: 17,
    // height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 27,
  },
  btnText: {
    fontSize: 16,
    // color: "#FFFFFF",
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
