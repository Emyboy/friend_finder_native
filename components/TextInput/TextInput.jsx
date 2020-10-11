import React from 'react';
import { StyleSheet } from 'react-native';
import Style from '../../Style';
import { TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';

export default ({
    label,
    value,
    onChangeText,
    disabled,
    placeholder
}) => {
    return (
        <TextInput 
            onChangeText={e => onChangeText(e)}
            style={styles.input}
            underlineColorAndroid='transparent'
            underlineColor='transparent'
            placeholder={label}
            caretHidden={true}
        />
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
    input: {
        margin: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Style.PRIMARY_COLOR,
        borderWidth: 2,
        padding: 15,
        paddingLeft: 15,
        fontSize: 20,
        backgroundColor: '#E6E7E8'
    }
})
