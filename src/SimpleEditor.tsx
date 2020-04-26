import React, { PureComponent } from 'react';
import { FormField, Select } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from './types';
import { SelectableValue } from '@grafana/data';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, text: target.value });
  };
  onURLChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, url: target.value });
  };
  onKeyChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, key: target.value });
  };
  onMethodChanged = ({ label, value, target }: any) => {
    const x: SelectableValue<string> = {
      value: value,
    };
    this.props.onOptionsChange({ ...this.props.options, method: x });
  };
  onVariantChanged = ({ label, value, target }: any) => {
    const x: SelectableValue<string> = {
      value: value,
    };
    this.props.onOptionsChange({ ...this.props.options, variant: x });
  };
  onTypeChanged = ({ label, value, target }: any) => {
    const x: SelectableValue<string> = {
      value: value,
    };
    this.props.onOptionsChange({ ...this.props.options, type: x });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Settings</h5>

        <Select
          onChange={this.onMethodChanged}
          value={options.method}
          options={[
            { label: 'GET', value: 'GET' },
            { label: 'POST', value: 'POST' },
          ]}
        />

        <FormField label="URL" labelWidth={5} inputWidth={20} type="text" onChange={this.onURLChanged} value={options.url || ''} />

        <Select
          onChange={this.onTypeChanged}
          value={options.type}
          options={[
            { label: 'Header', value: 'HEADER' },
            { label: 'Query', value: 'QUERY' },
          ]}
        />
        <FormField label="API Key" labelWidth={5} inputWidth={20} type="text" onChange={this.onKeyChanged} value={options.key || ''} />

        <Select
          onChange={this.onVariantChanged}
          value={options.variant}
          options={[
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Destructive', value: 'destructive' },
            { label: 'Link', value: 'link' },
          ]}
        />
        <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
      </div>
    );
  }
}
