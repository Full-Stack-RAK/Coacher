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
            <Title>Welcome User</Title>
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
                  My Profile
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("FirstThree")}>
              <Body>
                <Text>
                  Create a Mentoring Request
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("FirstFour")}>
              <Body>
                <Text>
                  Pending Requests
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate("Home")}>
              <Text>Home</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default FirstOne;
