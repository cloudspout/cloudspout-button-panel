import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { IconButton, Input, HorizontalGroup, VerticalGroup } from '@grafana/ui';

interface Props extends StandardEditorProps<Array<[string, string]>> {}

export const ButtonParamsEditor: React.FC<Props> = ({ item, value, onChange, context }) => {
  
  const [newParamName, setNewParamName] = useState('');
  const [newParamValue, setNewParamValue] = useState('');

  const onNewParamValueChanged = ({ target }: any) => {
    setNewParamValue(target.value);
  };
  const onNewParamNameChanged = ({ target }: any) => {
    setNewParamName(target.value);
  };
  const onParamRemove = (key: string) => ({ target }: any) => {
    console.log('Removing ' + key);

    const newParams = value.filter((e) => e[0] !== key);
    console.log('Removed ' + key + ': ', newParams);

    onChange(newParams);
  };
  const onParamAdd = ({ target }: any) => {
    const key = newParamName;
    let newParams: Array<[string, string]>;
    if (value) {
      newParams = value.filter((e) => e[0] !== key);
    } else {
      newParams = [];
    }
    newParams.push([key, newParamValue]);
    newParams.sort((a, b) => a[0].localeCompare(b[0]));

    console.log('Updated params: ', newParams);

    setNewParamName('');
    setNewParamValue('');
    onChange(newParams);
  };

  return (
    <div className="panel-container" style={{ width: 'auto' }}>
      <HorizontalGroup>
        <Input css="" placeholder="Name" onChange={onNewParamNameChanged} value={newParamName} />
        <Input css="" placeholder="Value" onChange={onNewParamValueChanged} value={newParamValue} />
        <IconButton onClick={(e) => onParamAdd(e)} name="plus" />
      </HorizontalGroup>
      <VerticalGroup>
        {Array.from(value || []).map((entry) => (
          <HorizontalGroup key={entry[0]}>
            <Input css="" disabled value={entry[0]} />
            <Input css="" disabled value={entry[1]} />
            <IconButton onClick={onParamRemove(entry[0])} name="minus" />
          </HorizontalGroup>
        ))}
      </VerticalGroup>
    </div>
  );
};
