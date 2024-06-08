import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    marginBottom: 20,
    borderRadius: 75, 
    overflow: 'hidden', 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
  },
});