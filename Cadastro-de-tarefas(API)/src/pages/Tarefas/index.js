import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    carregarTarefas().then(() => setLoading(false));
  }, []);

  const carregarTarefas = async () => {
    const response = await api.get('/tasks');
    setTarefas(response.data);
  };

  const navigation = useNavigation();

  const irFormulario = () => {
    navigation.navigate('Formulario', { atualizarLista: carregarTarefas });
  };

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      <ScrollView contentContainerStyle={styles.listContent}>
        {tarefas.map((item) => (
          <Card key={item.id} data={item} funcCarregarTarefas={carregarTarefas} />
        ))}
      </ScrollView>
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={irFormulario}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onPressIn={Platform.OS !== 'web' ? showTooltip : null}
        onPressOut={Platform.OS !== 'web' ? hideTooltip : null}
      >
        <Text style={styles.addButtonText}>+</Text>
        {tooltipVisible && (
          <Text style={styles.dicaText}>Adicionar Tarefa</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
