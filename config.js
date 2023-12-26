// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd95NlXSJyH0je8TG0FShGSb7HHdmE3cQ",
  authDomain: "my-react-native-2e80d.firebaseapp.com",
  databaseURL: "https://my-react-native-2e80d.firebaseio.com",
  projectId: "my-react-native-2e80d",
  storageBucket: "my-react-native-2e80d.appspot.com",
  messagingSenderId: "479356627632",
  appId: "1:479356627632:web:08b77dd4a9dab1d6892975",
  //measurementId: "G-7GX0QYZN2Y",
};

export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
