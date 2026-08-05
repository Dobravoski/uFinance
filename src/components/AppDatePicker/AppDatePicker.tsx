import { useState } from "react";
import { Pressable } from "react-native";
import DateTimePicker , { type DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { AppText } from "../AppText";
import { FormField } from "../FormField";
import { styles } from "./styles";
import type { AppDatePickerProps } from "./types";

export function AppDatePicker({label, value, onChange, error, containerStyle, placeholder = "Selecione uma data"}: AppDatePickerProps) {
  const [showPicker, setShowPicker] = useState(false);

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
          value={value}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </FormField>
  );
}