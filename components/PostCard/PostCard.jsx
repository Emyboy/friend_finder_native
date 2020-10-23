import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Global from '../../Global';

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class CardImageExample extends Component {
    render() {
        const { authData } = this.props.auth
        console.log('Post Cart authDAta ---', authData);
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: authData.avatar_url }} style={{ 
                            width: 30,
                            height: 30
                        }} />
                        <Body>
                            <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>{authData.username}</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: authData.banner_url }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent onPress={() => {}}>
                            <AntDesign name='hearto' size={20} />
                            <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>12</Text>
                        </Button>
                        <Button transparent onPress={() => {}}>
                            <FontAwesome5 name='comment' size={20} />
                            <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>1,234</Text>
                        </Button>
                    </Left>
                    {/* <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>4 Comments</Text>
                        </Button>
                    </Body> */}
                    <Right>
                        <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>11h ago</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{ color: Global.PRIMARY_COLOR_DARK }}>
                            Your text here Your text here our text hereYour text here ur text here
                            Your text here Your text hereYour text hereYour text hereYour text here
                </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
});
