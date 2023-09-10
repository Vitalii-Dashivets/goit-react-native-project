import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";

import * as React from "react";
import BtnAdd from "../../Img/Union1.svg";
import { PictureCard } from "../Components/PictureCard";
// import TabBarAdd from "../Components/TabBarAdd";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.box} removeClippedSubviews={false}>
          <View style={styles.imageContainer}>
            <View style={styles.imageBox}>
              <Image
                source={{ uri: "https://reactjs.org/logo-og.png" }}
                style={styles.image}
              ></Image>
              <Pressable style={styles.btnAdd}>
                <BtnAdd width={13} height={13} />
              </Pressable>
            </View>
          </View>

          <Text style={styles.title}>Ім'я Прізвище</Text>
          <View style={styles.pictureContainer}>
            <PictureCard></PictureCard>
            <PictureCard></PictureCard>
            <PictureCard></PictureCard>
          </View>
          <View height={100}></View>
        </View>
      </ScrollView>
      {/* <TabBarAdd></TabBarAdd> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  containerScroll: {
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  box: {
    top: 145,

    //  marginTop: 147,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 147,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",

    // height: "100%",
  },
  imageContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    zIndex: 10,
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

  title: {
    color: "black",
    fontSize: 30,
    // letterSpacing: 0.01,
    lineHeight: 35,
    fontFamily: "Roboto-500",
    textAlign: "center",
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
  pictureContainer: {
    width: "100%",
    marginTop: 33,
    gap: 32,
  },
});
