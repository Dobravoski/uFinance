import { createContext, useState, useEffect, ReactNode } from "react";
import { AuthContextData, AuthUser } from "@/types/auth";
import { signIn as signInService, signOut as signOutService, subscribeToAuthChanges} from "@/services/auth"

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [isInitializing, setIsInitializing] = useState(true);

    async function signIn(email: string, password: string) {
        await signInService(email, password);
    }

    async function signOut() {
        await signOutService();
    }

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges((user) => {
            setUser(user);
            setIsInitializing(false);
        });
        return unsubscribe
    }, [])

    const value: AuthContextData = {user, isInitializing, signIn, signOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}