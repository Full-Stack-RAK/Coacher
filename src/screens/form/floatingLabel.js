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
import user from "../../utils/userAPI";

class FloatingLabel extends Component {

  state = {
    name: "",
    email: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      user.saveUser({
        name: this.state.name,
        email: this.state.email,
        date: Date.now
      })
        .then(console.log(res))
        .catch(err => console.log(err));
    }
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
                onChangeText={(name) => this.setState({name})}
                name="name"
              />
            </Item>
            <Item floatingLabel last>
              <Label>E-mail</Label>
              <Input
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
                name="email"
              />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleFormSubmit}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;
