import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';

function DetalhesProduto() {
  const route = useRoute();
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.foto }} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.titulo}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}

export default DetalhesProduto;
