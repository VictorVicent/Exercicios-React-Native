import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FilmeList from './src/pages/filme';
import Sinopse from './src/pages/sinopse';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FilmeList">
        <Stack.Screen 
          name="FilmeList" 
          component={FilmeList} 
          options={{ 
            title: 'App de Filmes',
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="Sinopse" 
          component={Sinopse} 
          options={{ 
            title: 'Sinopse do Filme',
            headerTitleAlign: 'center',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
