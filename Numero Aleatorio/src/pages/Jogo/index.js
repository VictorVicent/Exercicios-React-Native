import { View, Text, Image, Button } from 'react-native'
import {useState} from 'react'
import {styles} from './styles'

function Jogo(){

  const [numero, setNumero] = useState('?')

  function gerarNumero(){
    setNumero(Math.floor(Math.random() * 11))
  }

  return(
    <View>
      <Text style={styles.titulo}>Jogo do N° Aleatorio</Text>

      <View style={styles.posi_imagem}>
        <Image 
          source={{uri: 'https://www.hdwallpapers.in/download/blue_eyes_jujutsu_kaisen_satoru_gojo_hd_jujutsu_kaisen-HD.jpg'}}
          style={styles.imagem}
        />
      </View>

      <Text style={styles.frase}>Pense em um numero de 0 a 10</Text>

      <Text style={styles.numero}>{numero}</Text>

      <Button color='blue' title='Descobrir' onPress={gerarNumero}/>
    </View>
  )
}

export default Jogo