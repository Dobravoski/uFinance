import { StyleSheet } from 'react-native';
import { colors, metrics, radius, spacing } from '@/theme';

export const styles = StyleSheet.create({
  segmentedControl: {
    flexDirection: 'row',

    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,
    borderRadius: radius.md,

    overflow: 'hidden',

    backgroundColor: colors.surface,
  },

  segmentedControlError: {
    borderColor: colors.danger,
  },

  option: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: spacing.md,
  },

  optionBorder: {
    borderRightWidth: metrics.strokeWidth,
    borderRightColor: colors.border,
  },

  selectedOption: {
    backgroundColor: colors.primary,
  },

  pressedOption: {
    opacity: metrics.pressedOpacityStrong,
  },

  text: {
    color: colors.text,
  },

  selectedText: {
    color: colors.surface,
  },
});
