import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameRound from './components/GameRound';

export default function App() {
  return (
    <View style={styles.container}>
      <GameRound round={3} />
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
