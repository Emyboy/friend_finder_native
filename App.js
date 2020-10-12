import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from './components/AppLoading';
import { useFonts } from 'expo-font';
import Signup from './pages/Signup/Signup';

export default props => {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Commissioner-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Signup />
      </>
    );
  }
};