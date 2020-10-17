import * as React from 'react';
import { Button as RNButton } from 'react-native-paper';
import PropTypes from 'prop-types';

const Button = ({icon, label, mode, onPress, ...props}) => (
  <RNButton icon={icon} mode={mode} onPress={onPress} {...props}>
    {label}
  </RNButton>
);

Button.defaultProps ={
    icon:'',
    label:"button",
    mode:"contained",
    onPress:()=>{}
}

Button.prototype ={
   icon: PropTypes.string,
   mode:PropTypes.string,
   label:PropTypes.string,
   onPress:PropTypes.func, 
}

export default Button;