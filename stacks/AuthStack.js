import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';


const Stack = createStackNavigator();

const AuthStack = (props) => {
    console.log('auth stack props ---', props);
    return (
        <Stack.Navigator headerMode={'none'}>
            {
                props.auth.isLoggedIn ?
                    <Stack.Screen name="Home" component={Home} />
                    :
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Signup" component={Signup} />
                    </>
            }
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthStack)
