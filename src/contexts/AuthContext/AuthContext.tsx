import { createContext, useState, useEffect } from "react";
import { signIn as signInService, signUp as signUpService, signOut as signOutService, subscribeToAuthChanges } from "@/services/auth";
import { UserRepository } from "@/domains/user/repositories";
import { UserService } from "@/domains/user/services";
import { AuthProviderProps } from "./types";
import { AuthContextData, AuthUser } from "@/types/auth";
import { StorageService } from "@/services/storage";

const userRepository = new UserRepository();
const storageService = new StorageService();
const userService = new UserService(userRepository, storageService);

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  async function signIn(email: string, password: string) {
    await signInService(email, password);
  }

  const signUp = async (name: string, email: string, password: string): Promise<AuthUser> => {
    const authUser = await signUpService(email, password);

    await userService.create({
      id: authUser.id,
      name,
      email: authUser.email,
    });

    return authUser;
  };

  async function signOut() {
    await signOutService();
  }

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setUser(user);
      setIsInitializing(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextData = { user, isInitializing, signIn, signUp, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}