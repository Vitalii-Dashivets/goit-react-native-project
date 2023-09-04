import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";

import * as React from "react";
import BtnAdd from "../../Img/Union1.svg";

export const RegistrationForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={stylesReg.box}>
      <View style={stylesReg.imageContainer}>
        <View style={stylesReg.imageBox}>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={stylesReg.image}
          ></Image>
          <Pressable style={stylesReg.btnAdd}>
            <BtnAdd width={13} height={13} />
          </Pressable>
        </View>
      </View>

      <Text style={stylesReg.title}>Реєстрація</Text>
      <TextInput
        style={stylesReg.textInput}
        value={name}
        onChange={setName}
        placeholder="Логін"
      />
      <TextInput
        style={stylesReg.textInput}
        value={email}
        onChange={setEmail}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={stylesReg.textInput}
        value={password}
        onChange={setPassword}
        placeholder="Пароль"
      />
      <Pressable style={stylesReg.button}>
        <Text style={stylesReg.btnText}>Зареєструватися</Text>
      </Pressable>
      <Text style={stylesReg.text}>Вже є акаунт? Увійти</Text>
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
  },
  title: {
    color: "black",
    fontSize: 36,
    fontFamily: "Roboto-500",
    textAlign: "center",
    marginBottom: 16,
  },
  textInput: {
    width: "100%",
    height: 50,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
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
