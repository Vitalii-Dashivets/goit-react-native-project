import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../config";

export const uploadFileToStorage = async ({ collection, name, file }) => {
  try {
    const metadata = {
      contentType: "image/jpeg",
    };
    const imageRef = ref(storage, `${collection}/${name}.jpeg`);

    await uploadBytes(imageRef, file, metadata).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    const url = getDownloadURL(imageRef);
    return url;
  } catch (err) {
    throw new Error(err.message);
  }
};
