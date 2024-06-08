import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 30,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  botao: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 5,
  },
});

export { styles };
