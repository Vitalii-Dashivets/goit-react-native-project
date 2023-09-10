import { Pressable, StyleSheet, Text, View } from "react-native";
import * as React from "react";

import GridIcon from "../../Img/grid.svg";
import UserIcon from "../../Img/user.svg";
import Union from "../../Img/Union2.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

const TabBarAdd = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarStyle: {
          width: "100%",
          height: 83,
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          paddingTop: 9,
          paddingBottom: 34,
          paddingLeft: 82,
          paddingRight: 81,
          alignItems: "flex-start",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ tabBarIcon: () => <GridIcon /> }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabCenterBox}>
              <View style={styles.button}>
                <Union />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ tabBarIcon: () => <UserIcon /> }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});

export default TabBarAdd;
