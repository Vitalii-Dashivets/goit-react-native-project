import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import * as React from "react";
import { ContentBox } from "./ContentBox";
import ArrowLeft from "../../Img/arrow-left.svg";

const CreatePostsScreen = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ArrowLeft onPress={() => navigation.navigate("PostsScreen")} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <ContentBox></ContentBox>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    width: "100%",
  },
  scrollContainer: {
    height: "100%",
  },
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
export default CreatePostsScreen;
