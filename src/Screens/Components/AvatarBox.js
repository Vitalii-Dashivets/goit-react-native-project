import { Image, StyleSheet, View, Pressable } from "react-native";
import BtnAdd from "../../Img/Union1.svg";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const AvatarBox = ({ avatarUrl, setAvatarUrl }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUrl(result.assets[0].uri);
    }
  };
  return (
    <View style={stylesReg.imageBox}>
      <Image source={{ uri: avatarUrl }} style={stylesReg.image}></Image>

      <Pressable style={stylesReg.btnAdd} onPress={pickImage}>
        <BtnAdd width={13} height={13} />
      </Pressable>
    </View>
  );
};
const stylesReg = StyleSheet.create({
  imageBox: {
    width: 120,
    height: 120,
    backgroundColor: "grey",
    position: "relative",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  btnAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
