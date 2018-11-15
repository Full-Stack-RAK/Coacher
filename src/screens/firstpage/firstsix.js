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

class FirstSix extends Component {

  state = {
    mentorBidData: {}
  }

  componentDidMount() {
    this.callMentorBids();
  }

  callMentorBids() {
    mentorbids.getMentorBid(this.props.navigation.state.params.itemID)
      .then(res => this.setState({ mentorBidData: res.data }))
      .catch(err => console.log(err));
  };

  acceptBid() {
    mentorbids.updateMentorBid(this.props.navigation.state.params.itemID, { userAccepted: true })
      .then(res => console.log(this.state))
  }

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
          <Body >
            <Title>Mentor Bid</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Left>
            <Text>
              Name: {this.state.mentorBidData.name}   Email:    {this.state.mentorBidData.email}
            </Text>
          </Left>
          <Right>
            <Text>
              Posted: {Date(this.state.mentorBidData.datebid)}
            </Text>
            <Button onPress={() => this.acceptBid()}>
              <Text> Accept</Text>
            </Button>
          </Right>

        </Content>

      </Container>

    );
  }
}

export default FirstSix;
