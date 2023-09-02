import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Switch,
  TextInput,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 4, backgroundColor: "darkorange" }} />
      <View style={{ flex: 4, backgroundColor: "green" }} />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
