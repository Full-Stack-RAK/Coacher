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
  Text
} from "native-base";
import styles from "./styles";
import axios from "axios";

class FloatingLabel extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  clickPost() {
    var url = 'http://169.234.74.212:3210/api/users'; //use ipv4 address
    axios.post(url, {
      name: this.state.name,
      email: this.state.email
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.state.name = '';
    this.state.email = '';
  };

  clickGet() {
    var url = 'http://169.234.74.212:3210/api/users';
    axios.get(url)
      .then((result) => {
        console.log(result.data);
        this.setState({
          name: result.data.name,
          email: result.data.email
        })
      })
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   var url= "http://169.234.65.206:3001/users";
  //   if (this.state.name && this.state.email) {
  //     user.saveUser(url, {
  //       name: this.state.name,
  //       email: this.state.email,
  //       date: Date.now
  //     })
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }
  // };

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
            <Title>Floating Label</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
                // name="name"
              />
            </Item>
            <Item floatingLabel last>
              <Label>E-mail</Label>
              <Input
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                // name="email"
              />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.clickPost.bind(this)}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;