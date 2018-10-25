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
// class exampleClass {
//     constructor(username, name, email, bidMessage, bidDate) {
//         this.username = username;
//         this.name = name;
//         this.email = email;
//         this.bidMessage = bidMessage;
//         this.bidDate = bidDate;
//     }
// }
// const class1 = new exampleClass("AllenUser", "Allen", "viet.allen.qvo@gmail.com", "Looking for someone to help me with my jumpshot", "10/30/2018");
// const class2 = new exampleClass("KennyUser", "Kenny", "kenny@gmail.com", "Looking for a reliable spotter at the gym", "10/29/2018");
// let exampleArray =  [class1, class2];

class NHListHeader extends Component {
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
            <Title>Pending Bids</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
          <List>
              <ListItem itemHeader>
                <Text>
                    AllenUser Bid: "Looking for someone to help me with my jumpshot"
                </Text>
              </ListItem>
              <ListItem >
                <Text>
                   viet.allen.qvo@gmail.com
                </Text>
              </ListItem>
              <ListItem >
                <Text>
                    10/30/2018
                </Text>
              </ListItem>
          </List>

        </Content>
      </Container>
    );
  }
}

export default NHListHeader;
