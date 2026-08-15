import { useState } from "react";
import { Pressable } from "react-native";
import DateTimePicker , { type DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useTranslation } from "react-i18next";
import { AppText } from "../AppText";
import { FormField } from "../FormField";
import { useTheme, useThemedStyles, useLanguage } from "@/hooks";
import { createStyles } from "./styles";
import type { AppDatePickerProps } from "./types";

export function AppDatePicker({label, value, onChange, error, containerStyle, placeholder}: AppDatePickerProps) {
  const { scheme } = useTheme();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const styles = useThemedStyles(createStyles);
  const [showPicker, setShowPicker] = useState(false);
  const currentValue = value ?? new Date();
  const resolvedPlaceholder = placeholder ?? t("common.selectDatePlaceholder");

  function handleChange(_: DateTimePickerEvent, selectedDate?: Date) {
    setShowPicker(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
  }

  const formatDate = (date: Date) => date.toLocaleDateString(locale);

  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <Pressable style={[styles.inputContainer, error && styles.inputContainerError]} onPress={() => setShowPicker(true)}>
        <AppText style={value ? styles.text : styles.placeholder}>
          {value ? formatDate(value): resolvedPlaceholder}
        </AppText>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={currentValue}
          mode="date"
          display="default"
          themeVariant={scheme}
          onChange={handleChange}
        />
      )}
    </FormField>
  );
}
