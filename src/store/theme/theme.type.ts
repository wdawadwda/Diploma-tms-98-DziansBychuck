import { type Mode } from './theme.constants';

export type Mode = (typeof Mode)[keyof typeof Mode];

export type ThemeState = {
  mode: Mode;
  isDark: boolean;
  isLight: boolean;
};
