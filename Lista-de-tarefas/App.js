import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tarefas from './src/pages/Tarefa/index';

function App() {
  return (
    <View style={styles.container}>
      <Tarefas />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
