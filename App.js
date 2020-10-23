import React, { useState } from 'react';
import SyncStorage from 'sync-storage';
import Popup from './components/Popup/Popup';
import { useFonts } from 'expo-font';
import AppLoading from './components/AppLoading';
import { Provider } from 'react-redux';
import { Provider as Provider_, Text } from 'react-native-paper';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/root.reducer';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack  from './stacks/AuthStack';
import TimelineStack from './stacks/TimelineStack';
import { Ionicons } from '@expo/vector-icons';

const store = createStore(reducers, applyMiddleware(thunk));

export default () => {
  let [fontsLoaded] = useFonts({
    'Commissioner-VariableFont_wght': require('./assets/fonts/static/Commissioner-Regular.ttf'),
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  const [syncLoaded, setSyncLoaded] = useState(true);

  const state = store.getState();

  SyncStorage.init()
    .then(sinc => {
      console.log('sinc', sinc);
      setSyncLoaded(false)
    })
    .catch(err => {
      setSyncLoaded(false)
      console.log('sinc error', err)})
  // console.log('AsyncStorage is ready!', data);

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    if (syncLoaded) {
      return <AppLoading />;
    } else {
      return (
        // <Text>I want</Text>
        <Provider store={store}>
          <Provider_>
            <Popup />
            <NavigationContainer>
              <AuthStack
                store={store}
              />
              {/* <TimelineStack /> */}
            </NavigationContainer>
          </Provider_>
        </Provider>
      );
    }
  }


};

