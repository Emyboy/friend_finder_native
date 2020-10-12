import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import Global from '../../Global';

export default ({
    loading,
    icon,
    mode,
    onPress,
    disabled,
    text
}) => {
    return (
        <Button
            loading={loading}
            icon={icon}
            mode="contained"
            onPress={() => onPress()}
            disabled={disabled}
            uppercase={false}
            style={styles.btn}
        >
            <Text style={styles.btnText}>{text}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Global.PRIMARY_COLOR,
        margin: 10,
        padding: 10,
        borderRadius: 30
    },
    btnText: {
        fontSize: 19
    }
})
