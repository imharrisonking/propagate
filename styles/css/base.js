export const htmlFontSize = 16;

export const baselinePx = 20;

export const base = (multiplier = 1) => `${(baselinePx / htmlFontSize) * multiplier}rem`;
