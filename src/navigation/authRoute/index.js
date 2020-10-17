// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login, Signup } from '../../containers';



const Stack = createStackNavigator();

function AuthStack() {
    return (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}
                options={{headerShown: false}}
             />
            <Stack.Screen name="SignUp" component={Signup} />
          </Stack.Navigator>
    );
  }
  
  export default AuthStack;
  