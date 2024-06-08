import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    maxWidth: 400,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  select: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
