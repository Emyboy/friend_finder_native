import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Text } from 'react-native';
import { connect } from 'react-redux';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {

}

const PostCard = connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    const { authData } = props.auth;
    console.log('POST CARD AUTH', authData);
    // console.log('__DEV__', __DEV__)
    return (
        <Card style={{ marginTop: 10 }}>

            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={
                <Avatar.Image size={24} source={require(authData.avatar_url)} />
            } /> */}
            <Card.Cover source={{ uri: authData.banner_url }} />
            <Card.Actions>
            </Card.Actions>
            <Card.Content>
                {/* <Title>Card title</Title> */}
                <Text>
                    kdla dkslkdlsdklskd sldklsdk
            </Text>
            </Card.Content>
            {/* <Paragraph>
            aldksldk lskd sldkd lk
        </Paragraph> */}
        </Card>
    )
});

export default PostCard;