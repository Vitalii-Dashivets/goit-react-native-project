import { Camera } from "expo-camera";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import React, { useState, useEffect, useRef } from "react";

export const CameraBox = ({ setFotoLink, setLocation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Camera style={styles.camera} type={type} ref={setCameraRef}>
      <View style={styles.photoView}>
        <TouchableOpacity
          style={styles.flipContainer}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
            {" "}
            Flip{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (cameraRef) {
              const { uri } = await cameraRef.takePictureAsync();
              await MediaLibrary.createAssetAsync(uri);
              setFotoLink(uri);
            }
          }}
        >
          <View style={styles.takePhotoOut}>
            <View style={styles.takePhotoInner}></View>
          </View>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: { flexGrow: 1 },
  photoView: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    flex: 1,
    alignSelf: "flex-start",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
