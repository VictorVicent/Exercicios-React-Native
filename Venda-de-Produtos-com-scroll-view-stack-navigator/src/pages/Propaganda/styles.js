import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    marginBottom: 5,
  },
  botao: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 5,
  },
});

export { styles };