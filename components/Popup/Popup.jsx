import React from 'react'
import { Portal, Dialog, Title } from 'react-native-paper';
import Btn from '../Btn/Btn';
import { popup } from '../../redux/actions/view.action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    view: state.view
});

const mapDispatchToProps = {
    Popup: popup
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    const { showPopup, popupMessage, popupTitle } = props.view;
    return (
        <Portal>
            <Dialog visible={showPopup} onDismiss={() => { }}>
                <Dialog.Title>{popupTitle}</Dialog.Title>
                <Dialog.Content>
                    <Title>{popupMessage}</Title>
                </Dialog.Content>
                <Dialog.Actions>
                    <Btn text='Ok' onPress={() => {
                        props.Popup({
                            show: false
                        })
                    }} />
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
});

