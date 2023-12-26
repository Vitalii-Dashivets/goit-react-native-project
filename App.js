import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Main } from "./src/Main/Main";
import "react-native-devsettings/withAsyncStorage";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
