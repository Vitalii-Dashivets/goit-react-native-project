import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../config";
// import dataURLtoBlob from "dataurl-to-blob";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";

export const uploadFileToStorage = async ({ collection, name, file }) => {
  try {
    const metadata = {
      contentType: "image/jpg",
    };
    console.log("FILE", file);
    const imageRef = ref(storage, `${collection}/${name}.jpg`);

    // await fetch(file)
    //   .then((res) => res.blob())
    //   .then((response) => {
    //     newFile = response;
    //   });
    const newFile = await FileSystem.readAsStringAsync(file, {
      EncodingType: "base64",
    });
    const buffer = Buffer.from(newFile, "base64");
    const blob = new Blob([buffer], { type: "[image/jpg]" });

    await uploadBytes(imageRef, blob, metadata).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    const url = getDownloadURL(imageRef);
    return url;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};
