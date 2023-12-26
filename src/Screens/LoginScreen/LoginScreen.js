import * as React from "react";
import { LoginForm } from "./LoginForm";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackImage from "../../Img/img1.png";
import { useNavigation } from "@react-navigation/native";
import { refreshUser } from "../../redux/auth/authOperations";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return;
    }
    const payload = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };

    dispatch(refreshUser(payload));

    navigation.navigate("Home");
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
export default LoginScreen;
