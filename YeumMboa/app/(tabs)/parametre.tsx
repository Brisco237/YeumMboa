import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../../components/menu';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Paramètres ⚙️</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notification</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Langue</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>À propos</Text>
        </View>
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
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  settingItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  }
});