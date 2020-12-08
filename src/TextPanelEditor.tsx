import React, { PureComponent } from 'react';
import { config } from '@grafana/runtime';
import MonacoEditor, { monaco, EditorDidMount } from '@monaco-editor/react';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { EditorLanguageType } from 'types';

interface MonacoEditorProps {
  language: EditorLanguageType;
  value: string | undefined;
  onChange: (value?: string) => void;
}

monaco.config({
  paths: {
    vs: '/public/plugins/cloudspout-button-panel/lib/vs',
  },
});

class TextPanelEditor extends PureComponent<MonacoEditorProps> {
  getEditorValue: (() => string) | undefined;
  editorInstance: editor.IStandaloneCodeEditor | undefined;

  onSourceChange = () => {
    if (this.getEditorValue) {
      this.props.onChange(this.getEditorValue());
    }
  };

  onEditorDidMount: EditorDidMount = (getEditorValue, editorInstance) => {
    this.getEditorValue = getEditorValue;
    this.editorInstance = editorInstance;
  };

  updateDimensions = () => {
    this.editorInstance?.layout();
  };

  render = () => {
    if (this.editorInstance) {
      this.editorInstance.layout();
    }

    return (
      <div onBlur={this.onSourceChange}>
        <MonacoEditor
          height={'10vh'}
          language={this.props.language}
          theme={config.theme.isDark ? 'vs-dark' : 'vs-light'}
          value={this.props.value}
          editorDidMount={this.onEditorDidMount}
          options={{ fontSize: 12 }}
        />
      </div>
    );
  };
}

export { TextPanelEditor };