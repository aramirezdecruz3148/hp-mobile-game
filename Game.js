import React from 'react';
import { View } from 'react-native';
import GameRound from './components/GameRound';
import OpponentStats from './components/OpponentStats';
import PlayerStats from './components/PlayerStats';
import PlayerSpells from './components/PlayerSpells';
import OutcomeModal from './components/OutcomeModal';

export default function Game() {
  return (
    <View>
      <GameRound round={3} />
      <OpponentStats 
      name="Draco Malfoy" 
      image="https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/350?cb=20180116013508" 
      health={10} />
      <PlayerStats health={8} />
      <PlayerSpells spellArray={[
        {
          spell: "Anteoculatia",
          type: "Hex",
          effect: "turns opponent's hair into antlers",
          damage: -1,
          outcome: `You were hit with the Anteoculatia hex, which caused
          giant antlers to sprout on your head and took 1 damage point from
          your health`
        },
        {
          spell: "Avis",
          type: "Spell",
          effect: "launches birds at your opponent",
          damage: -2,
          outcome: `You were hit with the Avis spell, which caused birds to swarm
          and attack you and took 2 damage points from your health`
        },
        {
          spell: "Babbling Curse ",
          type: "Curse",
          effect: "makes opponent endlessly babble",
          damage: -1,
          outcome: `You were hit with the Babbling curse, which is caused you to 
          endlessly babble none sense and took 2 damage points from your health`
        }
      ]} />
      <OutcomeModal />
    </View>
  );
}