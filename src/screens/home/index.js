import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>App to find</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>mentors for all your needs</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("FixedLabel")}
            >
              <Text>Log in!</Text>
            </Button>
            <Button
              style={{ backgroundColor: "#6FAF70", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("InlineLabel")}
            >
              <Text>Create a user!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
