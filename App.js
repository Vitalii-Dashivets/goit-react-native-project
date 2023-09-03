import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import BackImage from "./src/Img/img1.png";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { useFonts } from "expo-font";

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
    <View style={styles.container}>
      <ImageBackground
        source={BackImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <LoginScreen />
        {/* <RegistrationScreen /> */}
        {/* <PostsScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
