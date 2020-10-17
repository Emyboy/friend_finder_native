import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Btn from '../../components/Btn/Btn';
import { logout } from '../../redux/actions/auth.action';

const mapStateToProps = state => ({
    auth: state.auth
});

const mapActionToProps = {
    Logout: logout
}

export default connect(
    mapStateToProps,
    mapActionToProps
)((props) => {
    console.log('login props ---', props.auth);
    const { Logout, auth } = props;
    const { authData } = auth;
    return (
        <View style={{ margin: 100 }}>
            <Text style={{ fontSize: 30 }}>Home Page</Text>
            <Text style={{ fontSize: 30 }}>Welcome {authData.username}</Text>
            <Text style={{ fontSize: 30 }}>Your email is {authData.email}</Text>
            <Btn text={'Logout'} onPress={Logout} />
        </View>
    )
});

