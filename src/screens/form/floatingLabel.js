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

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
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
    if (this.state.name && this.state.email && this.state.isUser) {
      user.saveUser({
        name: this.state.name,
        email: this.state.email,
        date: Date.now
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    if (this.state.name && this.state.email && this.state.isMentor) {
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