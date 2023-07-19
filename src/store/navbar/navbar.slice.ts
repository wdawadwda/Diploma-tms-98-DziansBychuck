import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type SetBodyOverflowPayload, type NavbarState } from './navbar.type';

const getInitialState = (): NavbarState => ({
  isShowAside: false,
  bodyOverflow: 'auto'
});

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: getInitialState(),
  reducers: {
    toggleAside: (state) => {
      state.isShowAside = !state.isShowAside;
    },
    setBodyOverflow: (state, action: PayloadAction<SetBodyOverflowPayload>) => {
      state.bodyOverflow = action.payload.bodyOverflow;
    }
  }
});

export const { actions: navbarActions } = navbarSlice;
