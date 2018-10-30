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

class FirstFour extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kenny",
      email: "kenster@gmail.com",
      signedInID: "5bd754800a23b156885a0452",
      userBidTitle: "",
      address: "",
      dateRequested: null
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

         
        </Content>
      </Container>
    );
  }
}

export default FirstFour;
