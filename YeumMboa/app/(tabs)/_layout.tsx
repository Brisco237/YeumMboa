import { Stack } from 'expo-router';

export default function TabsLayout() {
  return (
    <Stack screenOptions={{headerShown:false,}}>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="info-screen" options={{ title: 'Info-screen'}} />
      <Stack.Screen name="stats" options={{ title: 'Stats' }} />
      <Stack.Screen name="missions" options={{ title: 'Missions' }} />
      <Stack.Screen name="parametre" options={{ title: 'Paramètres' }} />
      <Stack.Screen name="quiz-territoire" options={{ title: 'Quiz-territoire' }} />
      <Stack.Screen name="quiz-visuel" options={{ title: 'Quiz-visuel' }} />
      <Stack.Screen name="resultat" options={{ title: 'Resultat' }} />
      <Stack.Screen name="quiz-regional" options={{ title: 'Quiz-regional' }} />
      <Stack.Screen name="quiz-departemental" options={{ title: 'Quiz-départemental' }} />
      <Stack.Screen name="quiz-arrondissement" options={{ title: 'Quiz-arrondissement' }} />
    </Stack>
  );
}
