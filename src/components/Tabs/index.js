import React, {useState} from 'react';
import {View, TouchableOpacity, Dimensions, StyleSheet, Animated} from 'react-native';
import {connect} from 'react-redux';
import {BottomMenuItem} from '../BottomTab';

export const blue = "#3A36D5";
export const grey = "#CFD2D7"

const TabBar = ({state, descriptors, navigation,...props}) => {
  const totalWidth = Dimensions.get('window').width;
    
  const [translateValue] = useState(new Animated.Value(0));
  const tabWidth = totalWidth / state.routes.length;

  console.log("props",props);

  return (
    <View style={[style.tabContainer, {width: totalWidth}]}>
      <View style={{flexDirection: 'row'}}>
      <Animated.View
          style={[
            style.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth - 20,
            },
          ]}
        />
        {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 10,
              useNativeDriver: true,
            }).start();
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <BottomMenuItem
                iconName={label.toString()}
                isCurrent={isFocused}
                cartItem={props.data.addedItems.length}
              />
          </TouchableOpacity>
        );
      })}
      </View>
    </View>
  );
};

export const mapStateToProps = (state) => {
    return {
      data: state.productList,
    };
  };
export default connect(mapStateToProps)(TabBar)

const style = StyleSheet.create({
    tabContainer: {
      height: 60,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.0,
      backgroundColor: "white",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      elevation: 10,
      position: "absolute",
      bottom: 0,
    },
    slider: {
      height: 5,
      position: "absolute",
      top: 0,
      left: 10,
      backgroundColor: blue,
      borderRadius: 10,
    },
  });
  
