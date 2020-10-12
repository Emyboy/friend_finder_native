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
                <Title style={{ fontSize: 35, paddingTop: 30, color: 'white' }}>Signup</Title>
            </View>
            <TextInput
                onChangeText={e => setUsername(e)}
                label={'Username'}
            />
            <TextInput
                onChangeText={e => setEmail(e)}
                label={'Email'}
            />
            <TextInput
                onChangeText={e => setPassword(e)}
                label={'Password'}
            />
            <Btn text={'Signup'} />
            {/* <StatusBar style="auto" /> */}
        </ScrollView>
    )
}

