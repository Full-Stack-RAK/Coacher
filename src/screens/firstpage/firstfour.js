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
  Body
} from "native-base";
import styles from "./styles";
import db from "../../utils/mentorBidAPI";

class FirstFour extends Component {
  constructor() {
    state = {
      results: []
    };
    componentDidMount() {
      this.getUserBids();
    }
    getUserBids = () => {
    db.getMentorBids()
      .then(res => this.setState({ res }));
    };
  }
  render() {
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
          <ListItem itemDivider>
            <Text>Bid Title</Text>
          </ListItem>
          <ListItem>
            <Text>Email</Text>
          </ListItem>
          <ListItem>
            <Text>Name</Text>
          </ListItem>
          <ListItem>
            <Text>User ID</Text>
          </ListItem>
          <ListItem>
            <Text>Address</Text>
          </ListItem>
          <ListItem last>
            <Text>Date Requested?</Text>
          </ListItem>
          
         </List>
        </Content>
      </Container>
    );
  }
}

export default FirstFour;
