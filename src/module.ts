import { PanelPlugin, SelectableValue } from '@grafana/data';
import { ButtonPanelOptions } from './types';
import { ButtonPanel } from './ButtonPanel';
import { ButtonParamsEditor } from './ButtonParamsEditor';
import 'static/button-panel.css';
import { getAvailableIcons } from '@grafana/ui';

export const plugin = new PanelPlugin<ButtonPanelOptions>(ButtonPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'method',
      name: 'Method',
      category: ['REST Integration'],
      description: 'HTTP method used to communicate with the remote site',
      settings: {
        options: [
          {
            value: 'GET',
            label: 'GET',
          },
          {
            value: 'POST',
            label: 'POST',
          },
        ],
      },
      defaultValue: 'GET',
    })
    .addTextInput({
      path: 'url',
      name: 'URL',
      category: ['REST Integration'],
      description: 'The URL to call',
      defaultValue: 'http://api.example.com/',
    })
    .addRadio({
      path: 'type',
      name: 'Type',
      category: ['REST Integration'],
      description: 'Defines how the parameters are sent to the server',
      settings: {
        options: [
          {
            value: 'header',
            label: 'Header',
            description: 'Send the parameters as request HTTP headers',
          },
          {
            value: 'query',
            label: 'Query',
            description: 'Send the parameters as `key=value` query parameter',
          },
        ],
      },
      defaultValue: 'header',
    })
    .addCustomEditor({
      id: 'buttonParams',
      path: 'params',
      name: 'Parameters',
      category: ['REST Integration'],
      description: 'The parameters sent with the request',
      editor: ButtonParamsEditor,
    })
    .addTextInput({
      path: 'contentType',
      name: 'Content-Type',
      category: ['REST Integration'],
      description: 'Content-Type of the payload',
      defaultValue: 'application/json',
      showIf: config => config.method === 'POST',
    })
    .addTextInput({
      path: 'payload',
      name: 'Payload',
      category: ['REST Integration'],
      description: 'Optional payload to send with the request',
      settings: {
        useTextarea: true,
        rows: 5,
      },
      showIf: config => config.method === 'POST',
    })
    .addSelect({
      path: 'variant',
      name: 'Variant',
      description: 'Button variant used to render',
      settings: {
        options: [
          {
            value: 'primary',
            label: 'Primary',
          },
          {
            value: 'secondary',
            label: 'Secondary',
          },
          {
            value: 'destructive',
            label: 'Destructive',
          },
          {
            value: 'link',
            label: 'Link',
          },
          {
            value: 'custom',
            label: 'Custom',
          },
        ],
      },
      defaultValue: 'primary',
    })
    .addColorPicker({
      path: 'foregroundColor',
      name: 'Fackground Color',
      description: 'Foreground color of the button',
      settings: {
        disableNamedColors: true,
      },
      showIf: config => config.variant === 'custom',
    })
    .addColorPicker({
      path: 'backgroundColor',
      name: 'Background Color',
      description: 'Background color of the button',
      settings: {
        disableNamedColors: true,
      },
      showIf: config => config.variant === 'custom',
    })
    .addRadio({
      path: 'orientation',
      name: 'Orientation',
      description: 'Button orientation used to render',
      settings: {
        options: [
          {
            value: 'left',
            label: 'Left',
          },
          {
            value: 'center',
            label: 'Center',
          },
          {
            value: 'right',
            label: 'Right',
          },
        ],
      },
      defaultValue: 'center',
    })
    .addSelect({
      path: 'icon',
      name: 'Icon',
      description: '',
      settings: {
        options: getAvailableIcons().map(
          (icon): SelectableValue => {
            return {
              value: icon,
              label: icon,
            };
          }
        ),
      },
      defaultValue: 'cog',
    })
    .addTextInput({
      path: 'text',
      name: 'Text',
      description: 'The description of the button',
      defaultValue: 'The default button label',
    })
    .addBooleanSwitch({
      path: 'isAuth',
      name: 'Authentication',
      category: ['Authentication'],
      description: 'Should basic authentication be used?',
      defaultValue: false,
    })
    .addTextInput({
      path: 'username',
      name: 'Username',
      category: ['Authentication'],
      description: 'ℹ️ The server MUST provide proper CORS Access-Control-Allow-* headers!',
      showIf: config => config.isAuth,
    })
    .addTextInput({
      path: 'password',
      name: 'Password',
      category: ['Authentication'],
      description: '⚠️ The password is NOT stored encrypted in Grafana!',
      showIf: config => config.isAuth,
    });
});
