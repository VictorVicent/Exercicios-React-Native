import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import {styles} from './styles'

function Multiplicador(){
  const [resultado, setResultado] = useState()
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicar Numeros</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o número"
          onChangeText={setInput1}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o numero"
          onChangeText={setInput2}
          keyboardType='numeric'
        />

        <Button title='Calcular' color='blue' onPress={() => setResultado(input1 * input2)}/>

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Multiplicador