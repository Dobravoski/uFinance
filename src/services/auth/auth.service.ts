import { signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth"
import { FirebaseError } from "firebase/app";
import { auth } from "@/services/firebase"
import { AuthUser } from "@/types/auth"
import { errorMessages } from "./errorMessages";
import { AppError } from "@/utils/AppError";

export async function signIn(email: string, password: string): Promise<AuthUser> {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)

        return {
            id: result.user.uid,
            email: result.user.email ?? ""
        };
    } catch (error) {
        if (error instanceof FirebaseError) {
            const message = errorMessages[error.code] ?? "Ocorreu um erro inesperado. Tente novamente.";
            throw new AppError(message);
        }
        
        throw error;
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