import { Picker, View } from 'native-base';
import React, { Component } from 'react';
import Global from '../../Global';
import { Feather } from '@expo/vector-icons';

export default class DropDown extends Component {
    render() {
        const {
            data,
            onChange,
            defaultValue
        } = this.props;
        return (
            <View style={{
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: 'white',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: Global.PRIMARY_COLOR,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingLeft: 13
            }}>
                <Feather name={'users'} size={24} style={{ marginTop: 10 }} />
                <Picker
                    note
                    mode="dropdown"
                    onValueChange={e => onChange(e)}
                    // style={{ width: 120 }}
                    selectedValue={defaultValue}
                // onValueChange={this.onValueChange.bind(this)}
                >
                    {
                        data.map((val, i) => {
                            return (
                                <Picker.Item label={val.label} value={val.value} key={i} />
                            )
                        })
                    }
                </Picker>
            </View>
        );
    }
}