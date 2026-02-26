import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Trait from '../../components/trait';
import {colors} from '../../theme/color';
import { useRouter } from 'expo-router';
import Banniere from '../../components/stats-page/banniere';  
import BestScore from '../../components/stats-page/bestscore';


export default function StatsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/(tabs)')}>
            <AntDesign name="arrow-left" style={styles.arrowleft} />
          </TouchableOpacity>
          <Text style={styles.title}>Statistiques</Text>
        </View>
        <ScrollView>
          <Trait />
          <Banniere />
          <BestScore />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors['background-light'],
  },
  header: {
    marginTop:20,
    marginLeft:20,
    marginBottom:10,
    flexDirection:'row',
    gap: 50,
  },
  arrowleft:{
    fontSize: 20,
    marginTop:5,
    backgroundColor:'#f3eaea',
    borderRadius:'50%',
    padding:10,
  },
  title:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
  },
});
