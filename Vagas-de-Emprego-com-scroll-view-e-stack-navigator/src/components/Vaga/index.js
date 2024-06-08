import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Vaga = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.botao}>Saiba mais</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Vaga;