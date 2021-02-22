import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { TextPanelEditor } from 'TextPanelEditor';
import { EditorLanguageType, EditorCodeType } from 'types';

import { ButtonPanelOptions } from './types';

interface Settings {
  language: (contentType: string | undefined) => EditorLanguageType | undefined;
}

interface Props extends StandardEditorProps<EditorCodeType, Settings, ButtonPanelOptions> {}

export const ButtonPayloadEditor: React.FC<Props> = ({ value, item, onChange, context }) => {
  return (
    <TextPanelEditor
      language={item.settings?.language(context.options?.contentType)}
      value={value}
      onChange={(code) => onChange(code)}
    />
  );
};
