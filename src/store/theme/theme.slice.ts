import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type Mode, type ThemeState } from './theme.type';

const getInitialState = (): ThemeState => ({
  mode: 'light',
  isDark: false,
  isLight: true
});

export const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialState(),
  reducers: {
    changeTheme: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
      state.isDark = action.payload === 'dark';
      state.isLight = action.payload === 'light';
      localStorage.setItem('themeMode', action.payload);
    },
    setThemeFromLocalStorage: (state) => {
      const themeMode = localStorage.getItem('themeMode');
      if (themeMode === 'dark') {
        state.mode = 'dark';
        state.isDark = true;
        state.isLight = false;
      } else {
        state.mode = 'light';
        state.isDark = false;
        state.isLight = true;
      }
    }
  }
});

export const { actions: themeActions } = themeSlice;
