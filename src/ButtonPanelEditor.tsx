import React, { PureComponent } from 'react';
import { Select } from '@grafana/ui';
import { Field, Input } from '@grafana/ui';
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

        <Field label="HTTP method" description="HTTP method used to communicate with the remote site">
          <Select
            allowCustomValue
            onChange={this.onMethodChanged}
            value={options.method}
            options={[
              { label: 'GET', value: 'GET' },
              { label: 'POST', value: 'POST' },
            ]}
          />
        </Field>

        <Field label="URL" description="The URL to trigger">
          <Input required onChange={this.onURLChanged} value={options.url || ''} />
        </Field>

        <Field label="Type" description="Type defining how the options are sent to the server">
          <Select
            onChange={this.onTypeChanged}
            value={options.type}
            options={[
              { label: 'Header', value: 'HEADER', description: 'Send the API key as `X-API-Key` request HTTP header' },
              { label: 'Query', value: 'QUERY', description: 'Send the API key as `?api-key=...` query parameter' },
            ]}
          />
        </Field>

        <Field label="API Key" description="The API key sent with the request">
          <Input onChange={this.onKeyChanged} value={options.key || ''} />
        </Field>

        <Field label="Variant" description="Button variant used to render">
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
        </Field>

        <Field label="Text" description="The description of the button">
          <Input onChange={this.onTextChanged} value={options.text || ''} />
        </Field>
      </div>
    );
  }
}
