import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import Global from '../Global';
import { AntDesign } from '@expo/vector-icons';

export default class FABExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: Global.PRIMARY_COLOR }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <AntDesign name='edit' style={{ color: Global.PRIMARY_COLOR_DARK }} />
            </Fab>
        );
    }
}