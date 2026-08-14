import type { User } from "../domain";
import { UserRepository } from "../repositories";
import { StorageService } from "@/services/storage";

export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly storageService: StorageService,
  ) {}

  create(data: User): Promise<User> {
    return this.repository.create(data);
  }

  getById(userId: string): Promise<User | null> {
    return this.repository.getById(userId);
  }

  update(userId: string, data: Partial<Omit<User, "id">>): Promise<User> {
    return this.repository.update(userId, data);
  }

  async updateProfilePhoto(userId: string, imageUri: string): Promise<User> {
    const photoURL = await this.storageService.uploadProfilePhoto(userId, imageUri);
    return this.repository.update(userId, { photoURL });
  }
}