import { SelectableValue } from '@grafana/data';
import { ButtonVariant } from '@grafana/ui';

export interface ButtonPanelOptions {
  text: string;
  url: string;
  params: Array<[string, string]>;
  newParamName: string;
  newParamValue: string;

  method?: SelectableValue<string>;
  type?: SelectableValue<string>;
  variant?: SelectableValue<ButtonVariant>;
}

export const defaults: ButtonPanelOptions = {
  text: 'The default button label',
  url: 'http://api.example.com/',
  method: undefined,
  type: undefined,
  params: [],
  newParamName: '',
  newParamValue: '',
  variant: undefined,
};

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
};
