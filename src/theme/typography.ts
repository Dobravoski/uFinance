export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },

  lineHeights: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  },

  fontFamilies: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  }
};

export const textVariants = {
  heading: {
    fontSize: typography.sizes.xxl,
    fontFamily: typography.fontFamilies.bold,
  },

  title: {
    fontSize: typography.sizes.xl,
    fontFamily: typography.fontFamilies.semibold,
  },

  body: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fontFamilies.regular,
  },

  caption: {
    fontSize: typography.sizes.sm,
    fontFamily: typography.fontFamilies.regular,
  },

  label: {
    fontSize: typography.sizes.sm,
    fontFamily: typography.fontFamilies.medium,
  },

  labelSmall: {
    fontSize: typography.sizes.xs,
    fontFamily: typography.fontFamilies.medium,
  },
} as const;

export type TextVariant = keyof typeof textVariants;