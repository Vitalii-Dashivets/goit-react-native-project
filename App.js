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
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { CreatePostsScreen } from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "./src/Screens/CommentsScreen/CommentsScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen/ProfileScreen";
import { Home } from "./src/Screens/Home/Home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            // options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            // options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            // options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            // options={{ headerShown: false }}
          />
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
