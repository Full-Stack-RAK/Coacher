import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import styles from "./styles";

class FirstOne extends Component {
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
            <Title>User Page Post-Login</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>Testing page for Users</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  User's info will be elaborated here and they will have three button options
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("FirstTwo")}>
              <Body>
                <Text>
                  1. First button navigates to a Profile page they can edit
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("FirstThree")}>
              <Body>
                <Text>
                  2. Second button will allow them to route to a create bid page
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("FirstFourth")}>
              <Body>
                <Text>
                  3. Third button will take them to a pending bids page
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("Home")}>
              <Text>User's Info Footer. Also this will take you to home page!</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default FirstOne;
