import React from 'react';
import { Provider } from 'react-redux';
import { Provider as Provider_ } from 'react-native-paper';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/root.reducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from './components/AppLoading';
import { useFonts } from 'expo-font';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Popup from './components/Popup/Popup';
import Home from './pages/Home/Home';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();
const store = createStore(reducers, applyMiddleware(thunk));

const state = store.getState();

// console.log('state --', state);

export default props => {
  let [fontsLoaded] = useFonts({
    'Commissioner-VariableFont_wght': require('./assets/fonts/static/Commissioner-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Provider_>
          <Popup />
          <NavigationContainer>
            <Stack.Navigator headerMode={'none'}>
              {
                state.auth.authData ?
                  <>
                    <Stack.Screen name="Home" component={Home} />
                  </>
                  : <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                  </>
              }
            </Stack.Navigator>
          </NavigationContainer>
        </Provider_>
      </Provider>
    );
  }
};