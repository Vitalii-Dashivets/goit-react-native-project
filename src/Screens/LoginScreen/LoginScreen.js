import * as React from "react";
import { LoginForm } from "./LoginForm";
import { StyleSheet, View, ImageBackground } from "react-native";
import BackImage from "../../Img/img1.png";
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.box}>
          <LoginForm />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  box: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
