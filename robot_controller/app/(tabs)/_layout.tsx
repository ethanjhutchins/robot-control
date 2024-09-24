import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Motion',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={28} style={{ marginBottom: -3, color }} name={focused ? 'construct' : 'construct-outline'} />
          ),
        }}
      />
      <Tabs.Screen
        name="joystick"
        options={{
          title: 'Joystick',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons size={28} style={{ marginBottom: -3, color }} name={focused ? 'gamepad' : 'gamepad-outline'} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons size={28} style={{ marginBottom: -3, color }} name={focused ? 'map-marker' : 'map-marker-outline'} />
          ),
        }}
      />
      <Tabs.Screen
        name="logs"
        options={{
          title: 'Logs',
          tabBarIcon: ({ color, focused }) => (
            <Entypo size={28} style={{ marginBottom: -3, color }} name={focused ? 'text-document-inverted' : 'text-document'} />
          ),
        }}
      />
    </Tabs>
  );
}
