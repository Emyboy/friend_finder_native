import React, { useState } from 'react';
import SyncStorage from 'sync-storage';
import Popup from './components/Popup/Popup';
import { useFonts } from 'expo-font';
import AppLoading from './components/AppLoading';
import { Provider } from 'react-redux';
import { Provider as Provider_ } from 'react-native-paper';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/root.reducer';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';

const store = createStore(reducers, applyMiddleware(thunk));

export default () => {
  let [fontsLoaded] = useFonts({
    'Commissioner-VariableFont_wght': require('./assets/fonts/static/Commissioner-Regular.ttf'),
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
        <Provider store={store}>
          <Provider_>
            <Popup />
            <NavigationContainer>
              <AuthStack
                store={store}
              />
            </NavigationContainer>
          </Provider_>
        </Provider>
      );
    }
  }


};

