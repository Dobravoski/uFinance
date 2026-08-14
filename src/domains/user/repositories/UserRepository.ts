import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { User } from "../domain";
import { UserFirestore } from "./types";

export class UserRepository {
  private userDocument(userId: string) {
    return doc(db, "users", userId);
  }

  private fromFirestore(id: string, data: UserFirestore): User {
    return {
      id,
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
    };
  }

  async create(data: User): Promise<User> {
    const { id, ...userData } = data;
    await setDoc(this.userDocument(id), userData);
    return data;
  }

  async getById(userId: string): Promise<User | null> {
    const snapshot = await getDoc(this.userDocument(userId));

    if (!snapshot.exists()) {
      return null;
    }

    return this.fromFirestore(snapshot.id, snapshot.data() as UserFirestore);
  }

  async update(userId: string, data: Partial<Omit<User, "id">>): Promise<User> {
    const docRef = this.userDocument(userId);
    await updateDoc(docRef, data);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error("User not found after update");
    }

    return this.fromFirestore(snapshot.id, snapshot.data() as UserFirestore);
  }
}