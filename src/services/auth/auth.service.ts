import { signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "@/services/firebase"
import { AuthUser } from "@/types/auth"

export async function signIn(email: string, password: string): Promise<AuthUser> {
    const result = await signInWithEmailAndPassword(auth, email, password)

    return {
        id: result.user.uid,
        email: result.user.email ?? ""
    };
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