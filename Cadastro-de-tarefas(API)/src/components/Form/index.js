import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Form({ route }) {
  const [id, setId] = useState(route.params?.id);
  const [newTitle, setNewTitle] = useState(route.params?.title);
  const [newDescription, setNewDescription] = useState(route.params?.description);

  const navigation = useNavigation();

  const salvarTarefa = async () => {
    const body = { title: newTitle, description: newDescription };

    try {
      if (id) {
        await api.put(`/tasks/${id}`, body);
      } else {
        await api.post('/tasks', body);
      }

      route.params?.atualizarLista();
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={newTitle}
        onChangeText={setNewTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={newDescription}
        onChangeText={setNewDescription}
      />
      <Button title="Salvar" onPress={salvarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    marginVertical: 5,
  },
});
