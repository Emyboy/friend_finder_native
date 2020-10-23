import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../../components/Header/Header';

export default () => {
    return (
        <>
            <Header />
            <ScrollView style={{ margin: 50 }}>
                <Text>List Of Notification</Text>
            </ScrollView>
        </>
    )
}