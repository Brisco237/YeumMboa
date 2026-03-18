import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CarteDepartemental from '../../components/quiz-départemental/carte_departement'
import ProgressBarDepartement from '../../components/quiz-départemental/progressbar_departemental';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../../components/arrow-left';
import { colors } from '../../theme/color'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function QuizDepartemental() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <ArrowLeft/>
        <Text style={styles.title}>Quiz Départemental</Text>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <ProgressBarDepartement/>
        <CarteDepartemental/>
        <View style={styles.indication}>
          <Text style={styles.indicationtext}>Touchez la zone correspondante sur la carte</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  indication:{
    marginTop:15,
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginBottom:30
  },
  indicationtext:{
    fontFamily:'PlusJakartaSans-Regular',
    fontStyle:'italic',
    fontSize:14
  },
});
