 import { View, Text, Image, Button, Pressable } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/botao'

function Contador(){

  const [numero, setNumero] = useState(0)

  function adicionar(){
    setNumero(numero+1)
  }

  function excluir(){
    if (numero > 0)
      setNumero(numero-1)
  }

  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{numero}</Text>

      <Botao titulo='Adicionar' cor='green' funcao={adicionar}/>

      <Botao titulo='Excluir' cor='red' funcao={excluir}/>
    </View>
  )
}

export default Contador