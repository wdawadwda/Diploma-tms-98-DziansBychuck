import { createSlice } from '@reduxjs/toolkit';

import { type NavbarState } from './navbar.type';

const getInitialState = (): NavbarState => ({
  isShowAside: false
});

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: getInitialState(),
  reducers: {
    toggleAside: (state) => {
      state.isShowAside = !state.isShowAside;
    }
  }
});

export const { actions: navbarActions } = navbarSlice;
