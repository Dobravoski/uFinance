import { useState } from "react";
import { Pressable } from "react-native";
import DateTimePicker , { type DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { AppText } from "../AppText";
import { FormField } from "../FormField";
import { useTheme } from "@/hooks/useTheme";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { AppDatePickerProps } from "./types";

export function AppDatePicker({label, value, onChange, error, containerStyle, placeholder = "Selecione uma data"}: AppDatePickerProps) {
  const { scheme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const [showPicker, setShowPicker] = useState(false);
  const currentValue = value ?? new Date();

  function handleChange(_: DateTimePickerEvent, selectedDate?: Date) {
    setShowPicker(false);

    if (selectedDate) {
      onChange(selectedDate);
    }
  }

  const formatDate = (date: Date) => date.toLocaleDateString("pt-BR");

  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <Pressable style={[styles.inputContainer, error && styles.inputContainerError]} onPress={() => setShowPicker(true)}>
        <AppText style={value ? styles.text : styles.placeholder}>
          {value ? formatDate(value): placeholder}
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
