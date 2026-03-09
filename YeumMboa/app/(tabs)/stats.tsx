import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Trait from '../../components/trait';
import {colors} from '../../theme/color';
import { useRouter } from 'expo-router';
import Banniere from '../../components/stats-page/banniere';  
import BestScore from '../../components/stats-page/bestscore';
import ArrowLeft from '../../components/arrow-left';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function StatsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ArrowLeft />
          <Text style={styles.title}>Statistiques</Text>
        </View>
        <Trait />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banniere />
          <BestScore />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors['background-light'],
  },
  header: {
    marginTop:15,
    marginLeft:20,
    marginBottom:1,
    flexDirection:'row',
    gap:30,
    alignItems:'center'
  },
  title:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:20,
    fontWeight:'bold',
  },
});
