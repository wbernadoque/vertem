import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Listagem',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="edit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="AddTask"
        options={{
          title: 'Adicionar tarefa',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="add" color={color} />,
        }}
      />
    </Tabs>
  );
}
