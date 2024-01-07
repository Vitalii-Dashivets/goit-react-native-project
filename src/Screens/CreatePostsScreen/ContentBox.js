import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import React, { useState, useEffect, useRef } from "react";
import Trash from "../../Img/trash-2.svg";
import { CameraBox } from "../Components/CameraBox";
import { PostForm } from "../Components/PostForm";

export const ContentBox = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [fotoLink, setFotoLink] = useState(null);

  const deletePhoto = () => {
    setFotoLink(null);
  };

  return (
    <View style={styles.container}>
      {!fotoLink && (
        <View style={styles.fotobox}>
          <CameraBox
            setFotoLink={setFotoLink}
            setLocation={setLocation}
          ></CameraBox>
        </View>
      )}
      {fotoLink && (
        <View style={styles.fotobox}>
          <Image
            source={{ uri: fotoLink }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
      )}
      {!fotoLink ? (
        <Text style={styles.loadFotoText}>Завантажте фото</Text>
      ) : (
        <Text style={styles.loadFotoText}></Text>
      )}

      <PostForm
        fotoLink={fotoLink}
        location={location}
        setFotoLink={setFotoLink}
      ></PostForm>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: fotoLink
              ? pressed
                ? "#BF6C00"
                : "#FF6C00"
              : "#F6F6F6",
          },
          styles.buttonTrash,
        ]}
        onPress={deletePhoto}
      >
        <Trash
          width={24}
          height={24}
          style={{ stroke: fotoLink ? "#FFFFFF" : "#BDBDBD" }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "stretch",
    justifyContent: "space-between",

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
    alignItems: "stretch",
  },
  fotobox: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    overflow: "hidden",
  },
  // noFoto: {
  //   width: 60,
  //   height: 60,
  // },
  loadFotoText: {
    fontSize: 16,
    fontFamily: "Roboto-400",
    marginTop: 8,
    color: "#BDBDBD",
    marginBottom: 32,
  },

  buttonTrash: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 2,
    marginTop: "auto",
    //backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});
