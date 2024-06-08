import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Propaganda from '../../components/propaganda'

function Propagandas(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>PROPAGANDAS</Text>

      <View>      
        <ScrollView horizontal={true} /*showsHorizontalScrollIndicator={false}*/>
          <Propaganda foto='https://imgnike-a.akamaihd.net/1300x1300/02825551.jpg' item='Nike Air Max Plus 3' legenda='Com a mesma tecnologia Tuned Air' preco='R$800,00'/>

          <Propaganda foto='https://artwalk.vteximg.com.br/arquivos/ids/440791-1000-1000/DM003-2-006-1.jpg?v=638296160165700000' item='Nike Air Max Plus' legenda='Com a mesma tecnologia Tuned Air' preco='R$700,00'/>

          <Propaganda foto='https://artwalk.vteximg.com.br/arquivos/ids/433702-1000-1000/FB857-0-101-1.jpg?v=638271014266770000' item='Nike Air Max 90' legenda='Tênis da linha air max' preco='R$600,00'/>

          <Propaganda foto='https://imgcentauro-a.akamaihd.net/1300x1300/976308NM.jpg' item='Nike Vapormax 2021' legenda='Tenis da linha Vapormax' preco='R$1000,00'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Propagandas