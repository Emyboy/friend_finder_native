import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import TextInput from '../../components/TextInput/TextInput';
import Btn from '../../components/Btn/Btn';

export default () => {
    return (
        <View style={{ paddingTop: 70 }}>
            <View style={{ alignItems: 'center' }}>
                <Title style={{ fontSize: 35 }}>Signup</Title>
            </View>
            <TextInput
                onChangeText={e => console.log(e)}
                label={'Username'}
            />
            <TextInput
                onChangeText={e => console.log(e)}
                label={'Email'}
            />
            <TextInput
                onChangeText={e => console.log(e)}
                label={'Password'}
            />
            <Btn text={'Login'} />
            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

