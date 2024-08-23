import { initializeApp } from "firebase/app";
import { CategoryType, ItemType } from "@/types/types";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  Auth,
  User,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  Firestore,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth: Auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db: Firestore = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: { title: string }[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<CategoryType[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryArray: CategoryType[] = querySnapshot.docs.map(
    (docSnapshot): CategoryType => ({
      id: docSnapshot.id,
      ...(docSnapshot.data() as Omit<CategoryType, "id">),
    })
  );

  return categoryArray;
};

export const getCategoryByTitle = async (title: string) => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef, where("title", "==", title));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No matching documents.");
    return null;
  }

  const doc = querySnapshot.docs[0];
  const data = doc.data();

  return {
    id: doc.id,
    title: data.title,
    items: data.items || [],
  };
};

export const createUserDocumentFromAuth = async (
  userAuth: User | null,
  additionalInformation: Record<string, any> = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapShot;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const auth = getAuth();

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
