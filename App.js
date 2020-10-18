// import React from 'react';
// import { Provider } from 'react-redux';
// import { Provider as Provider_, Text } from 'react-native-paper';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './redux/reducers/root.reducer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './pages/Home/Home';
// import AppLoading from './components/AppLoading';
// import { useFonts } from 'expo-font';
// import Signup from './pages/Signup/Signup';
// import Login from './pages/Login/Login';
// import Popup from './components/Popup/Popup';
// import { AsyncStorage } from 'react-native';
// import SyncStorage from 'sync-storage';

// SyncStorage.init()
//   .then(sinc => console.log('sinc', sinc))
//   .catch(err => console.log('sinc error', err))
// // console.log('AsyncStorage is ready!', data);

// const Stack = createStackNavigator();
// const store = createStore(reducers, applyMiddleware(thunk));

// const state = store.getState();
// AsyncStorage.getItem('authData')
//   .then(data => {
//     console.log('auth data ---', data);
//     store.dispatch({ type: 'SET_AUTH_USER', payload: data });
//   })
//   .catch(err => console.log('auth data err ---', err))


// // console.log('authData sync --', authData);

// export default props => {
//   let [fontsLoaded] = useFonts({
//     // 'Commissioner-VariableFont_wght': require('./assets/fonts/static/Commissioner-Regular.ttf'),
//   });


//   // if (!true) {
//   //   return <AppLoading />;
//   // } else {
//     // if (authData) {
//     //   store.dispatch({ type: 'SET_AUTH_USER', payload: authData });
//     // }
//     return (
//       <Provider store={store}>
//         <Provider_>
//           <Popup />
//           <NavigationContainer>
//             <Stack.Navigator headerMode={'none'}>
//               {/* {
//                 state.auth.authData ?
//                   <>
//                   </>
//                   : <>
//                   </>
//               } */}
//                 <Stack.Screen name="Login" component={Login} />
//               <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Signup" component={Signup} />
//             </Stack.Navigator>
//           </NavigationContainer>
//         </Provider_>
//       </Provider>
//       // <Text style={{ margin: 100 }}>App</Text>
//     );
//   }
// // };

import React from 'react';
import SyncStorage from 'sync-storage';
import Popup from './components/Popup/Popup';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { Provider as Provider_ } from 'react-native-paper';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/root.reducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import AuthStack from './stacks/AuthStack';
import Axios from 'axios';


// Axios('https://randomuser.me/api/?results=5')
//   .then(res => console.log('res', res))
//   .catch(err => console.log('err', err))

const store = createStore(reducers, applyMiddleware(thunk));

const state = store.getState();

SyncStorage.init()
  .then(sinc => console.log('sinc', sinc))
  .catch(err => console.log('sinc error', err))
// console.log('AsyncStorage is ready!', data);


export default () => {
  let [fontsLoaded] = useFonts({
    'Commissioner-VariableFont_wght': require('./assets/fonts/static/Commissioner-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    // if (authData) {
    //   store.dispatch({ type: 'SET_AUTH_USER', payload: authData });
    // }
    return (
      <Provider store={store}>
        <Provider_>
          <Popup />
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </Provider_>
      </Provider>
      // <Text style={{ margin: 100 }}>App</Text>
    );
  }
};

