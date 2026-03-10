import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Carte from '../../components/quiz-regional/carte'
import ProgressBar from '../../components/quiz-regional/progressbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../../components/arrow-left';

export default function AffichageCarte() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.head}>
            <ArrowLeft/>
            <Text style={styles.title}>Quiz Régional</Text>
        </View>
        <ScrollView style={styles.body}>
            <ProgressBar/>
            <Carte/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    marginHorizontal:20
  },
  head:{
    flexDirection:'row',
    alignItems:'center',
    gap:30,
    backgroundColor:'white',
    padding:10
  },
  title:{
    fontFamily:'Montserrat-Bold',
    fontSize:20
  },
});
