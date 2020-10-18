import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Btn from '../Btn/Btn';

const MyComponent = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            {/* <Appbar.BackAction onPress={() => { }} /> */}
            {/* <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={() => { }} /> */}
            {/* <Appbar.Action icon="menu" onPress={() => { }} />
            <Appbar.Action icon="profile" onPress={() => { }} /> */}
        </Appbar.Header>
    );
};

export default MyComponent;