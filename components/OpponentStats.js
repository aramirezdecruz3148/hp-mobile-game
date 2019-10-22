import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function OpponentStats({ name, image, health }) {
  return (
    <>
    <View>
      <Image style={{
      width: 80, 
      height: 80, 
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'black' }} source={{ uri: image }} />
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