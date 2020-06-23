import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

// Types for typescript to be happy
type UserCredential = firebase.auth.UserCredential;

export type FirebaseDocumentData = firebase.firestore.DocumentData;
export type FirebaseDocumentReference<
  FirebaseDocumentData
> = firebase.firestore.DocumentReference<FirebaseDocumentData>;
export type FirebaseQuerySnapshot = firebase.firestore.QuerySnapshot;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get auth for change in authentication listener
export const authService = firebase.auth();

// Get firestore db
export const firestore = firebase.firestore();

// Create google provider and login popup
const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (): Promise<UserCredential> =>
  authService.signInWithPopup(provider);

// Get firebase user (Probably not going to be needed but just in case)
export function getFirebaseUser(): null | firebase.User {
  const [authUser, setAuthUser] = useState<null | firebase.User>(null);
  useEffect(() => {
    const unlisten = authService.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  });
  return authUser;
}

//
export const createUserProfileDoc = async (
  user: firebase.User,
  additionalData?: Record<string, unknown>
): Promise<FirebaseDocumentReference<FirebaseDocumentData> | undefined> => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (snapshot.exists) {
    return userRef;
  }

  try {
    const { displayName, email } = user;
    await userRef.set({
      displayName,
      email,
      createdAt: new Date(),
      ...additionalData,
    });
  } catch (error) {
    console.log('Error creating user', error.message);
  }

  return userRef;
};

export const firestoreGet = async (
  collection: string
): Promise<
  firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]
> => {
  return await (await firestore.collection(collection).get()).docs;
};

// export const firestoreInsert = async (collection: string, doc: Record<string, unknown>): Promise<Record<string, unknown> | undefined> => {
//   if (!collection || !doc) {
//     return;
//   }

//   const ref = firestore.collection(collection).doc(`${doc.id}`);
//   const snapshot = await ref.get();
//   if (snapshot.exists) {
//     return {...snapshot.data(), existed: true};
//   }

//   try {
//     const newRef = await firestore.collection(collection).add({
//       ...doc,
//       createdAt: new Date()
//     });
//     const snapshot = await newRef.get();
//     return {...snapshot.data(), existed: false};
//   } catch (error) {
//     console.log('Error creating user', error.message);
//   }

//   return;
// };

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ): Promise<void> => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

// export const convertCollectionsSnapshotToMap = (
//   collections: firebase.firestore.QuerySnapshot<FirebaseDocumentData>
// ): Record<string, unknown> => {
//   const transformedCollection = collections.docs.map((doc) => {
//     const { title, items } = doc.data();

//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//     };
//   });

//   return transformedCollection.reduce((accumulator: Record<string,, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
// };
