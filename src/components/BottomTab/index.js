import * as React from 'react';
import {View} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from 'prop-types';

export const blue = "#3A36D5";
export const grey = "#CFD2D7"


export const BottomMenuItem = ({iconName, isCurrent}) => {
    Icon.loadFont();
    console.log("iconNAme", iconName);
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        size={32}
        name={iconName}
        color={ isCurrent ? blue : grey}
      />
    </View>
  );
};

BottomMenuItem.prototype ={
    iconName:PropTypes.string,
    isCurrent:PropTypes.bool
}
