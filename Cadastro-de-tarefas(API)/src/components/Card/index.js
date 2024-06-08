import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

function Card({ data, funcCarregarTarefas }) {
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);

  useEffect(() => {
    setTitle(data?.title);
    setDescription(data?.description);
  }, [data]);

  const navigation = useNavigation();

  const excluirTarefa = async () => {
    await api.delete(`/tasks/${data.id}`);
    await funcCarregarTarefas();
  };

  const irFormulario = () => {
    navigation.navigate('Formulario', { 
      id: data.id, 
      title, 
      description, 
      atualizarLista: funcCarregarTarefas 
    });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.descricao}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#E0FFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    padding: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonEditar: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'yellow',
  },
  buttonExcluir: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'tomato',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Card;
