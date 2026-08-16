import { signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth"
import { FirebaseError } from "firebase/app";
import { auth } from "@/services/firebase"
import { AuthUser } from "@/types/auth"
import { errorMessages } from "./errorMessages";
import { AppError } from "@/utils/AppError";
import i18n from "@/config/i18n";

function handleFirebaseError(error: unknown): never {
    if (error instanceof FirebaseError) {
        const key = errorMessages[error.code] ?? "common.errors.unexpected";
        throw new AppError(i18n.t(key));
    }

    throw error;
}

export async function signIn(email: string, password: string): Promise<AuthUser> {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)

        return {
            id: result.user.uid,
            email: result.user.email ?? ""
        };
    } catch (error) {
        handleFirebaseError(error);
    }
}

export async function signUp(email: string, password: string): Promise<AuthUser> {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return {
            id: result.user.uid,
            email: result.user.email ?? "",
        }
    } catch (error) {
        handleFirebaseError(error);
    }
}

export async function signOut() {
    await firebaseSignOut(auth);
}

export function subscribeToAuthChanges(callback: (user: AuthUser | null) => void) {
    return onAuthStateChanged(auth, (firebaseUser) => {
        if (!firebaseUser) {
            callback(null);
            return;
        }

        callback({
            id: firebaseUser.uid,
            email: firebaseUser.email ?? ""
        });
    });
}