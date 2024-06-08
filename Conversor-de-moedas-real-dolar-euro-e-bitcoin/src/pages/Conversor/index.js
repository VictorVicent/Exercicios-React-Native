import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getConversionRate } from '../../services/api';
import styles from './styles';

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('BRL');
  const [valorConvertido, setValorConvertido] = useState(null);

  const converterMoeda = async () => {
    try {
      const taxa = await getConversionRate(moedaOrigem, moedaDestino);
      setValorConvertido((valor * taxa).toFixed(2));
    } catch (error) {
      console.error('Erro ao buscar a taxa de conversão', error);
    }
  };

  const alterarValor = (valorInput) => {
    if (/^\d*\.?\d*$/.test(valorInput)) {
      setValor(valorInput);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Valor: </Text>
        <TextInput
          keyboardType="numeric"
          value={valor}
          onChangeText={(text) => alterarValor(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>De: </Text>
        <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
          style={styles.select}
        >
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Bitcoin" value="BTC" />
          <Picker.Item label="Real" value="BRL" />
        </Picker>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Para: </Text>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
          style={styles.select}
        >
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Bitcoin" value="BTC" />
          <Picker.Item label="Real" value="BRL" />
        </Picker>
      </View>
      <Button onPress={converterMoeda} title="Converter" />
      {valorConvertido && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Valor convertido: {valorConvertido}</Text>
        </View>
      )}
    </View>
  );
};

export default Conversor;
