import firebase from "firebase/app";
import "firebase/firestore"; //DB
import "firebase/auth";
const config = {
  apiKey: "AIzaSyD8uF9NhmjSjQjy35lk9gpkNM2cNBC5ys0",
  authDomain: "cara-sense-clothing.firebaseapp.com",
  databaseURL: "https://cara-sense-clothing.firebaseio.com",
  projectId: "cara-sense-clothing",
  storageBucket: "cara-sense-clothing.appspot.com",
  messagingSenderId: "522413661687",
  appId: "1:522413661687:web:363ddfd8f9be49c2c7e2f2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    //use userRef for CRUD, not snapshot
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};

/*
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);
    
    //transaction
    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
        console.log(newDocRef);
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}
*/

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      title: title,
      id: doc.id,
      items: items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection("carts").where("userId", "==", userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection("carts").doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
