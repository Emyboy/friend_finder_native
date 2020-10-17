import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from 'expo';

export default class Example extends Component {
    render() {
        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];

        return (
            <Dropdown
                label='Favorite Fruit'
                data={data}
                animationDuration={2000}
            />
        );
    }
}