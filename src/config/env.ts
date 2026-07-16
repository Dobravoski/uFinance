interface Env {
    firebase: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
}

function getEnvVariable(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }

    return value;
}

export const env: Env = {
    firebase: {
        apiKey: getEnvVariable("EXPO_PUBLIC_FIREBASE_API_KEY"),
        authDomain: getEnvVariable("EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN"),
        projectId: getEnvVariable("EXPO_PUBLIC_FIREBASE_PROJECT_ID"),
        storageBucket: getEnvVariable("EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET"),
        messagingSenderId: getEnvVariable("EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
        appId: getEnvVariable("EXPO_PUBLIC_FIREBASE_APP_ID"),
    },
};