import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import "react-native-gesture-handler";
import BackImage from "./src/Img/img1.png";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "./src/Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import Home from "./src/Screens/Home/Home";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Logout from "./src/Img/log-out.svg";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}>
        <ImageBackground
          source={BackImage}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        > */}
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={
            {
              // headerShown: false,
            }
          }
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            // options={{ headerShown: false }}
            options={({ navigation }) => ({
              title: "Публікації",
              headerStyle: {
                backgroundColor: "white",
                height: 83,
                // justifyContent: "center",
                // alignItems: "center",

                borderBottomWidth: 1,
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontSize: 17,
                fontFamily: "Roboto-500",
                alignItems: "center",
              },
              headerLeft: () => {},
              headerRight: () => <Logout title="Press me" color="#fff" />,
            })}
          />
          {/* <MainStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            // options={{ headerShown: false }}
          /> */}
          {/* <MainStack.Screen
            name="PostsScreen"
            component={PostsScreen}
            // options={{ headerShown: false }}
            options={{
              title: "Публікації",
              headerStyle: {
                backgroundColor: "#f4511e",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "rgba(0,0,0,0.3)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontSize: 17,
                fontFamily: "Roboto-500",
                marginLeft: 200,
                justifyContent: "center",
                alignItems: "center",
              },
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Press me"
                  color="#fff"
                />
              ),
            }}
          /> */}
          {/* <MainStack.Screen
            name="CreatePostsScreen"
            component={CreatePostsScreen}
            // options={{ headerShown: false }}
          /> */}
        </MainStack.Navigator>
      </NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen /> */}
      {/* <PostsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen></ProfileScreen> */}
      {/* <Home></Home> */}
      {/* </ImageBackground>
      </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
