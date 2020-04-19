import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Overview from '../screens/Overview';
import { fonts } from '../constants/theme';
import { Icon } from '../components';

const Stack = createStackNavigator();

const menuButton = (
  <TouchableOpacity>
    <Icon menu />
  </TouchableOpacity>
);

const OverviewNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Overview"
      component={Overview}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: fonts.h4,
        // headerTitle: (props) => <Header {...props} title="Overview" />,
        headerLeftContainerStyle: { marginLeft: 24 },
        headerLeft: () => menuButton,
      }}
    />
  </Stack.Navigator>
);

export default OverviewNavigation;
