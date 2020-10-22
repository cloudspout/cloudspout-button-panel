import { ButtonVariant, IconName } from '@grafana/ui';
import { VariableType } from '@grafana/data';

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
  newParamName: string;
  newParamValue: string;

  variableParams: Array<[string, string]>;
  newVariableParamName: string;
  newVariableParamValue: string;

  text: string;
  variant: ButtonVariant | undefined;
  foregroundColor?: string;
  backgroundColor?: string;
  icon?: IconName;
  orientation: string;
}

export type ButtonPanelState = {
  api_call: 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
  response: string;
  variables: Array<{ label: string; text: string; value: string; type: VariableType }>;
};
