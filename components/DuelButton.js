import React from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";

export default function DuelButton({ setDuel }) {
  return (
    <View>
      <Button 
        title="Duel"
        onPress={setDuel}
      />
    </View>
  );
}

DuelButton.propTypes = {
  setDuel: PropTypes.func.isRequired
}