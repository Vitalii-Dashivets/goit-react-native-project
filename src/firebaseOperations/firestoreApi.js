import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config";

export const writeDataToFirestore = async (data, collect) => {
  try {
    const docRef = await addDoc(collection(db, `${collect}`), data);
    //console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error(error.message);
  }
};

export const getDataFromFirestore = async (collect) => {
  try {
    const q = query(collection(db, `${collect}`), orderBy("timeStamp", "desc"));
    const snapshot = await getDocs(q);

    // Перевіряємо у консолі отримані дані

    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
      //console.log(`${doc.id} =>`, doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
export const getDataByOwnerFromFirestore = async (collect, owner) => {
  try {
    const q = query(collection(db, `${collect}`), where("owner", "==", owner));
    const snapshot = await getDocs(q);
    // Перевіряємо у консолі отримані дані

    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
      //console.log(`${doc.id} =>`, doc.data());
    });
    const res = data.sort((a, b) => b.data.timeStamp - a.data.timeStamp);

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
export const getCommentsByPostId = async (postId) => {
  // console.log("props :>> ", postId);
  const postRef = doc(db, "posts", postId);
  try {
    const docSnap = await getDoc(postRef);
    return docSnap.data().comments;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateDataInFirestore = async (collectionName, docId, data) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, data);
    console.log("document updated");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserFromFirestore = async (collect, owner) => {
  try {
    const q = query(collection(db, `${collect}`), where("owner", "==", owner));
    const snapshot = await getDocs(q);
    // Перевіряємо у консолі отримані дані

    let data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
      //console.log(`${doc.id} =>`, doc.data());
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
