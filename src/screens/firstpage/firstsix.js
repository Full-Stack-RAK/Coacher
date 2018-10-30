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
    mentorbids.getMentorBid(this.props)
      .then(res => this.setState({ mentorBidData: res.data }))
      .catch(err => console.log(err));
  };

  acceptBid() {
      mentorbids.updateMentorBid({ userAccepted: true })
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
          <Body>
            <Title>Mentor Bid</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
        </Content>
      </Container>
    );
  }
}

export default FirstSix;
