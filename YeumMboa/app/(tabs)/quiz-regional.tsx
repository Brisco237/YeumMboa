import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Carte from '../../components/quiz-regional/carte_regional'
import ProgressBarRegional from '../../components/quiz-regional/progressbar_regional';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../../components/arrow-left';
import { colors } from '../../theme/color'
import { useState } from 'react'
import { REGIONS_CAMEROUN } from '../../data/regions';
import VieScore from '../../components/quiz-regional/vies_scores';

export default function QuizRegional(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(0); 
  const [score, setScore] = useState(0);
  const [vies, setVies] = useState(3);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <ArrowLeft/>
          <Text style={styles.title}>Quiz Régional</Text>
        </View>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <VieScore vies={vies} score={score} />
          <ProgressBarRegional
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
          <Carte/>
          <View style={styles.indication}>
            <Text style={styles.indicationtext}>Touchez la zone correspondante sur la carte</Text>
          </View>
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
