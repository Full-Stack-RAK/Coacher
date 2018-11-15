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
  Radio,
  Toast
} from "native-base";
import styles from "./styles";
import user from "../../utils/userAPI";
import mentor from "../../utils/mentorAPI";

class FloatingLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isUser: true,
      isMentor: false
    };
  }

  toggleuser() {
    this.setState({
      isUser: true,
      isMentor: false
    });
  }
  togglementor() {
    this.setState({
      isUser: false,
      isMentor: true
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (password === passwordCheck) {
      if (this.state.name && this.state.email && this.state.isUser && this.state.password) {
        user.saveUser({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          date: Date.now
        })
          .then(() => this.props.navigation.navigate("FixedLabel"))
          .catch(err => console.log(err));
      }
      if (this.state.name && this.state.email && this.state.isMentor && this.state.password) {
        mentor.saveMentor({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          date: Date.now
        })
          .then(() => this.props.navigation.navigate("FixedLabel"))
          .catch(err => console.log(err));
      }
    } else if (!password === passwordCheck) {
      Toast.show({
        text: "Passwords don't match!",
        buttonText: "Okay"
      })
    } else {
      Toast.show({
        text: "Please complete the form!",
        buttonText: "Okay"
      })
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
            <Title>Register</Title>
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
              />
            </Item>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Retype Password</Label>
              <Input
                secureTextEntry
                value={this.state.passwordCheck}
                onChangeText={(passwordCheck) => this.setState({ passwordCheck })}
              />
            </Item>
          </Form>

          <ListItem
            selected={this.state.isUser}
            onPress={() => this.toggleuser()}
          >
            <Left>
              <Text>User</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.isUser}
                onPress={() => this.toggleuser()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.isMentor}
            onPress={() => this.togglementor()}
          >
            <Left>
              <Text>Mentor</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.isMentor}
                onPress={() => this.togglementor()}
              />
            </Right>
          </ListItem>

          <Button block style={{ margin: 15, marginTop: 50 }} onPress={this.handleFormSubmit.bind(this)}>
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
export default FloatingLabel;