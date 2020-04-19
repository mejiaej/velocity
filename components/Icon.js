import React from 'react';
import { Image } from 'react-native';
import MenuIcon from '../assets/images/icons/menu.png';
import NotificationsIcon from '../assets/images/icons/notifications.png';
import VehicleIcon from '../assets/images/icons/vehicle.png';
import DistanceIcon from '../assets/images/icons/distance.png';
import OptionsIcon from '../assets/images/icons/options.png';

const menuImage = <Image source={MenuIcon} style={{ height: 14, width: 18 }} />;

const notificationImage = (
  <Image source={NotificationsIcon} style={{ height: 22, width: 21 }} />
);

const vehicleImage = (
  <Image source={VehicleIcon} style={{ height: 50, width: 50 }} />
);

const distanceImage = (
  <Image source={DistanceIcon} style={{ height: 50, width: 50 }} />
);

const optionsImage = (
  <Image source={OptionsIcon} style={{ height: 16, width: 16 }} />
);

const Icon = ({ menu, notification, vehicle, distance, options }) => {
  if (menu) return menuImage;
  if (notification) return notificationImage;
  if (vehicle) return vehicleImage;
  if (distance) return distanceImage;
  if (options) return optionsImage;

  return null;
};

export default Icon;
