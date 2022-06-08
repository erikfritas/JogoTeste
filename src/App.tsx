import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Finger } from './components/Renderers';
import { MoveFinger } from './components/Systems';

const App: React.FC = () => {
  return (
    <GameEngine
      style={styles.container}
      systems={[MoveFinger]}
      entities={{
        0: { position: [40, 200], renderer: Finger },
        1: { position: [100, 200], renderer: Finger },
        2: { position: [160, 200], renderer: Finger },
        3: { position: [220, 200], renderer: Finger },
        4: { position: [280, 200], renderer: Finger },
      }}
    >
      <StatusBar hidden />
    </GameEngine>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

export default App;