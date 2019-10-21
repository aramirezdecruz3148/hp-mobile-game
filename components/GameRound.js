import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function GameRound({ round }) {
  return (
    <View>
      <Text>Round: {round}</Text>
    </View>
  );
}

GameRound.propTypes = {
  round: PropTypes.number.isRequired
};
