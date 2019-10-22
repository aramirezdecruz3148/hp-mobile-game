import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function OpponentStats({ name, image, health }) {
  return (
    <>
    <View>
      <Image style={{width: 80, height: 80}} source={{ uri: image }} />
    </View>
    <View>
      <Text>{name}</Text>
      <Text>Health: {health}</Text>
    </View>
    </>
  );
}

OpponentStats.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired
};