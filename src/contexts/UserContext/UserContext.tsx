import { createContext, useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { useAuth } from "@/hooks/useAuth";
import { User, UserService, UserRepository } from "@/domains/user";
import type { UserContextData } from "./types";
import { StorageService } from "@/services/storage";

const userRepository = new UserRepository();
const storageService = new StorageService();
const userService = new UserService(userRepository, storageService);

export const UserContext = createContext<UserContextData | null>(null);

export function UserProvider({ children }: PropsWithChildren) {
  const { user: authUser } = useAuth();

  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const loadUser = useCallback(async () => {
    if (!authUser) {
      setUser(null);
      setIsInitializing(false);
      return;
    }

    setIsInitializing(true);

    try {
      const user = await userService.getById(authUser.id);
      setUser(user);
    } catch (error) {
      console.error("Failed to load user profile", error);
      setUser(null);
    } finally {
      setIsInitializing(false);
    }
  }, [authUser]);

  const updateUser = useCallback(
    async (data: Partial<Omit<User, "id">>) => {
      if (!authUser) {
        throw new Error("User not authenticated.");
      }

      const updatedUser = await userService.update(authUser.id, data);
      setUser(updatedUser);
    }, [authUser]
  );

  useEffect(() => {
    void loadUser();
  }, [loadUser]);

  const updateUserPhoto = useCallback(
    async (imageUri: string) => {
      if (!authUser) {
        throw new Error("User not authenticated.");
      }

      const updatedUser = await userService.updateProfilePhoto(authUser.id, imageUri);
      setUser(updatedUser);
    }, [authUser]
  );

  const value = useMemo(() => ({user, isInitializing, updateUser, updateUserPhoto}), [user, isInitializing, updateUser, updateUserPhoto]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}