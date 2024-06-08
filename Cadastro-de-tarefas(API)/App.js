import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tarefas from './src/pages/Tarefas';
import Form from './src/components/Form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarefas" component={Tarefas} options={{ headerShown: false }}/>
        <Stack.Screen name="Formulario" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
