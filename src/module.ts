import { PanelPlugin } from '@grafana/data';
import { ButtonPanelOptions, defaults } from './types';
import { ButtonPanel } from './ButtonPanel';
import { ButtonPanelEditor } from './ButtonPanelEditor';

export const plugin = new PanelPlugin<ButtonPanelOptions>(ButtonPanel).setDefaults(defaults).setEditor(ButtonPanelEditor);
