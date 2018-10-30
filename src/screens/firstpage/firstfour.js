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
  FlatList
} from "native-base";
import styles from "./styles";
// import mentorbids from "../../utils/mentorBidAPI";

class FirstFour extends Component {

  state = {
    mentorBidData: [],
    selected: ""
  }

  componentWillMount() {
    this.callMentorBids();
  }

  callMentorBids = async () => {
  const response = await fetch("http://192.168.1.123:3210/api/mentorBid");
  const json = await response.json();
  this.setState({mentorBidData: json})
  };

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
        <FlatList
            data={this.state.mentorBidData}
            extraData={this.state}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => {
              return (
  
                <ListItem
                  selected={this.state.selected === item}
                  onPress={() => this.setState({ selected: item })}
                >
                <Left>
                  <Text>
                    {`${item.name} : ${item.email} `}
                  </Text>
                </Left>
                <Right>
                  <Text>
                    { `Date ${item.dateBid}` }
                  </Text>
                </Right>
              </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default FirstFour;