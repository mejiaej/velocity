import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Forgot from '../screens/auth/Forgot';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="none"
    // screenOptions={{ headShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Forgot" component={Forgot} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default Auth;
