import React from 'react'
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper';
import Btn from '../Btn/Btn';
import { popup } from '../../redux/actions/view.action';
import { connect } from 'react-redux';
import Global from '../../Global';

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
                {/* <Dialog.Title>{popupTitle}</Dialog.Title> */}
                <Dialog.Content>
                    <Paragraph>{popupMessage}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => {
                        props.Popup({
                            show: false
                        })
                    }}
                        style={{ color: Global.PRIMARY_COLOR }}
                    >Ok</Button>
                    {/* <Btn text='Ok' onPress={() => {
                        props.Popup({
                            show: false
                        })
                    }} /> */}
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
});

