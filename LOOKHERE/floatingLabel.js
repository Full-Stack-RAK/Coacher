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
  ListItem,
  Radio
} from "native-base";
import styles from "./styles";
import user from "../../utils/userAPI";
import mentor from "../../utils/mentorAPI";

class FloatingLabel extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      user1: true,
      mentor: false
    };
  }
  toggleuser() {
    this.setState({
      user1: true,
      mentor1: false,
    });
  }
  togglementor() {
    this.setState({
      user1: false,
      mentor1: true,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.user) {
      user.saveUser({
        name: this.state.name,
        email: this.state.email,
        date: Date.now
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    if(this.state.name && this.state.email){
      mentor.saveMentor({
        name: this.state.name,
        email: this.state.email,
        date: Date.now
      })
        .then(res => console.log(res))
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
          <ListItem
            selected={this.state.user}
            onPress={() => this.toggleuser()}
          >
            <Left>
              <Text>User</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.user}
                onPress={() => this.toggleuser()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.mentor}
            onPress={() => this.togglementor()}
          >
            <Left>
              <Text>Mentor</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.mentor}
                onPress={() => this.togglementor()}
              />
            </Right>
          </ListItem>
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