import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { styles } from './styles';


function Frases() {
  const [modoDia, setModoDia] = useState(true);
  const [fontePequena, setFontePequena] = useState(true);

  const corDeFundo = modoDia ? '#FFFFFF' : '#333333';
  const corDoTexto = modoDia ? '#000000' : '#FFFFFF';
  const corDoCard = modoDia ? '#f0f0f0' : '#555555';
  const tamanhoDaFonte = fontePequena ? 14 : 24;

  return (
    <View style={[styles.container, { backgroundColor: corDeFundo }]}>
      <Text style={[styles.titulo, { color: corDoTexto }]}>Frases</Text>

      <View style={styles.switchContainer}>
        <View style={styles.switchItem}>
          <Text style={{ color: corDoTexto }}>Dia</Text>
          <Switch
            value={modoDia}
            onValueChange={setModoDia}
          />
        </View>
        <View style={styles.switchItem}>
          <Text style={{ color: corDoTexto }}>Pequeno</Text>
          <Switch
            value={fontePequena}
            onValueChange={setFontePequena}
          />
        </View>
      </View>

      <ScrollView style={styles.fraseContainer}>
        <View style={[styles.card, { backgroundColor: corDoCard }]}>
          <Text style={[styles.frase, { color: corDoTexto, fontSize: tamanhoDaFonte }]}>
            "A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Frases;
