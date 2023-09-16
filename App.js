import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import "react-native-gesture-handler";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import MapScreen from "./src/Screens/MapScreen/MapScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logout from "./src/Img/log-out.svg";
import TabBarAdd from "./src/Screens/Components/TabBarAdd";

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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
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
            component={TabBarAdd}
            options={() => ({
              headerShown: false,
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
              headerLeft: () => {},
              headerRight: () => <Logout title="Press me" color="#fff" />,
            })}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
