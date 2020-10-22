import React, { useState } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import TextInput from '../../components/TextInput/TextInput';
import Btn from '../../components/Btn/Btn';
import { ScrollView } from 'react-native';
import Global from '../../Global';
import { login } from '../../redux/actions/auth.action';
import { popup } from '../../redux/actions/view.action';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    auth: state.auth,
    view: state.view
});

const mapActionToProps = {
    Login: login,
    Popup: popup
}

export default connect(
    mapStateToProps,
    mapActionToProps
)((props) => {
    const { navigation, Login, auth, Popup } = props;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {
        if (email !== null || password !== null && email !== '' || password !== '') {
            Login({
                email,
                password
            })
        } else {
            Popup({
                show: true,
                message: 'Please Fill Out The Form'
            })
        }
    }

    return (
        <ScrollView style={{ backgroundColor: Global.PRIMARY_COLOR_DARK }}>
            <View style={{ alignItems: 'center', paddingTop: 100 }}>
                <Title style={{ fontSize: 35, paddingTop: 30, color: 'white', fontFamily: Global.PRIMARY_FONT }}>Login</Title>
            </View>
            {/* <TextInput
                onChangeText={e => setUsername(e)}
                placeholder={'Username'}
                keyboardType='default'
                icon='user'
            /> */}
            <TextInput
                onChangeText={e => setEmail(e)}
                placeholder={'Email'}
                disabled={auth.isLoading}
                keyboardType={'email-address'}
                icon='mail'
            />
            <TextInput
                onChangeText={e => setPassword(e)}
                placeholder={'Password'}
                disabled={auth.isLoading}
                icon='key'
                secureTextEntry={true}
            />
            <Btn disabled={auth.isLoading} loading={auth.isLoading} text={'Login'} onPress={handleSubmit} />
            <Btn disabled={auth.isLoading} text={'Signup'} onPress={() => navigation.navigate('Signup')} />
            {/* <StatusBar style="auto" /> */}
        </ScrollView>
    )
});

