import { SelectableValue } from '@grafana/data';

export interface SimpleOptions {
  text: string;
  url: string;
  key: string;
  method?: SelectableValue;
  type?: SelectableValue;
  variant?: SelectableValue;
}

export const defaults: SimpleOptions = {
  key: 'API Key',
  text: 'The default button label',
  url: 'http://www.example.com',
  method: undefined,
  type: undefined,
  variant: undefined,
};

export type PanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
  resetInterval: number | undefined;
};
