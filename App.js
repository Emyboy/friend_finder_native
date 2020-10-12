import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import Signup from './pages/Signup/Signup';
// import rootReducer from './redux/store/store';

// const store = createStore(rootReducer);

export default function App() {
  return (
    // <Provider store={store}>
      <Signup />
    // </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
