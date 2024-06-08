import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sinopseStyles as styles } from './styles';
import { useRoute } from '@react-navigation/native';

export default function Sinopse() {
  const route = useRoute();
  const [sinopse, setSinopse] = useState('');

  useEffect(() => {
    const { filmeId } = route.params;
    fetch(`https://sujeitoprogramador.com/r-api/?api=filmes/${filmeId}`)
      .then(response => response.json())
      .then(data => {
        setSinopse(data.sinopse);
      })
      .catch(error => console.error(error));
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sinopse do Filme</Text>
        <Text style={styles.sinopseText}>{sinopse}</Text>
      </View>
    </View>
  );
}
