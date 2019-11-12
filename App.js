import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Game from './Game';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Game />
      </View>
    </Provider>
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