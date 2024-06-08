import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const produtos = [
  { id: 1, foto: 'https://imgnike-a.akamaihd.net/1300x1300/02825551.jpg', titulo: 'Nike Air Max Plus 3', preco: 'R$800,00', descricao: 'com a mesma tecnologia Tuned Air' },
  { id: 2, foto: 'https://artwalk.vteximg.com.br/arquivos/ids/440791-1000-1000/DM003-2-006-1.jpg?v=638296160165700000', titulo: 'Nike Air Max Plus', preco: 'R$700,00', descricao: 'Oferece estabilidade e amortecimento premium. Com mesh ventilado, cores gradiente e as linhas de design onduladas do original, ele celebra o seu estilo desafiador, com a mesma tecnologia Tuned Air' },
  { id: 3, foto: 'https://artwalk.vteximg.com.br/arquivos/ids/433702-1000-1000/FB857-0-101-1.jpg?v=638271014266770000', titulo: 'Nike Air Max 90', preco: 'R$600,00', descricao: 'Originalmente criado para a prática de corrida, o amortecimento Nike Air visível coloca a história do conforto debaixo dos seus pés. O solado de borracha Waffle proporciona tração durável.' },
  { id: 4, foto: 'https://imgcentauro-a.akamaihd.net/1300x1300/976308NM.jpg', titulo: 'Nike Vapormax 2021', preco: 'R$1000,00', descricao: 'Olhe através ou remova a palmilha perfurada para ver a unidade Nike Air transparente. Feito com pelo menos 20% de conteúdo reciclado por peso, o cabedal elástico o mantém leve e fresco para os dias de verão.' },
];

function Propaganda({ produto }) {
  const navigation = useNavigation();

  const handleVerDetalhes = () => {
    navigation.navigate('DetalhesProduto', { produto });
  };

  return (
    <TouchableOpacity onPress={handleVerDetalhes}>
      <View style={styles.card}>
        <Image source={{ uri: produto.foto }} style={styles.imagem} />
        <Text style={styles.titulo}>{produto.titulo}</Text>
        <TouchableOpacity style={styles.botao} onPress={handleVerDetalhes}>
          <Text style={styles.botaoTexto}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function Produtos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios para venda de produtos</Text>
      <ScrollView horizontal={true}>
        {produtos.map(produto => (
          <Propaganda key={produto.id} produto={produto} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Produtos;
