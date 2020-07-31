import React, { PureComponent } from 'react';
import { Field, IconButton, Input, Select, HorizontalGroup, VerticalGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { ButtonPanelOptions } from './types';
import {} from '@emotion/core';

export class ButtonPanelEditor extends PureComponent<PanelEditorProps<ButtonPanelOptions>> {
  onParamRemove = (key: string) => ({ target }: any) => {
    let newParams = this.props.options.params.filter(e => e[0] !== key);
    this.props.onOptionsChange({ ...this.props.options, params: newParams });
  };
  onParamAdd = ({ target }: any) => {
    const key = this.props.options.newParamName;
    let newParams = this.props.options.params.filter(e => e[0] !== key);
    newParams.push([key, this.props.options.newParamValue]);
    newParams.sort((a, b) => a[0].localeCompare(b[0]));
    const msg = { ...this.props.options, newParamName: '', newParamValue: '', params: newParams };
    this.props.onOptionsChange(msg);
  };
  onNewParamNameChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, newParamName: target.value });
  };
  onNewParamValueChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, newParamValue: target.value });
  };
  onVariableParamRemove = (key: string) => ({ target }: any) => {
    let newParams = this.props.options.variableParams.filter(e => e[0] !== key);
    this.props.onOptionsChange({ ...this.props.options, variableParams: newParams });
  };
  onVariableParamAdd = ({ target }: any) => {
    const key = this.props.options.newVariableParamName;
    let newParams = this.props.options.variableParams.filter(e => e[0] !== key);
    newParams.push([key, this.props.options.newVariableParamValue]);
    newParams.sort((a, b) => a[0].localeCompare(b[0]));
    const msg = {
      ...this.props.options,
      newVariableParamName: '',
      newVariableParamValue: '',
      variableParams: newParams,
    };
    this.props.onOptionsChange(msg);
  };
  onNewVariableParamNameChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, newVariableParamName: target.value });
  };
  onNewVariableParamValueChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, newVariableParamValue: target.value });
  };
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, text: target.value });
  };
  onURLChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, url: target.value });
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
  onOrientationChanged = ({ label, value, target }: any) => {
    this.props.onOptionsChange({
      ...this.props.options,
      orientation: {
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

    // @ts-ignore
    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Settings</h5>

        <Field label="Method" description="HTTP method used to communicate with the remote site">
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

        <Field label="URL" description="The URL to call">
          <Input required onChange={this.onURLChanged} value={options.url || ''} />
        </Field>

        <Field label="Type" description="Defines how the parameters are sent to the server">
          <Select
            onChange={this.onTypeChanged}
            value={options.type}
            options={[
              {
                label: 'Header',
                value: 'HEADER',
                description: 'Send the parameters as request HTTP headers',
              },
              {
                label: 'Query',
                value: 'QUERY',
                description: 'Send the parameters as `key=value` query parameter',
              },
            ]}
          />
        </Field>

        <Field label="Parameters" description="The parameters sent with the request">
          <div className="panel-container" style={{ width: 'auto' }}>
            <HorizontalGroup>
              <Input placeholder="Name" onChange={this.onNewParamNameChanged} value={options.newParamName || ''} />
              <Input placeholder="Value" onChange={this.onNewParamValueChanged} value={options.newParamValue || ''} />
              <IconButton onClick={this.onParamAdd} name="plus" />
            </HorizontalGroup>
            <VerticalGroup>
              {Array.from(options.params.entries()).map(entry => (
                <HorizontalGroup>
                  <Input disabled value={entry[1][0]} />
                  <Input disabled value={entry[1][1]} />
                  <IconButton onClick={this.onParamRemove(entry[1][0])} name="minus" />
                </HorizontalGroup>
              ))}
            </VerticalGroup>
          </div>
        </Field>

        <Field label="Variable parameters" description="Parameters resolved before sending the request">
          <div className="panel-container" style={{ width: 'auto' }}>
            <HorizontalGroup>
              <Input
                placeholder="Name"
                onChange={this.onNewVariableParamNameChanged}
                value={options.newVariableParamName || ''}
              />
              <Input
                placeholder="Value"
                onChange={this.onNewVariableParamValueChanged}
                value={options.newVariableParamValue || ''}
              />
              <IconButton onClick={this.onVariableParamAdd} name="plus" />
            </HorizontalGroup>
            <VerticalGroup>
              {Array.from(options.variableParams.entries()).map(entry => (
                <HorizontalGroup>
                  <Input disabled value={entry[1][0]} />
                  <Input disabled value={'$' + entry[1][1]} />
                  <IconButton onClick={this.onVariableParamRemove(entry[1][0])} name="minus" />
                </HorizontalGroup>
              ))}
            </VerticalGroup>
          </div>
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

        <Field label="Orientation" description="Button orientation used to render">
          <Select
            onChange={this.onOrientationChanged}
            value={options.orientation}
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
          />
        </Field>

        <Field label="Text" description="The description of the button. Variables accepted.">
          <Input onChange={this.onTextChanged} value={options.text || ''} />
        </Field>
      </div>
    );
  }
}
