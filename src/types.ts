import { SelectableValue } from '@grafana/data';
import { ButtonVariant } from '@grafana/ui/components/Button/types';

export interface ButtonPanelOptions {
  text: string;
  url: string;
  key: string;
  method?: SelectableValue<string>;
  type?: SelectableValue<string>;
  variant?: SelectableValue<ButtonVariant>;
}

export const defaults: ButtonPanelOptions = {
  key: 'API Key',
  text: 'The default button label',
  url: 'http://www.example.com',
  method: undefined,
  type: undefined,
  variant: undefined,
};

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
  resetInterval: number | undefined;
};
