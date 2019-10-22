import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameRound from './components/GameRound';
import OpponentStats from './components/OpponentStats';

export default function App() {
  return (
    <View style={styles.container}>
      <GameRound round={3} />
      <OpponentStats 
      name="Draco Malfoy" 
      image="https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/350?cb=20180116013508" 
      health={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
