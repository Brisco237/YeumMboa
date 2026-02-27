import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from '../../theme/color';
import { SetStateAction, useState } from 'react';
import { quizData } from '../../data/question-photo';


export default function LogiqueQuizVisuel({
    quizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,setScore,
    vies,setVies}){

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = quizData[currentQuestionIndex];

    const handleAnswerPress = (selectedChoice) => {
        setSelectedAnswer(selectedChoice);
        const isCorrect = selectedChoice === currentQuestion.reponse;
    
        if (isCorrect) {
            setScore(score + 5);
        } else {
            setVies(vies - 1);
        }
        setTimeout(() => {
            if (currentQuestionIndex < quizData.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
            }
        }, 1000);
    };

    let buttonColor = 'white';             
    if (selectedAnswer !== null) {
        if (choice === currentQuestion.reponse) {
            buttonColor = colors['green'];
        } else if (choice === selectedAnswer && selectedAnswer !== currentQuestion.reponse) {
            buttonColor = colors['red'];
        }
    }

    return(
        <View style={styles.container}>
            <Image source={currentQuestion.image}style={styles.image} />
            <View style={styles.choicesContainer}>
                {currentQuestion.choix.map((choice, index) => (
                    <TouchableOpacity key={index} style={[styles.button, {backgroundColor:buttonColor}]}
                        onPress={() => handleAnswerPress(choice)}
                        disabled={selectedAnswer !== null}>
                        <Text style={styles.buttonText}>{choice}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
    },
    image: {
        width:250,
        height:250,
        borderRadius:10,
        gap:2,
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
        color: '#333',
        textAlign: 'center',
    },
});