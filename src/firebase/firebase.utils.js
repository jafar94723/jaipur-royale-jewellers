import firebase from 'firebase/app';
import 'firebase/firestore';//DB
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyD8uF9NhmjSjQjy35lk9gpkNM2cNBC5ys0",
    authDomain: "cara-sense-clothing.firebaseapp.com",
    databaseURL: "https://cara-sense-clothing.firebaseio.com",
    projectId: "cara-sense-clothing",
    storageBucket: "cara-sense-clothing.appspot.com",
    messagingSenderId: "522413661687",
    appId: "1:522413661687:web:363ddfd8f9be49c2c7e2f2"
};

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        //use userRef for CRUD, not snapshot
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(e){
            console.log('error creating user',e.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;