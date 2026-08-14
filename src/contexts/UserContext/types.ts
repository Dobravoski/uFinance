import type { User } from "@/domains/user";

export interface UserContextData {
  user: User | null;
  isInitializing: boolean;
  updateUser: (data: Partial<Omit<User, "id">>) => Promise<void>;
  updateUserPhoto: (imageUri: string) => Promise<void>;
}