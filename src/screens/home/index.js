import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

<<<<<<< HEAD
const launchscreenBg = require("../../../assets/background.png");
=======
const launchscreenBg = require("../../../assets/launchscreen-bg.png");
>>>>>>> origin/startreadme
const launchscreenLogo = require("../../../assets/Coacher-logo2.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ marginTop: 40 }}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 60,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>A Mobile Application Presented By:</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Randy Aahkus, Kenny Perkins, and Viet Vo</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("FixedLabel")}
            >
              <Text>Log in!</Text>
            </Button>
            
          </View>
          <View style={{ marginBottom: 40 }}>
            <Button
              style={{ backgroundColor: "#6FAF70", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("InlineLabel")}
            >
              <Text>Register</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
