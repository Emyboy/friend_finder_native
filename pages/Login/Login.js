import React, { useState } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import TextInput from '../../components/TextInput/TextInput';
import Btn from '../../components/Btn/Btn';
import { ScrollView } from 'react-native';
import Global from '../../Global';

export default () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {

    }

    return (
        <ScrollView style={{ backgroundColor: Global.PRIMARY_COLOR_DARK }}>
            <View style={{ alignItems: 'center', paddingTop: 100 }}>
                <Title style={{ fontSize: 35, paddingTop: 30, color: 'white' }}>Login</Title>
            </View>
            <TextInput
                onChangeText={e => setUsername(e)}
                placeholder={'Username'}
            />
            <TextInput
                onChangeText={e => setEmail(e)}
                placeholder={'Email'}
                keyboardType={'email-address'}
            />
            <TextInput
                onChangeText={e => setPassword(e)}
                placeholder={'Password'}
            />
            <Btn text={'Login'} />
            {/* <StatusBar style="auto" /> */}
        </ScrollView>
    )
}

