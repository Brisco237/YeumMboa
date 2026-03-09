import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from '../../theme/color';
import { SetStateAction, useState } from 'react';
import { quizData } from '../../data/question-photo';


export default function LogiqueQuizVisuel({
    quizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,setScore,
    vies,setVies,setIsFinished,isFinished}){

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = quizData[currentQuestionIndex];

    const handleAnswerPress = (selectedChoice) => {
        setSelectedAnswer(selectedChoice);
        const isCorrect = selectedChoice === currentQuestion.reponse;

        if (isCorrect) {
            setScore(score + 10);
        } else {
            const newLives = vies - 1;
            setVies(newLives);

            if (newLives === 0) {
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
            <Text style={styles.question}>De qui s'agit il  sur l'image ?</Text>
            <View style={styles.choicesContainer}>
                {currentQuestion.choix.map((choice, index) => {

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
