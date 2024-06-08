import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Pessoal() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://www.thecpuguide.com/wp-content/uploads/2022/05/Loud-Coringa-edited.jpg' }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.title}>Página Pessoal</Text>
       <Text style={styles.subtitle}>Nome Completo: Victor Augusto</Text>
      <Text style={styles.subtitle}>Data de Nascimento: 16/05/1997</Text>
    </View>
  );
}

export default Pessoal;
