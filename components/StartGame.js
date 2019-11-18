import React from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";

export default function StartGame({ setGame }) {
  return (
    <View>
      <Button 
        title="Start Game" 
        onPress={setGame}
      />
    </View>
  );
}

StartGame.propTypes = {
  setGame: PropTypes.func.isRequired
}