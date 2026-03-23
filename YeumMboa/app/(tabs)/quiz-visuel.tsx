import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
import ArrowLeft from "../../components/arrow-left";
import Trait from '../../components/trait'; 
import { colors } from '../../theme/color'
import VieScore from "../../components/quiz-visuel/vie-score";
import LogiqueQuizVisuel from "../../components/quiz-visuel/logique-quiz-visuel";
import { quizData as originalQuizData } from '../../data/question-photo';
import PageResultat from "../../components/quiz-visuel/resultat-quiz-visuel";
import { SafeAreaView } from 'react-native-safe-area-context';

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export default function QuizVisuel(){
    // Vies et score
    const [score, setScore] = useState(0);
    const [vies, setVies] = useState(3);
    // Questions actuel
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Game over
    const [isFinished, setIsFinished] = useState(false);
    // Mélange des questions
    const [quizData, setQuizData] = useState(shuffleArray(originalQuizData));
    // nombres de réponses correct et incorrect
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const currentQuestion = quizData[currentQuestionIndex];

    if(isFinished){
        const message = vies <= 0 ? "Vous avez perdu toutes vos vies !" : "Vous avez terminé le jeu !";
        return(
            <PageResultat
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                score={score}
                setScore={setScore}
                vies={vies}
                setVies={setVies}
                isFinished={isFinished}
                setIsFinished={setIsFinished}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
                message={message}
                onRestart={() => {
                    setScore(0);
                    setVies(3);
                    setCorrectAnswers(0);
                    setIncorrectAnswers(0);
                    setCurrentQuestionIndex(0);
                    setQuizData(shuffleArray(originalQuizData)); 
                    setIsFinished(false);
                }}
            />
        );
    }
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.line}>
                    <Text><ArrowLeft /></Text>
                    <Text style={styles.title}>Quiz Iconographique</Text>
                </View>
                <Trait />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <VieScore vies={vies} score={score} />
                    <Trait />
                    <LogiqueQuizVisuel 
                        quizData={quizData}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        score={score}
                        setScore={setScore}
                        vies={vies}
                        setVies={setVies}
                        isFinished={isFinished}
                        setIsFinished={setIsFinished}
                        correctAnswers={correctAnswers}
                        setCorrectAnswers={setCorrectAnswers}
                        incorrectAnswers={incorrectAnswers}
                        setIncorrectAnswers={setIncorrectAnswers}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'white',
  },
  container:{
    marginHorizontal:20,
  },
  line:{
    flexDirection:'row',
    gap:30,
    marginLeft:20,
    marginTop:15
  },
  title: {
    fontFamily:'Montserrat-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
});