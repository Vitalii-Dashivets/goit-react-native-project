import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import * as React from "react";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={stylesLog.box}>
      <Text style={stylesLog.title}>Увійти</Text>

      <TextInput
        style={stylesLog.textInput}
        value={email}
        onChange={setEmail}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={stylesLog.textInput}
        value={password}
        onChange={setPassword}
        placeholder="Пароль"
      />
      <Pressable style={stylesLog.button}>
        <Text style={stylesLog.btnText}>Увійти</Text>
      </Pressable>
      <Text style={stylesLog.text}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};
const stylesLog = StyleSheet.create({
  box: {
    justifyContent: "flex-end",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
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
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Roboto-500",
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
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    borderRadius: 27,
    fontFamily: "Roboto-400",
  },
  btnText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-400",
  },
  btnAdd: {
    position: "absolute",
    zIndex: 10,
    top: 21,
    left: 258,
    width: 25,
    height: 25,
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
