import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vagas from './src/pages/Vagas';
import DetalhesVaga from './src/pages/DetalhesVaga';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vagas" component={Vagas} options={{ headerShown: false }}/>
        <Stack.Screen name="DetalhesVaga" component={DetalhesVaga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;