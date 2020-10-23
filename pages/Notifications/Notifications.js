import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';
import Header from '../../components/Header/Header';
import EachNotification from './EachNotification';

export default () => {
    return (
        <>
            <Header />
            <ScrollView>
                
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />

            </ScrollView>
        </>
    )
}