import { env } from "@/config/env";

interface ImageKitAuthResponse {
  token: string;
  expire: number;
  signature: string;
}

interface ImageKitUploadResponse {
  url: string;
  fileId: string;
  name: string;
}

export class StorageService {
  async uploadProfilePhoto(userId: string, imageUri: string): Promise<string> {
    const authResponse = await fetch(env.imageKit.authenticationEndpoint);

    if (!authResponse.ok) {
      throw new Error(`ImageKit authentication failed (${authResponse.status})`);
    }

    const { token, expire, signature } = (await authResponse.json()) as ImageKitAuthResponse;

    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      name: `profile-${userId}.jpg`,
      type: "image/jpeg",
    } as any);

    formData.append("fileName", `profile-${userId}.jpg`);
    formData.append("publicKey", env.imageKit.publicKey);
    formData.append("signature", signature);
    formData.append("expire", String(expire));
    formData.append("token", token);
    formData.append("folder", `/users/${userId}`);
    formData.append("useUniqueFileName", "false");

    const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {method: "POST", body: formData});

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ImageKit upload failed (${response.status}): ${errorText}`);
    }

    const data = (await response.json()) as ImageKitUploadResponse;
    return data.url;
  }
}