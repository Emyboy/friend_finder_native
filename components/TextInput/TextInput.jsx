import React from 'react';
import { StyleSheet, View } from 'react-native';
import Global from '../../Global';
import { TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';


export default ({
    label,
    value,
    onChangeText,
    disabled,
    placeholder,
    keyboardType
}) => {
    return (
        <View style={styles.inputBox}>
            <TextInput
                onChangeText={e => onChangeText(e)}
                style={styles.input}
                underlineColorAndroid='transparent'
                underlineColor='transparent'
                placeholder={placeholder}
                editable={disabled}
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
        margin: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Global.PRIMARY_COLOR,
        borderWidth: 2,
        padding: 15,
        paddingLeft: 15,
        backgroundColor: Global.GRAY
    },
    input: {
        fontSize: 20,
    }
})
