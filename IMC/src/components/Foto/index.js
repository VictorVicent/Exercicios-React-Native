import { View, Image } from 'react-native'
import {styles} from './styles'

function Foto(){
  return(
      <View style={styles.viewImagem}>
        <Image 
          source={{uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk'}}
          style={styles.imagem}
        />
      </View>
  )
}

export default Foto