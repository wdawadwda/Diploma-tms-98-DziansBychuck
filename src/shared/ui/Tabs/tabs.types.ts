import { type FormState } from '~/pages/From/RegistrAuth/registrAuth.type';

export interface TabsProperties {
  activeTab: FormState;
  tabs: FormState[];
  handleTabClick: (tab: FormState) => void;
}
