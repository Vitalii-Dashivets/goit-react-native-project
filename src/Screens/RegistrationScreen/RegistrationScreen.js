import * as React from "react";
import { RegistrationForm } from "./RegistrationForm";
import { StyleSheet, View } from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.box}>
      <RegistrationForm />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
