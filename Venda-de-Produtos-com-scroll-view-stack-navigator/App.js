import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Produtos from './src/pages/Propaganda';
import DetalhesProduto from './src/pages/DetalhesPropaganda';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Produtos">
        <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
