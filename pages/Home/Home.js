import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import { login, logout } from '../../redux/actions/auth.action';
import Login from '../Login/Login';

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
    console.log('home props ---', props.auth);
    const { Logout, auth } = props;
    const { authData } = auth;
    if(authData){
        return (
            <>
                <Header />
                <View style={{}}>
                    <Text style={{ fontSize: 30 }}>Home Page</Text>
                    <Text style={{ fontSize: 30 }}>Welcome {authData.username}</Text>
                    <Text style={{ fontSize: 30 }}>Your email is {authData.email}</Text>
                    <Btn text={'Logout'} onPress={Logout} />
                </View>
            </>
        )
    }else {
        return <Login />
    }
});

// import React from 'react';
// import { View, Text } from 'react-native';
// import Header from '../../components/Header/Header';

// export default () => {
//     return (
//         <>
//             <Header />
//             <View style={{ margin: 100 }}>
//                 <Text>Hellow Home</Text>
//             </View>
//         </>
//     )
// }