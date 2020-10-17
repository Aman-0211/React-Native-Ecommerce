import * as React from 'react';
import {TextInput} from 'react-native-paper';
import PropTypes from 'prop-types';

const InputText = ({label, value, onChangeText, secureTextEntry, ...props}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

InputText.defaultProps = {
  label: '',
  value: '',
  secureTextEntry: false,
  onChangeText: () => {},
};

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
};

export default InputText;
