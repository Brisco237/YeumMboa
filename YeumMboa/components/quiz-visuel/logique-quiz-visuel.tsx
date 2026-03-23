import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from '../../theme/color';
import { useState,useEffect } from 'react';

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
export default function LogiqueQuizVisuel({
    quizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,setScore,
    vies,setVies,setIsFinished,isFinished,
    correctAnswers, setCorrectAnswers,
    incorrectAnswers, setIncorrectAnswers}){

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = quizData[currentQuestionIndex];

    const [shuffledChoices, setShuffledChoices] = useState([]);
    useEffect(() => {
        const shuffled = shuffleArray(currentQuestion.choix);
        setShuffledChoices(shuffled);
    }, [currentQuestionIndex]);

    const handleAnswerPress = (selectedChoice) => {
        setSelectedAnswer(selectedChoice);
        const isCorrect = selectedChoice === currentQuestion.reponse;

        if(isCorrect){
            setScore(score + 10);
            setCorrectAnswers(correctAnswers + 1)
        }else{
            setVies(vies - 1);
            setIncorrectAnswers(incorrectAnswers + 1);
            if (vies === 0) {
                setTimeout(() => {
                setIsFinished(true);
            }, 1000);
            return;
        }
    }

    setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            setIsFinished(true);
        }
        }, 1000);
    };


    return(
        <View style={styles.container}>
            <Image source={currentQuestion.image}style={styles.image} />
            <Text style={styles.question}>De qui s'agit il  sur cette photo ?</Text>
            <View style={styles.choicesContainer}>
                {shuffledChoices.map((choice, index) => {

                    let backgroundColor = 'white';
                    let textColor = 'black';

                    if(selectedAnswer !== null) {
                        if (choice === currentQuestion.reponse) {
                            backgroundColor = colors['green'];
                            textColor = 'white';
                        }
                        else if (choice === selectedAnswer) {
                            backgroundColor = colors['red'];
                            textColor = 'white';
                        }
                    }

                    return (
                        <TouchableOpacity key={index} style={[styles.button, { backgroundColor }]}
                            onPress={() => handleAnswerPress(choice)}
                            disabled={selectedAnswer !== null}
                        >
                            <Text style={[styles.buttonText, { color: textColor }]}>{choice}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        alignItems: 'center',
    },
    image: {
        width:250,
        height:250,
        borderRadius:10,
        gap:2,
    },
    question:{
        fontFamily:'PlusJakartaSans-Regular',
        fontSize:18,
        marginTop:15,
        alignItems:'center',
    },
    choicesContainer:{
        marginTop:20,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        borderWidth: 2,
        marginVertical:2,
        width:250,
        borderColor:'#e0e0e0',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
});
