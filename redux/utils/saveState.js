import { AsyncStorage } from 'react-native';

const saveState = (state) => {
    try {
        const storedState = JSON.stringify(state);
        AsyncStorage.setItem('state', storedState);
    } catch (err) {
        return undefined;
    }
};

export default saveState;
