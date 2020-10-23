import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import { logout } from '../../redux/actions/auth.action';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    Logout: logout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    const { Logout } = props;
    return (
        <>
            <Header />
            <ScrollView style={{ margin: 50 }}>
                <Text>Profile Page...</Text>
                <Btn onPress={Logout} text="Logout" />
            </ScrollView>
        </>
    )
});
