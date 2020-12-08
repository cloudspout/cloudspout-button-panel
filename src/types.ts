import { ButtonVariant, IconName } from '@grafana/ui';

export type EditorCodeType = string | undefined;
export type EditorLanguageType = 'text' | 'html' | 'json' | undefined;

export interface ButtonPanelOptions {
  url: string;

  method?: string;
  type: string;
  contentType: string;
  payload?: string;

  isAuth: boolean;
  username?: string;
  password?: string;

  params: Array<[string, string]>;

  text: string;
  variant: ButtonVariant | 'custom';
  foregroundColor?: string;
  backgroundColor?: string;
  icon?: IconName;
  orientation: string;
}

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
};
