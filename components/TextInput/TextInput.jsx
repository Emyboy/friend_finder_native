import React from 'react';
import { StyleSheet, View } from 'react-native';
import Global from '../../Global';
import { TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';
// import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


export default ({
    label,
    value,
    onChangeText,
    disabled,
    placeholder,
    keyboardType,
    icon,
    iconSize,
    iconColor,
    secureTextEntry
}) => {
    return (
        <View style={styles.inputBox}>
            {
                icon ? <Feather name={icon} size={iconSize || 24} color={iconColor} /> : null
            }
            <TextInput
                secureTextEntry={secureTextEntry}
                onChangeText={e => onChangeText(e)}
                style={styles.input}
                underlineColorAndroid='transparent'
                underlineColor='transparent'
                placeholder={placeholder}
                editable={!disabled}
                defaultValue={value}
                caretHidden={true}
                keyboardType={keyboardType}
            />
        </View>
        // <TextInput
        //     style={styles.input}
        //     label={label}
        //     value={value}
        //     editable={disabled}
        //     onChangeText={text => onChangeText(text)}
        //     placeholder={placeholder}
        //     underlineColor={Style.PRIMARY_COLOR} 
        //     selectionColor={Style.PRIMARY_COLOR}
        //     placeholderTextColor={Style.PRIMARY_COLOR}
        //     underlineColorAndroid={'transparent'}
        //     caretHidden={true}
        // />
    );
};

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Global.PRIMARY_COLOR,
        borderWidth: 2,
        padding: 15,
        backgroundColor: Global.GRAY
    },
    input: {
        paddingLeft: 15,
        fontSize: 20,
        fontFamily: Global.PRIMARY_FONT,
        width: '90%'
    }
})
