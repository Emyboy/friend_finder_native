import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from './components/AppLoading';
import { useFonts } from 'expo-font';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

const Stack = createStackNavigator();

export default props => {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Commissioner-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};