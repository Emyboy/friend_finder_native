// import * as React from 'react';
// import { Appbar } from 'react-native-paper';
// import Global from '../../Global';

// const MyComponent = () => {
//     const _goBack = () => console.log('Went back');

//     const _handleSearch = () => console.log('Searching');

//     const _handleMore = () => console.log('Shown more');

//     return (
//         <Appbar.Header style={{
//             backgroundColor: Global.PRIMARY_COLOR
//         }}>
//             <Appbar.Action style={{ color: 'white' }} icon={'menu'} onPress={_goBack} />
//             {/* <Appbar.Content title="Title" subtitle="Subtitle" /> */}
//             <SearchBox />
//             {/* <Appbar.Action style={{ color: 'white' }} icon="magnify" onPress={_handleSearch} /> */}
//             <Appbar.Action style={{ color: 'white' }} icon="dots-vertical" onPress={_handleMore} />
//         </Appbar.Header>
//     );
// };

// export default MyComponent;

import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Global from '../../Global';
import SearchBox from '../SearchBox/SearchBox';

const MyComponent = () => {

    const [showSearch, setShowSearch] = React.useState(false);
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{
            backgroundColor: Global.PRIMARY_COLOR
        }}>
            <Appbar.Action icon='menu' onPress={_goBack} />
            {
                showSearch ?
                    <SearchBox />
                    :
                    <>
                        <Appbar.Content title="Title" subtitle="Subtitle" />
                        <Appbar.Action icon="magnify" onPress={() => setShowSearch(!showSearch)} />
                    </>
            }
            {
                showSearch ?
                    <Appbar.Action icon="close" onPress={() => setShowSearch(!showSearch)} /> :
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            }
        </Appbar.Header>
    );
};

export default MyComponent;