import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  DatePicker,
  Picker
} from "native-base";
import styles from "./styles";
import userBid from "../../utils/userBidAPI";

class FixedLabel extends Component {

  constructor() {
    super();
    this.state = {
      name: "allen",
      email: "allen@gmail.com",
      signedInID: "5bd7803494caaa026ced7188",
      userBidTitle: "",
      time: "",
      address: "",
      dateRequested: null
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.userBidTitle && this.state.requestDate && this.state.address) {
      userBid.saveUserBid({
        name: this.state.name,
        email: this.state.email,
        bidTitle: this.state.userBidTitle,
        address: this.state.address,
        userID: this.state.signedInID,
        dateRequested: this.state.dateRequested
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    // }
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
            <Title>Bid Creator</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Bid Title:</Label>
              <Input 
                value={this.state.userBidTitle}
                onChangeText={(userBidTitle) => this.setState({ userBidTitle })}
              />
            </Item>
            <Item fixedLabel>
              <Label>Schedule Date:</Label>
              <DatePicker
                defaultDate={new Date(2018, 10, 30)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2019, 12, 31)}
                locale={"en"}
                minuteInterval={15}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"spinner"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                value={this.state.dateRequested}
                onDateChange={(dateRequested) => this.setState({ dateRequested })}
              />
            </Item>
            <Item fixedLabel>
              <Label>Schedule Time:</Label>
              <Input
              value={this.state.time}
              onChangeText={(time) => this.setState({ time })}
              />
            </Item>
            <Item fixedLabel>
              <Label>Where:</Label>
              <Input
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleFormSubmit.bind(this)}>
            <Text>Request Mentoring</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FixedLabel;
