import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

function ListaCompras() {
  const [itens, setItens] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeItem, setNomeItem] = useState('');
  const [quantidadeItem, setQuantidadeItem] = useState('');
  const [editando, setEditando] = useState(null);

  const carregarItens = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@itens');
      if (jsonValue != null) {
        setItens(JSON.parse(jsonValue));
      } else {
        const itensIniciais = [
          { id: Date.now().toString() + '1', nome: 'Leite', quantidade: '1L' },
          { id: Date.now().toString() + '2', nome: 'Pão', quantidade: '12' },
          { id: Date.now().toString() + '3', nome: 'Queijo', quantidade: '500g' },
        ];
        setItens(itensIniciais);
        salvarItens(itensIniciais);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    carregarItens();
  }, [carregarItens]);

  const salvarItens = async (itens) => {
    try {
      const jsonValue = JSON.stringify(itens);
      await AsyncStorage.setItem('@itens', jsonValue);
      setItens(itens);
    } catch (e) {
      console.error(e);
    }
  };

  const adicionarItem = () => {
    if (nomeItem.trim() && quantidadeItem.trim()) {
      const novoItem = { id: Date.now().toString(), nome: nomeItem, quantidade: quantidadeItem };
      const novosItens = [...itens, novoItem];
      salvarItens(novosItens);
      setNomeItem('');
      setQuantidadeItem('');
      setModalVisible(false);
    }
  };

  const editarItem = () => {
    if (nomeItem.trim() && quantidadeItem.trim()) {
      const novosItens = itens.map((item) =>
        item.id === editando ? { ...item, nome: nomeItem, quantidade: quantidadeItem } : item
      );
      salvarItens(novosItens);
      setNomeItem('');
      setQuantidadeItem('');
      setEditando(null);
      setModalVisible(false);
    }
  };

  const removerItem = (id) => {
    const novosItens = itens.filter((item) => item.id !== id);
    salvarItens(novosItens);
  };

  const abrirModal = (item = null) => {
    setNomeItem(item ? item.nome : '');
    setQuantidadeItem(item ? item.quantidade : '');
    setEditando(item ? item.id : null);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - {item.quantidade}</Text>
            <View style={styles.iconeContainer}>
              <TouchableOpacity onPress={() => abrirModal(item)}>
                <Text style={styles.botaoTextoAcao}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removerItem(item.id)}>
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
          <Text>Nome do Item</Text>
          <TextInput
            style={styles.input}
            value={nomeItem}
            onChangeText={setNomeItem}
          />
          <Text>Quantidade</Text>
          <TextInput
            style={styles.input}
            value={quantidadeItem}
            onChangeText={setQuantidadeItem}
          />
          <View style={styles.botoesModal}>
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            <Button title="Salvar" onPress={editando ? editarItem : adicionarItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ListaCompras;
