import { ButtonVariant } from '@grafana/ui';

export interface ButtonPanelOptions {
  url: string;

  method?: string;
  type: string;
  contentType: string;
  payload?: string

  isAuth: boolean;
  username?: string;
  password?: string;

  params: Array<[string, string]>;

  text: string;
  variant: ButtonVariant;
  orientation: string;
}
/*
export const defaults: ButtonPanelOptions = {
  text: 'The default button label',
  url: 'http://api.example.com/',
  isAuth: false,
  username: '',
  password: '',
  method: undefined,
  type: undefined,
  params: [],
  variant: undefined,
  orientation: 'center',
};*/

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
};
