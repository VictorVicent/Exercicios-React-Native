import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [editando, setEditando] = useState(null);

  const carregarTarefas = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tarefas');
      if (jsonValue != null) {
        setTarefas(JSON.parse(jsonValue));
      } else {
        const tarefasIniciais = [
          { id: Date.now().toString() + '1', nome: 'Estudar Dart' },
          { id: Date.now().toString() + '2', nome: 'Estudar Flutter' },
          { id: Date.now().toString() + '3', nome: 'Estudar SQL' },
        ];
        setTarefas(tarefasIniciais);
        salvarTarefas(tarefasIniciais);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    carregarTarefas();
  }, [carregarTarefas]);

  const salvarTarefas = async (tarefas) => {
    try {
      const jsonValue = JSON.stringify(tarefas);
      await AsyncStorage.setItem('@tarefas', jsonValue);
      setTarefas(tarefas);
    } catch (e) {
      console.error(e);
    }
  };

  const adicionarTarefa = () => {
    if (nomeTarefa.trim()) {
      const novaTarefa = { id: Date.now().toString(), nome: nomeTarefa };
      const novasTarefas = [...tarefas, novaTarefa];
      salvarTarefas(novasTarefas);
      setNomeTarefa('');
      setModalVisible(false);
    }
  };

  const editarTarefa = () => {
    if (nomeTarefa.trim()) {
      const novasTarefas = tarefas.map((tarefa) =>
        tarefa.id === editando ? { ...tarefa, nome: nomeTarefa } : tarefa
      );
      salvarTarefas(novasTarefas);
      setNomeTarefa('');
      setEditando(null);
      setModalVisible(false);
    }
  };

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    salvarTarefas(novasTarefas);
  };

  const abrirModal = (tarefa = null) => {
    setNomeTarefa(tarefa ? tarefa.nome : '');
    setEditando(tarefa ? tarefa.id : null);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefa}>
            <Text>{item.nome}</Text>
            <View style={styles.iconeContainer}>
              <TouchableOpacity onPress={() => abrirModal(item)}>
                <Text style={styles.botaoTextoAcao}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                <Text style={styles.botaoTextoAcao}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => abrirModal()}>
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Nome da Tarefa</Text>
          <TextInput
            style={styles.input}
            value={nomeTarefa}
            onChangeText={setNomeTarefa}
          />
          <View style={styles.botoesModal}>
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            <Button title="Salvar" onPress={editando ? editarTarefa : adicionarTarefa} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Tarefas;
