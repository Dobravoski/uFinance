import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import type { ScreenContainerProps } from "./types";
import {styles} from "./styles";

export function ScreenContainer({children, contentContainerStyle}: ScreenContainerProps) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={[styles.content, contentContainerStyle]} keyboardShouldPersistTaps="handled">
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}