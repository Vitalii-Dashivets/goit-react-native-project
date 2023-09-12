import * as React from "react";
import { RegistrationForm } from "./RegistrationForm";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackImage from "../../Img/img1.png";

export const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BackImage}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.box}>
            <RegistrationForm />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
