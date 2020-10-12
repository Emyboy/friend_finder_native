import React, { useState } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import TextInput from '../../components/TextInput/TextInput';
import Btn from '../../components/Btn/Btn';
import { ScrollView } from 'react-native';
import Global from '../../Global';

export default ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {

    }

    return (
        <ScrollView style={{ backgroundColor: Global.PRIMARY_COLOR_DARK }}>
            <View style={{ alignItems: 'center', paddingTop: 100 }}>
                <Title style={{ fontSize: 35, paddingTop: 30, color: 'white', fontFamily: Global.PRIMARY_FONT }}>Signup</Title>
            </View>
            <TextInput
                onChangeText={e => setUsername(e)}
                placeholder={'Username'}
                keyboardType='default'
                icon='user'
            />
            <TextInput
                onChangeText={e => setEmail(e)}
                placeholder={'Email'}
                keyboardType={'email-address'}
                icon='mail'
            />
            <TextInput
                onChangeText={e => setPassword(e)}
                placeholder={'Password'}
                icon='key'
                secureTextEntry={true}
            />
            <Btn text={'Signup'} />
            {/* <StatusBar style="auto" /> */}
            <Btn text={'Login'} onPress={() => navigation.navigate('Login')} />
        </ScrollView>
    )
}

