import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import api from '../../services/api';
import styles from './styles';

const AppPerfilDevs = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await api.get(username);
      setUserData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Perfil de Devs</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o usuário do GitHub"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <Button title="Buscar" onPress={fetchUserData} />
      </View>
      {userData && (
        <View style={styles.userDataContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: userData.avatar_url }}
          />
          <Text>ID: {userData.id}</Text>
          <Text>Nome: {userData.name}</Text>
          <Text>Repositórios: {userData.public_repos}</Text>
          <Text>Criado em: {userData.created_at}</Text>
          <Text>Seguidores: {userData.followers}</Text>
          <Text>Seguindo: {userData.following}</Text>
        </View>
      )}
    </View>
  );
};

export default AppPerfilDevs;
