import { View, TextInput } from 'react-native'
import {styles} from './styles'

function Campo(props){
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.label}
        onChangeText={props.funcao}
        keyboardType={props.tipo}
      />
    </View>
  )
}

export default Campo