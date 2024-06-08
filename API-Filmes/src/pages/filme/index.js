import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { filmeListStyles as styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function FilmeList() {
  const navigation = useNavigation();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
      .then(response => response.json())
      .then(data => {
        setFilmes(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const navigateToSinopse = (filmeId) => {
    navigation.navigate('Sinopse', { filmeId });
  };

  const renderFilmes = () => {
    return filmes.map(filme => (
      <View key={filme.id} style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{filme.nome}</Text>
        <Image
          source={{ uri: filme.foto }}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToSinopse(filme.id)}
        >
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {renderFilmes()}
    </ScrollView>
  );
}
