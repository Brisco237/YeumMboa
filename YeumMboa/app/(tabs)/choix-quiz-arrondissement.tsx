import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ArrowLeft from '../../components/arrow-left';
import { colors } from '../../theme/color'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PageResultat from '../../components/quiz-arrondissement/resultat-quiz-arrondissement';
import { ARRONDISSEMENTS } from '../../data/arrondissements';

export default function QuizArrondissement(){

    // Score
    const [score, setScore] = useState(0);
    // Question Actuel
    const [currentArr, setCurrentArr] = useState(null);
    // Arrondissement choisi
    const [selectedArr, setSelectedArr] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    // Arrondissements non joués
    const [remainingArr, setRemainingArr] = useState([...ARRONDISSEMENTS]);
    // Réponses correct et Incorrect
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    // question number
    const [questionNumber, setQuestionNumber] = useState(0);
    // fin du jeu
    const [gameOver, setGameOver] = useState(false);

    const getRandomArr = (arrArray) => {
        const index = Math.floor(Math.random() * arrArray.length);
        return arrArray[index];
    };
    
    if(gameOver){
        const message = "Vous avez terminé les 58 départements !";
        return(
          <PageResultat
            score={score}
            message={message}
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            onRestart={() => {
              setScore(0);
              setRemainingArr([...ARRONDISSEMENTS]);
              setCurrentArr(getRandomArr([...ARRONDISSEMENTS]));
              setQuestionNumber(0)
              setSelectedArr(null);
              setShowAnswer(false);
              setGameOver(false);
              setCorrectAnswers(0)
              setIncorrectAnswers(0)
            }}
          />
        );
      }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <ArrowLeft/>
                <Text style={styles.title}>Quiz arrondissement</Text>
            </View>
            <ScrollView style={styles.body}>
                
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
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
        fontSize:20,
    },
})