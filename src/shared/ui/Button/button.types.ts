export const ButtonAppearance = {
  Primary: 'primary',
  Secondary: 'secondary',
  Secondary2: 'secondary2'
} as const;

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];
