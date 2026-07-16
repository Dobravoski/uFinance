import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { env } from "@/config/env"

const firebaseConfig = {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    projectId: env.firebase.projectId,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId: env.firebase.messagingSenderId,
    appId: env.firebase.appId,
};

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);