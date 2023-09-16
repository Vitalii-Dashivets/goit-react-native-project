import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import GridIcon from "../../Img/grid.svg";
import UserIcon from "../../Img/user.svg";
import Union from "../../Img/Union2.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import ProfileNavStack from "./ProfileNavStack";
import Logout from "../../Img/log-out.svg";
import ArrowLeft from "../../Img/arrow-left.svg";

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
        tabBarVisible: false,
        tabBarShowLabel: false,
        headerStyle: {
          height: 88,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerStyle: {
            backgroundColor: "white",
            height: 83,
            borderBottomWidth: 1,
          },
          headerRightContainerStyle: { right: 10 },
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-500",
            alignItems: "center",
          },

          headerRight: () => <Logout title="Press me" color="#fff" />,
          tabBarIcon: ({ color, size }) => <GridIcon />,
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
          headerStyle: {
            backgroundColor: "white",
            height: 83,
            borderBottomWidth: 1,
          },
          headerLeftContainerStyle: { left: 16 },
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-500",
            alignItems: "center",
          },
          tabBarStyle: { display: "none" },
          headerLeft: () => <ArrowLeft title="Press me" color="#fff" />,

          tabBarIcon: ({ color, size }) => (
            <View style={styles.button}>
              <Union />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileNavStack"
        component={ProfileNavStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <UserIcon />,
        }}
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
