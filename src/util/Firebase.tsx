import firebase from "firebase/compat/app";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBpQx2iQSi__7D-HV8pHgEzrgUr7Cc-U4Y",
  authDomain: "swen3252021a3.firebaseapp.com",
  projectId: "swen3252021a3",
  storageBucket: "swen3252021a3.appspot.com",
  messagingSenderId: "458304910670",
  appId: "1:458304910670:web:94bfc464325278eb6e1a1f",
  measurementId: "G-PSDTF0TMR2"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

console.log(process.env);
const db = firebase
  .initializeApp({
    projectId: "swen3252021a3",
    storageBucket: "swen3252021a3.appspot.com",
  })
  .firestore();

const photoCollection = db.collection("photos");

const Firebase = () => {
  /**
   *
   * @param collection returns data for specified collections
   */
  const getCollectionData = async (collection: any) => {
    const querySnapshot = await collection.get();
    const results = querySnapshot.docs.map((doc: any) => {
      return { ...doc.data(), id: doc.id };
    });
    return results;
  };

  /**
   * get document from firebase and not local photos
   *
   * @param collection
   * @param id
   */
  const getCollectionDoc = async (collection: any, id: string) => {
    const doc = await collection.doc(id).get();
    return { ...doc.data(), id: doc.id };
  };

  /**
   * delete document from firebase collection
   *
   * @param collection
   * @param id
   */
  const removeCollectionDoc = async (collection: any, id: string) => {
    await collection.doc(id).delete();
    return true;
  };

  /**
   *
   * @param collection
   * @param data
   */
  const writeCollectionDoc = async (collection: any, data: any) => {
    await collection.doc().set({ ...data }, { merge: true });
    return true;
  };

  const uploadFile = (data: any, progress: any) => {
    return new Promise<Error | any>((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef
        .child(`images/${data.fileName}`)
        .put(data.blob, {
          contentType: data.blob.type,
        });

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
        next: (snapshot) => {
          //progress.value = snapshot.bytesTransferred / snapshot.totalBytes;
          progress && progress(snapshot);
        },
        error: (error: firebase.storage.FirebaseStorageError) => {
          reject(error);
        },
        complete: async () => {
          const url = await uploadTask.snapshot.ref.getDownloadURL();
          const {
            fullPath,
            name,
            size,
            timeCreated,
          } = await uploadTask.snapshot.ref.getMetadata();
          resolve({
            fullPath,
            name,
            size,
            timeCreated,
            url,
          });
        },
      });
    });
  };

  /**
   *
   * @param data
   */
  const savePhoto = async (data: any, progress: any) => {
    try {
      // save to file storage
      const uploadData = await uploadFile(data, progress);
      // write collection
      await writeCollectionDoc(photoCollection, {
        fileName: data.fileName,
        uploadData,
      });
      return uploadData;
    } catch (e) {
      throw e;
    }
  };

  /**
   *
   * @param id
   * @param path
   */
  const deletePhoto = async (id: string, path: string) => {
    // Create a reference to the file to delete
    const storageRef = firebase.storage().ref();

    // Delete the file
    await storageRef.child(path).delete();
    // Delete the doc from collection
    return await removeCollectionDoc(photoCollection, id);
  };

  return {
    // functions
    deletePhoto,
    savePhoto,
    loadPhoto: async (id: string) => {
      console.log("firebase loadPhoto");
      return await getCollectionDoc(photoCollection, id);
    },
    loadPhotos: async () => {
      console.log("firebase loadPhotos");
      return await getCollectionData(photoCollection);
    },
  };
};

export default Firebase();