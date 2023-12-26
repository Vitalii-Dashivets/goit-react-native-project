import { collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../config";

export const writeDataToFirestore = async ({
  owner,
  photoURL,
  title,
  location,
  locationArea,
}) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      owner,
      photoURL,
      title,
      location,
      locationArea,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error(err.message);
  }
};

export const getDataFromFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    // Перевіряємо у консолі отримані дані

    const posts = [];
    snapshot.forEach((doc) => {
      posts.push({ id: doc.id, data: doc.data() });
      console.log(`${doc.id} =>`, doc.data());
    });
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(err.message);
  }
};

export const updateDataInFirestore = async (collectionName, docId) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      age: 25,
    });
    console.log("document updated");
  } catch (error) {
    throw new Error(err.message);
  }
};
