import React from "react";
import { Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body } from "expo";
import styles from "../anatomy/styles";

export default class FirstFour extends React.Component {
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
            <Text>Scheduled Date</Text>
          </ListItem>
          <ListItem>
            <Text>Scheduled Time</Text>
          </ListItem>
          <ListItem last>
            <Text>Location</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
