import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export const PickerSelect = ({ setOrderBy }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => {
        setOrderBy(value);
      }}
      items={[
        { label: 'Latest rated', value: 'latest' },
        { label: 'Highest rated', value: 'highest' },
        { label: 'Lowest rated', value: 'lowest' },
      ]}
    />
  );
};

export default PickerSelect;
