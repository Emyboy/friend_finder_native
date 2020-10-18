import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, Dialog, Portal } from 'react-native-paper';
import TextInput from '../../components/TextInput/TextInput';
import Btn from '../../components/Btn/Btn';
import { ScrollView } from 'react-native';
import Global from '../../Global';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth.action';
import { popup } from '../../redux/actions/view.action';
import Home from '../Home/Home';
// import DropDown from '../../components/DropDown/DropDown';

const mapStateToProps = state => ({
    auth: state.auth,
    view: state.view
});

const mapDispatchToProps = {
    Signup: signup,
    Popup: popup
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    // console.log('signup props ---', props);
    const { navigation, auth} = props;
    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [gender, setGender] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = () => {
        if (username !== '' && email !== '' && password !== ''
            && username !== null && email !== null && password !== null) {
            props.Signup({
                username,
                password,
                email,
                firstName: firstname,
                lastName: lastname,
                date_of_birth: 'dateOfBirth'
            })
        } else {
            props.Popup({
                message: "Please Fillout The Form",
                show: true,
                title: 'Error'
            })
            setDisabled(true);
        }
    }

    const handleInputChange = (name, text) => {
        switch (name) {
            case 'firstname':
                setFirstName(text);
                break;
            case 'lastname':
                setLastname(text);
                break;
            case 'dateOfBirth':
                setDateOfBirth(text);
                break;
            case 'username':
                setUsername(text);
                break;
            case 'email':
                setEmail(text);
                break;
            case 'password':
                setPassword(text);
                break;
            default:
                break;
        };
        if (username !== '' && email !== '' && password !== ''
            && username !== null && email !== null && password !== null) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

        return (

            <ScrollView style={{ backgroundColor: Global.PRIMARY_COLOR_DARK }}>
                <View>
                    <View style={{ alignItems: 'center', paddingTop: 100 }}>
                        <Title style={{ fontSize: 35, paddingTop: 30, color: 'white', fontFamily: Global.PRIMARY_FONT }}>Signup</Title>
                    </View>
                    <TextInput
                        onChangeText={e => handleInputChange('firstname', e)}
                        placeholder={'First Name'}
                        keyboardType='default'
                        icon='user-check'
                    />
                    <TextInput
                        onChangeText={e => handleInputChange('lastname', e)}
                        placeholder={'Last Name'}
                        keyboardType='default'
                        icon='user-check'
                    />
                    <TextInput
                        onChangeText={e => handleInputChange('username', e)}
                        placeholder={'Username'}
                        keyboardType='default'
                        icon='user'
                    />
                    <TextInput
                        onChangeText={e => handleInputChange('email', e)}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        icon='mail'
                    />
                    {/* <DropDown /> */}
                    <TextInput
                        onChangeText={e => handleInputChange('password', e)}
                        placeholder={'Password'}
                        icon='key'
                        secureTextEntry={true}
                    />
                    <Btn text={'Signup'} disabled={auth.isLoading} onPress={handleSubmit} loading={auth.isLoading} />
                    {/* <StatusBar style="auto" /> */}
                    <Btn disabled={auth.isLoading} text={'Login'} onPress={() => navigation.navigate('Login')} />
                </View>
            </ScrollView>

        )
});

