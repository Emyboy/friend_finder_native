import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Appbar, Button, Title } from 'react-native-paper';
import Btn from './components/Btn/Btn';
import TextInput from './components/TextInput/TextInput';
import Style from './Style';

import Signup from './pages/Signup/Signup';

export default function App() {
  return (
    <>
      {/* <Appbar.Header style={{ backgroundColor: Style.PRIMARY_COLOR }}>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Uche App" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon="dots-vertical" onPress={() => { }} />
      </Appbar.Header> */}
      {/* <View style={{ paddingTop: 70 }}>
        <View style={{ alignItems: 'center' }}>
          <Title style={{ fontSize: 35 }}>Login</Title>
        </View>
        <TextInput
          onChangeText={e => console.log(e)}
          label={'Email'}
        />
        <TextInput
          onChangeText={e => console.log(e)}
          label={'Password'}
        />
        <Btn text={'Login'} />
        <StatusBar style="auto" />
      </View> */}
      <Signup />
    </>
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
