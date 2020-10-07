import { PanelPlugin } from '@grafana/data';
import { ButtonPanelOptions } from './types';
import { ButtonPanel } from './ButtonPanel';
import { ButtonParamsEditor } from './ButtonParamsEditor';
import 'static/button-panel.css';

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
      defaultValue: 'POST'
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
        ],
      },
      defaultValue: 'primary',
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
      defaultValue: false
    })
    .addTextInput({
      path: 'username',
      name: 'Username',
      category: ['Authentication'],
      showIf: config => config.isAuth
    })
    .addTextInput({
      path: 'password',
      name: 'Password',
      category: ['Authentication'],

      showIf: config => config.isAuth
    })
    ;
});
