export interface SetBodyOverflowPayload {
  bodyOverflow: 'auto' | 'hidden';
}

export type NavbarState = {
  isShowAside: boolean;
  bodyOverflow: SetBodyOverflowPayload['bodyOverflow'];
};
