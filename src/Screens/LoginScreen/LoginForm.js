import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import * as React from "react";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, {
    email: email,
    password: password,
  });
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  function reducer(state, action) {
    if (action.type === "submitForm") {
      return { ...state, email: email, password: password };
    }
  }
  const onLogin = () => {
    return dispatch({ type: "submitForm" });
  };
  return (
    <View style={stylesLog.box}>
      <Text style={stylesLog.title}>Увійти</Text>

      <TextInput
        style={stylesLog.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Адреса електронної пошти"
      />
      <View>
        <TextInput
          style={stylesLog.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Пароль"
        />
        <Pressable style={stylesLog.inputShow}>
          <Text style={stylesLog.inputShowText}>Показати</Text>
        </Pressable>
      </View>
      <Pressable style={stylesLog.button} onPress={onLogin}>
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
    position: "relative",
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
  inputShow: {
    position: "absolute",
    top: 28,
    right: 10,
  },
  inputShowText: {
    fontSize: 16,
    color: "#1B4371",
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
