import { Stack } from 'expo-router';

export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="stats" options={{ title: 'Stats' }} />
      <Stack.Screen name="missions" options={{ title: 'Missions' }} />
      <Stack.Screen name="parametre" options={{ title: 'Paramètres' }} />
    </Stack>
  );
}
