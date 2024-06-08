import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Card from '../../components/Card';

function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      
      <Card 
        title="Desenvolvedor Full Stack - Empresa X" 
        text="- Desenvolvimento de aplicativos web e mobile utilizando tecnologias como React, Node.js e MongoDB.
- Participação em projetos de grande porte, desde a concepção até a entrega final.
- Colaboração com equipes multidisciplinares em um ambiente ágil e colaborativo." 
      />
      
      <Card 
        title="Analista de Sistemas - Empresa Y" 
        text="- Análise e desenvolvimento de sistemas para automação de processos internos.
- Implementação de soluções tecnológicas para otimização de operações e aumento da eficiência.
- Suporte técnico a usuários e resolução de problemas relacionados a sistemas corporativos." 
      />
    </View>
  );
}

export default Experiencia;
