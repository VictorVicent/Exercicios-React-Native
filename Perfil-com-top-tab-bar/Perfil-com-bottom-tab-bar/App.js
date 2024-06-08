import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createBottomTabNavigator();

const icons = {
  Pessoal: {
    name: 'person',
  },
  Formacao: {
    name: 'school',
  },
  Experiencia: {
    name: 'briefcase',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = icons[route.name].name;
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Pessoal" component={Pessoal} options={{ headerShown: false }}/>
        <Tab.Screen name="Formacao" component={Formacao} options={{ headerShown: false }}/>
        <Tab.Screen name="Experiencia" component={Experiencia} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;