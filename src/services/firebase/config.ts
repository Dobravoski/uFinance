import { initializeApp } from "firebase/app";
import { Auth, getAuth, initializeAuth  } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { env } from "@/config/env"
// @ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";


const firebaseConfig = {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    projectId: env.firebase.projectId,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId: env.firebase.messagingSenderId,
    appId: env.firebase.appId,
};

const app = initializeApp(firebaseConfig);

let auth: Auth;

try {
    auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
} catch {
    auth = getAuth(app);
}

export { auth };