import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Card from '../../components/Card';

function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      
      <Card title="Graduação:" text="- Bacharelado em Engenharia de Computação, Universidade Federal de São Paulo (UNIFESP), Concluído em 2020" />
      
      <Card title="Pós-Graduação:" text="- Mestrado em Ciência da Computação, Universidade Estadual de Campinas (UNICAMP), Em andamento" />
      
      <Card title="Cursos Complementares:" text="- Curso de Desenvolvimento de Aplicativos Mobile, Udemy, Concluído em 2021
- Curso de Inteligência Artificial, Coursera, Concluído em 2019" />
    </View>
  );
}

export default Formacao;
