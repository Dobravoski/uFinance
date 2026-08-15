import { Pressable, View } from 'react-native';
import { AppText } from '../AppText';
import { FormField } from '../FormField';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { createStyles } from './styles';
import type { SegmentedControlProps } from './types';

export function SegmentedControl<TValue extends string>({label, value, options, onValueChange, error, containerStyle}: SegmentedControlProps<TValue>) {
  const styles = useThemedStyles(createStyles);

  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <View style={[styles.segmentedControl, error && styles.segmentedControlError]}>
        {options.map((option, index) => {
          const isSelected = option.value === value;
          const isLast = index === options.length - 1;

          return (
            <Pressable
              key={String(option.value)}
              style={({ pressed }) => [
                styles.option,
                !isLast && styles.optionBorder,
                isSelected && styles.selectedOption,
                pressed && !isSelected && styles.pressedOption,
              ]}
              onPress={() => onValueChange(option.value)}
            >
              <AppText variant="body" style={isSelected ? styles.selectedText : styles.text}>
                {option.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </FormField>
  );
}
