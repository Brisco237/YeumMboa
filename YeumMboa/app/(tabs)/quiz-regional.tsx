import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carte from '../../components/quiz-regional/carte'

export default function AffichageCarte() {
  return (
    <View style={styles.container}>
        <Carte/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
