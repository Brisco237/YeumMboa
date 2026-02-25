import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../../components/menu';

export default function ParcoursScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Parcours ⏱️</Text>
        <Text style={styles.subtitle}>Suivez votre parcours d'apprentissage</Text>
      </View>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  }
});
