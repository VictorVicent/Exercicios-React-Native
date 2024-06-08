import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Vaga from '../../components/Vaga';
import { useNavigation } from '@react-navigation/native';

function Vagas() {
  const navigation = useNavigation();

  const handleVagaPress = (titulo, salario, descricao, contato) => {
    navigation.navigate('DetalhesVaga', { titulo, salario, descricao, contato });
  };

  return (
    <View>
      <Text style={styles.nome}>Vagas de emprego de TI</Text>

      <ScrollView>
        <Vaga
          titulo='Gerente de Marketing'
          onPress={() => handleVagaPress('Gerente de Marketing', 'R$2000', 'Gerenciar bem uma equipe', 'fulano@email.com')}
        />
        <Vaga 
          titulo='Desenvolvedor FrontEnd' 
          onPress={() => handleVagaPress('Desenvolvedor FrontEnd', 'R$3000', 'Trabalhar com FrontEnd', 'ciclano@email.com')}
        />
        <Vaga 
          titulo='Arquiteto de Software' 
          onPress={() => handleVagaPress('Arquiteto de Software', 'R$3000', 'responsável por projetar e desenvolver soluções tecnológicas para empresas.', 'beltrano@email.com')}
        />
        <Vaga 
          titulo='Analista de Sistemas' 
          onPress={() => handleVagaPress('Analista de Sistemas', 'R$3000', 'responsável por analisar os processos de uma organização com tecnologia.', 'fulano@email.com')}
        />

      <Vaga 
        titulo='Gerente de Ti' 
        onPress={() => handleVagaPress('Gerente de Ti', 'R$3000', 'responsável por coordenar as atividades de uma equipe de profissionais de TI.', 'beltrano@email.com')}
      />

    <Vaga 
        titulo='Suporte Técnico' 
        onPress={() => handleVagaPress('Suporte Técnico', 'R$2000', 'responsáveis por prestar assistência aos usuários', 'fulano@email.com')}
      />

    <Vaga 
        titulo='Analista de Dados' 
        onPress={() => handleVagaPress('Analista de Dados', 'R$4000', 'Saber usar Big Data', 'ciclano@gmail.com')}
      />

    <Vaga
        titulo='Desenvolvedor Full-Stack' 
        onPress={() => handleVagaPress('Desenvolvedor Full-Stack', 'R$7000', 'Experiência comprovada em desenvolvimento front-end usando tecnologias como HTML, CSS e JavaScript, Conhecimento de frameworks e bibliotecas front-end populares, como React, Angular ou Vue.js', 'programfull@gmail.com')}
      />
      
      </ScrollView>
    </View>
  );
}

export default Vagas;
