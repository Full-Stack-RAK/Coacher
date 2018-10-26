import React from "react";
import { MapView } from "expo";

export default class FirstFour extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 33.6449487,
          longitude: -117.8347771,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}