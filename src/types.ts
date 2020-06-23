import { SelectableValue } from '@grafana/data';
import { ButtonVariant } from '@grafana/ui';

export interface ButtonPanelOptions {
  text: string;
  url: string;
  key: string;
  method?: SelectableValue<string>;
  type?: SelectableValue<string>;
  variant?: SelectableValue<ButtonVariant>;
}

export const defaults: ButtonPanelOptions = {
  key: 'abc1234',
  text: 'The default button label',
  url: 'http://api.example.com/',
  method: undefined,
  type: undefined,
  variant: undefined,
};

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
};
