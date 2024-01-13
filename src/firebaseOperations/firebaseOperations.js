import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../config.js";

export const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

export const registerDB = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const payload = {
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
    };
    return payload;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

export const loginDB = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  return;
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
    return;
  } catch (err) {
    throw new Error(err.message);
  }
};
