import RNPickerSelect from "react-native-picker-select";
import { ChevronDown } from "lucide-react-native";
import { View } from "react-native";
import { FormField } from "../FormField";
import { colors } from "@/theme";
import { pickerStyles, styles } from "./styles";
import type { AppSelectProps } from "./types";

export function AppSelect<TValue extends string>({label, value, options, onValueChange, placeholder, error, containerStyle}: AppSelectProps<TValue>) {
  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        <RNPickerSelect
          value={value}
          items={[...options]}
          useNativeAndroidPickerStyle={false}
          onValueChange={(selectedValue) => {
            if (selectedValue !== null) {
              onValueChange(selectedValue as TValue);
            }
          }}
          placeholder={placeholder ? { label: placeholder, value: null } : undefined}
          Icon={() => (<ChevronDown size={20} color={colors.textSecondary}/>)}
          style={pickerStyles}
        />
      </View>
    </FormField>
  );
}
