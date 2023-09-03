import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import BackImage from "./src/Img/img1.png";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <PostsScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
