import { type RootState } from '../store.types';

export const selectThemeMode = (state: RootState) => state.theme.mode;
export const selectIsDark = (state: RootState): boolean => state.theme.isDark;
export const selectIsLight = (state: RootState): boolean => state.theme.isLight;
