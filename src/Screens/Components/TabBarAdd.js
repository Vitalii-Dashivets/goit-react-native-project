import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import GridIcon from "../../Img/grid.svg";
import UserIcon from "../../Img/user.svg";
import Union from "../../Img/Union2.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

export default TabBarAdd = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.box}>
    //     <Pressable style={styles.icon}>
    //       <GridIcon width={24} height={24} />
    //     </Pressable>
    //     <Pressable style={styles.button}>
    //       <Union width={13} height={13} />
    //     </Pressable>
    //     <Pressable style={styles.icon}>
    //       <UserIcon width={24} height={24} />
    //     </Pressable>
    //   </View>
    // </View>

    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }) => {
          if (route.name === "Posts") {
            return (
              <View style={styles.tabLeftBox}>
                <GridIcon />
              </View>
            );
          } else if (route.name === "CreatePosts") {
            return (
              <View style={styles.tabCenterBox}>
                <View style={styles.button}>
                  <Union />
                </View>
              </View>
            );
          } else if (route.name === "ProfileScreen")
            return (
              <View style={styles.tabRightBox}>
                <UserIcon />
              </View>
            );
        },
        tabBarStyle: {
          width: "100%",
          height: 83,
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          // paddingTop: 9,
          alignItems: "flex-start",
        },
        tabBarShowLabel: false,
      })}
      // tabBarOptions={{
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "gray",
      // }}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 83,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    bottom: 0,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
  },
  textbox: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 44,
  },
  button: {
    // marginLeft: 31,
    // marginRight: 31,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
  tabLeftBox: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  tabCenterBox: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabRightBox: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
});
