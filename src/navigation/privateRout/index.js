// In App.js in a new project

import * as React from 'react';
import {
    createBottomTabNavigator,
  } from "@react-navigation/bottom-tabs";
  import { View } from "react-native";
import { Cart, Event, Home, Order } from '../../containers';
import { TabBar } from '../../components/Tabs';



const Tab = createBottomTabNavigator();

function PrivateRout() {
    return (
        <View style={{ flex: 1, position: "relative"}}>
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="file-text-o" component={Event} />
            <Tab.Screen name="shopping-bag" component={Order} />
            <Tab.Screen name="cart-plus" component={Cart} />
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
