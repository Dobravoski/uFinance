export interface AuthUser {
  id: string;
  email: string;
}

export interface AuthContextData {
  user: AuthUser | null;
  isInitializing: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp(email: string, password: string): Promise<AuthUser>;
  signOut: () => Promise<void>;
}