import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as React from "react";

import { OneComment } from "./OneComment";
import { MyComment } from "./MyComment";

export const Comments = () => {
  return (
    <View style={styles.container}>
      <OneComment></OneComment>
      <MyComment></MyComment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "white",

    alignItems: "stretch",
    justifyContent: "flex-start",

    borderColor: "rgba(0,0,0,0.3)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 16,
  },
});
