import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function PlayerStats({ health }) {
  return (
  <View>
    <Text>Your Health: {health}</Text>
  </View>
  );
}

PlayerStats.propTypes = {
  health: PropTypes.number.isRequired
};