import React from "react";
import { SafeAreaView, FlatList, Text, View} from "react-native";
import PropTypes from "prop-types";

function Spell({ spell, type, effect }) {
  return (
    <View>
      <Text>{spell}</Text>
      <Text>{type}</Text>
      <Text>{effect}</Text>
    </View>
  );
}

Spell.propTypes = {
  spell: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired
}

export default function PlayerSpells({ spellArray }) {
  return (
    <SafeAreaView>
      <FlatList 
        data={spellArray}
        renderItem={({ item }) => (<Spell 
          spell={item.spell} 
          type={item.type} 
          effect={item.effect}
          keyExtractor={item.spell} 
        />)}
      />
    </SafeAreaView>
  );
}

PlayerSpells.propTypes = {
  spellArray: PropTypes.arrayOf(PropTypes.shape({
    spell: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    effect: PropTypes.string.isRequired
  })).isRequired
}