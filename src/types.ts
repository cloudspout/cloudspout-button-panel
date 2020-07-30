import { SelectableValue } from '@grafana/data';
import { ButtonVariant } from '@grafana/ui';

export interface ButtonPanelOptions {
  text: string;
  url: string;

  params: Array<[string, string]>;
  newParamName: string;
  newParamValue: string;

  variableParams: Array<[string, string]>;
  newVariableParamName: string;
  newVariableParamValue: string;

  method?: SelectableValue<string>;
  type?: SelectableValue<string>;
  variant?: SelectableValue<ButtonVariant>;
  orientation: SelectableValue<string>;
}

export const defaults: ButtonPanelOptions = {
  text: 'The default button label',
  url: 'http://api.example.com/',
  method: undefined,
  type: undefined,
  params: [],
  newParamName: '',
  newParamValue: '',
  variableParams: [],
  newVariableParamName: '',
  newVariableParamValue: '',
  variant: undefined,
  orientation: { value: 'center', label: 'Center' },
};

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
  resolvedVariables: Array<{name:string, value:string}>;
};
