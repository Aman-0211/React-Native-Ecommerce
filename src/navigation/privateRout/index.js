// In App.js in a new project

import * as React from 'react';
import {
    createBottomTabNavigator,
  } from "@react-navigation/bottom-tabs";
  import {createStackNavigator} from '@react-navigation/stack';
  import { View } from "react-native";
import { Cart, Event, Home, Order } from '../../containers';
import { TabBar } from '../../components';



const Stack = createStackNavigator();

export  function MainStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="Products" component={Home} />
          </Stack.Navigator>
    );
  }


  export  function CartStack() {
      return (
            <Stack.Navigator>
              <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
      );
    }



const Tab = createBottomTabNavigator();

function PrivateRout() {
    
    return (
        <View style={{ flex: 1, position: "relative"}}>
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props}  />}
        >
            <Tab.Screen name="home" component={MainStack} />
            <Tab.Screen name="file-text-o" component={Event} />
            <Tab.Screen name="shopping-bag" component={Order} />
            <Tab.Screen name="cart-plus" component={CartStack} />
        </Tab.Navigator>
        {/* {useSafeArea().bottom > 0 && (
          <View
            style={{
              height: useSafeArea().bottom - 5,
              backgroundColor: "white",
            }}
          />
        )} */}
      </View>
    );
  }
  
  export default PrivateRout;
