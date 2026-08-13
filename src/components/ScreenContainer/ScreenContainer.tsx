import { SafeAreaView } from "react-native-safe-area-context";
import {KeyboardAvoidingView, ScrollView, Platform, View } from "react-native";

import type { ScreenContainerProps } from "./types";
import { styles } from "./styles";

export function ScreenContainer({children, contentContainerStyle, scrollable = true, edges}: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={edges}>
      <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {scrollable ? (
          <ScrollView contentContainerStyle={[styles.content, contentContainerStyle]} keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        ) : (
          <View
            style={[styles.content, styles.nonScrollableContent, contentContainerStyle]}>
            {children}
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}