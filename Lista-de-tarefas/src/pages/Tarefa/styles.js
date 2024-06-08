import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  tarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 8,
    marginVertical: 8,
  },
  iconeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  botaoAdicionar: {
    backgroundColor: '#007BFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 24,
  },
  botaoTextoAcao: {
    color: '#007BFF',
    marginHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
