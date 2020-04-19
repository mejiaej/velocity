import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Analytics from '../screens/Analytics';
import Chat from '../screens/Chat';
import Map from '../screens/Map';
// import Overview from '../screens/Overview';
import Service from '../screens/Service';
import Settings from '../screens/Settings';
import Vehicles from '../screens/Vehicles';
import OverviewNavigation from './OverviewNavigation';

const Drawer = createDrawerNavigator();

const Screens = () => (
  <Drawer.Navigator initialRouteName="Overview">
    <Drawer.Screen name="Overview" component={OverviewNavigation} />
    <Drawer.Screen name="Analytics" component={Analytics} />
    <Drawer.Screen name="Chat" component={Chat} />
    <Drawer.Screen name="Map" component={Map} />
    <Drawer.Screen name="Service" component={Service} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Vehicles" component={Vehicles} />
  </Drawer.Navigator>
);

export default Screens;
