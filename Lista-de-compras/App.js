import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaCompras from './src/pages/Compras';

function App() {
  return (
    <View style={styles.container}>
      <ListaCompras />
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
