import React, { PureComponent } from 'react';
import { FormField, Select } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { ButtonPanelOptions } from './types';

export class ButtonPanelEditor extends PureComponent<PanelEditorProps<ButtonPanelOptions>> {
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
    this.props.onOptionsChange({
      ...this.props.options,
      method: {
        value,
        label,
      },
    });
  };
  onVariantChanged = ({ label, value, target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      variant: {
        value,
        label,
      },
    });
  };
  onTypeChanged = ({ label, value, target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      type: {
        value,
        label,
      },
    });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Settings</h5>

        <Select
          allowCustomValue
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
            { label: 'Header', value: 'HEADER', description: 'Send the API key as `X-API-Key` request HTTP header' },
            { label: 'Query', value: 'QUERY', description: 'Send the API key as `?api-key=...` query parameter' },
          ]}
        />
        <FormField label="API Key" labelWidth={5} inputWidth={20} type="text" onChange={this.onKeyChanged} value={options.key || ''} />

        <Select
          onChange={this.onVariantChanged}
          value={options.variant}
          options={[
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Danger', value: 'danger' },
            { label: 'Inverse', value: 'inverse' },
            { label: 'Transparent', value: 'transparent' },
            { label: 'Destructive', value: 'destructive' },
            { label: 'Link', value: 'link' },
          ]}
        />
        <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
      </div>
    );
  }
}
