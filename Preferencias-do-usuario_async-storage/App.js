import React from 'react';
import { View, StyleSheet } from 'react-native';
import Frases from './src/pages/Frases';

function App() {
  return (
    <View style={styles.appContainer}>
      <Frases />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
