import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function DetalhesVaga({ route }) {
  const { titulo, salario, descricao, contato } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.text}>Salário: {salario}</Text>
      <Text style={styles.text}>Descrição: {descricao}</Text>
      <Text style={styles.text}>Contato: {contato}</Text>
    </View>
  );
}

export default DetalhesVaga;
