import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  List
} from "native-base";
import styles from "./styles";
import mentorbids from "../../utils/mentorBidAPI";

class FirstFour extends Component {

  state ={
    mentorBidData: []
  }

  componentDidMount() {
    this.callMentorBids();
  }

  callMentorBids() {
    mentorbids.getMentorBids()
      .then(res => this.setState({ mentorBidData: res.data }))
      .catch(err => console.log(err));
  };

  render() {

    console.log(this.state)

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>User Bids</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            {this.state.mentorBidData.map(bid => (
              <ListItem key={bid._id}>
                <Text>
                  {bid.name} : {bid.email}
                </Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default FirstFour;