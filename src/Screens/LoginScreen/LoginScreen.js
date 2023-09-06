import * as React from "react";
import { LoginForm } from "./LoginForm";
import { StyleSheet, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.box}>
      <LoginForm />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
