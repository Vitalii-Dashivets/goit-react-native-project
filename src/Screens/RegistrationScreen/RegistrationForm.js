import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { AvatarBox } from "../Components/AvatarBox";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { registerDB } from "../../firebaseOperations/firebaseOperations";

export const RegistrationForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [avatarUrl, setAvatarUrl] = React.useState(
    "https://reactjs.org/logo-og.png"
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onRegister = async () => {
    if (name === "" || email === "" || password === "") {
      return;
    }
    try {
      dispatch(
        register({
          name: name,
          email: email,
          password: password,
          avatarUrl: avatarUrl,
        })
      );
      navigation.navigate("Login");
      setName("");
      setEmail("");
      setPassword("");
      return;
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
    return;
  };

  return (
    <View style={stylesReg.box}>
      <View style={stylesReg.imageContainer}>
        <AvatarBox avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} />
      </View>

      <Text style={stylesReg.title}>Реєстрація</Text>
      <View style={stylesReg.inputBox}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={stylesReg.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Логін"
          />

          <TextInput
            style={stylesReg.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
          />

          <TextInput
            style={stylesReg.textInput}
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            placeholder="Пароль"
          />

          <TouchableOpacity
            style={stylesReg.button}
            // style={({ pressed }) => [
            //   {
            //     backgroundColor: pressed ? "#BF6C00" : "#FF6C00",
            //   },
            //   stylesReg.button,
            // ]}

            onPress={onRegister}
          >
            <Text style={stylesReg.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={stylesReg.text}>Вже є акаунт? Увійти</Text>
      </Pressable>
    </View>
  );
};
const stylesReg = StyleSheet.create({
  box: {
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",

    top: -60,
  },
  imageBox: {
    width: 120,
    height: 120,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  text: {
    color: "black",
    fontSize: 16,
    marginTop: 16,
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Roboto-400",
    color: "rgba(27, 67, 113, 1)",
  },
  title: {
    color: "black",
    fontSize: 36,
    fontFamily: "Roboto-500",
    textAlign: "center",
    marginBottom: 16,
  },
  inputBox: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 50,
    marginTop: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    borderRadius: 27,
  },
  btnText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-400",
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
  btnIcon: {
    width: 13,
    height: 13,
  },
});
