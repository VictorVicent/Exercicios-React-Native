import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import api from '../../services/api';
import styles from './styles';

export default function Cep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const consultaCep = async (cep) => {
    try {
      const response = await api.get(`/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.error('Erro ao buscar o CEP: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CEP x Endereço</Text>
      <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        placeholder="Digite o CEP..."
      />
      <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />
      {endereco.cep && <Text style={styles.endereco}>CEP: {endereco.cep}</Text>}
      <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
      <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.endereco}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.endereco}>Estado: {endereco.uf}</Text>
    </View>
  );
}
