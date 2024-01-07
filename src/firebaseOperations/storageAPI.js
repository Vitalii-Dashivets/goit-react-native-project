import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../config";

export const uploadFileToStorage = async ({ collection, name, file }) => {
  if (file === "https://reactjs.org/logo-og.png") {
    return;
  }
  try {
    const metadata = {
      contentType: "image/jpeg",
    };

    const imageRef = ref(storage, `${collection}/${name}.jpeg`);

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", file, true);
      xhr.send(null);
    });
    await uploadBytes(imageRef, blob, metadata).then((snapshot) => {
      //console.log("Uploaded a blob or file!");
    });
    blob.close();
    const url = await getDownloadURL(imageRef);

    return url;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
