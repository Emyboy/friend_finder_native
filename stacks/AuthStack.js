import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';
import syncStorage from 'sync-storage';
import Apploading from '../components/AppLoading';


const Stack = createStackNavigator();

const AuthStack = (props) => {

    useEffect(() => {
        console.log('auth stack props ---', props);
        const authData = syncStorage.get('authData')
        console.log('authStack Sync-------', authData);
        if (authData !== undefined) {
            console.log('auth data exist in sync -')
            props.store.dispatch({ type: 'SET_AUTH_USER', payload: authData })
        }
    }, []);
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
