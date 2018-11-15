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
  Toast
} from "native-base";
import styles from "./styles";
import user from "../../utils/userAPI";
import mentor from "../../utils/mentorAPI";

class FixedLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isUser: true,
      isMentor: false,
      UserMentor: {}
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
    if (this.state.isUser) {
      this.setState.UserMentor = user.getUserByName(this.state.name);
      if (UserMentor){
        
      }
    } else if (this.state.isMentor) {

    }
  }

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
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
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

          <Button block style={{ margin: 15, marginTop: 50 }}
            onPress={this.handleFormSubmit.bind(this)} //{() => this.props.navigation.navigate("FirstOne")}
          >
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FixedLabel;
