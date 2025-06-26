import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Boletos from './Boletos';
import Cartoes from './Cartoes';
import Transferencias from './Transferencias';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator();

export default function AreaLogadaTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Cartoes') {
              iconName = 'card-outline';
            } else if (route.name === 'Boletos') {
              iconName = 'document-text-outline';
            } else if (route.name === 'Transferencias') {
              iconName = 'swap-horizontal-outline';
            } else if (route.name === 'Perfil') {
              iconName = 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Cartoes" component={Cartoes} />
        <Tab.Screen name="Boletos" component={Boletos} />
        <Tab.Screen name="Transferencias" component={Transferencias} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}