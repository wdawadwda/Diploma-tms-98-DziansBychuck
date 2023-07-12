import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type Mode, type ThemeState } from './theme.type';

const getInitialState = (): ThemeState => ({
  mode: 'light',
  isDark: false,
  isLight: true
});

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: getInitialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
      state.isDark = action.payload === 'dark';
      state.isLight = action.payload === 'light';
    }
  }
});

export const { actions: themeActions } = ThemeSlice;
