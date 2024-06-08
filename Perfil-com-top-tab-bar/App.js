import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createMaterialTopTabNavigator();

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
            const fontSize = focused ? 20 : 18;
            return <Icon name={iconName} size={fontSize} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          showIcon: true,
          labelStyle: { fontSize: 14 },
          style: { backgroundColor: 'white' },
          indicatorStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formacao" component={Formacao} />
        <Tab.Screen name="Experiencia" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
