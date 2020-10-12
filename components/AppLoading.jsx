import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Global from '../Global';

export default () => {
    return <View style={styles.container}>
        <ActivityIndicator size='large' animating={true} color={Global.PRIMARY_COLOR} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.PRIMARY_COLOR_DARK,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
