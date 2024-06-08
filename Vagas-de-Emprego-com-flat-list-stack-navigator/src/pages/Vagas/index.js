import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: 1, titulo: 'Gerente de Marketing', salario: 'R$2000', descricao: 'Gerenciar bem uma equipe', contato: 'fulano@email.com' },
  { id: 2, titulo: 'Desenvolvedor FrontEnd', salario: 'R$3000', descricao: 'Trabalhar com FrontEnd', contato: 'ciclano@email.com' },
  { id: 3, titulo: 'Arquiteto de Software', salario: 'R$3000', descricao: 'Responsável por projetar e desenvolver soluções tecnológicas para empresas.', contato: 'beltrano@email.com' },
  { id: 4, titulo: 'Analista de Sistemas', salario: 'R$3000', descricao: 'Responsável por analisar os processos de uma organização com tecnologia.', contato: 'fulano@email.com' },
  { id: 5, titulo: 'Gerente de Ti', salario: 'R$3000', descricao: 'Responsável por coordenar as atividades de uma equipe de profissionais de TI.', contato: 'beltrano@email.com' },
  { id: 6, titulo: 'Suporte Técnico', salario: 'R$2000', descricao: 'Responsáveis por prestar assistência aos usuários.', contato: 'fulano@email.com' },
  { id: 7, titulo: 'Analista de Dados', salario: 'R$4000', descricao: 'Saber usar Big Data.', contato: 'ciclano@gmail.com' },
  { id: 8, titulo: 'Desenvolvedor Full-Stack', salario: 'R$7000', descricao: 'Experiência comprovada em desenvolvimento front-end usando tecnologias como HTML, CSS e JavaScript.', contato: 'programfull@gmail.com' },
];

function Vagas() {
  const navigation = useNavigation();

  const handleVagaPress = (item) => {
    navigation.navigate('DetalhesVaga', item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleVagaPress(item)}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.botao}>Saiba mais</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Vagas de emprego de TI</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Vagas;