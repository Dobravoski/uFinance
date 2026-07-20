export const logoSizes = {
    sm: 56,
    md: 72,
    lg: 96,
    xl: 128,
} as const;

export type AppLogoSize = keyof typeof logoSizes;