import React, { useState, useEffect } from 'react';
import { Platform, View, StatusBar, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './navigation/Auth';
import Screens from './navigation/Screens';

const App = ({ skipLoadingScreen }) => {
  const loggedIn = true;
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHide();
        await Asset.loadAsync([
          require('./assets/images/Base/Logo.png'),
          require('./assets/images/Base/Logo2x.png'),
          require('./assets/images/Base/Logo3x.png'),
        ]);

        // Load fonts
        await Font.loadAsync({
          'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
          'Rubik-BlackItalic': require('./assets/fonts/Rubik-BlackItalic.ttf'),
          'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
          'Rubik-BoldItalic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
          'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
          'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
          'Rubik-LightItalic': require('./assets/fonts/Rubik-LightItalic.ttf'),
          'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
          'Rubik-MediumItalic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
          'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer>
          {loggedIn ? <Screens /> : <Auth />}
        </NavigationContainer>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
