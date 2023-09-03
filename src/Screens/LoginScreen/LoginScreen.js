import { View } from "react-native";
import * as React from "react";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View>
      <LoginForm></LoginForm>
    </View>
  );
};
