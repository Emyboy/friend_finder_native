import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Text, Right } from 'native-base';
import { Image } from 'react-native';
import Global from '../../Global';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)((props) => {
    const { authData } = props.auth;
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: authData.avatar_url }} style={{
                        width: 40,
                        height: 40
                    }} />
                    <Body>
                        <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>Liked your post</Text>
                        <Text note>1 days ago</Text>
                    </Body>
                </Left>
                <Right>
                    {/* <Thumbnail source={{ uri: authData.avatar_url }} style={{
                        width: 30,
                        height: 30
                    }} /> */}
                    <Image source={{ uri: authData.banner_url }} style={{ height: 60, width: 60 }} />
                </Right>
            </CardItem>
        </Card>
    )
})

const styles = StyleSheet.create({
    notification: {

    }
})

