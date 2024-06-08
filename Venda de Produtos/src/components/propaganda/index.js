import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Propaganda(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Image 
            source={{uri: props.foto}}
            style={styles.imagemPropaganda}
          />
          <Text style={styles.tituloPropaganda}>{props.item}</Text>
          <Text style={styles.textoPropaganda}>{props.legenda}</Text>
          <Text style={styles.textoPropaganda}>{props.preco}</Text>
        </View>
    </View>
  )
}

export default Propaganda