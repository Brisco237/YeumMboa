import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import ArrowLeft from "../../components/arrow-left";
import Trait from '../../components/trait'; 
import { colors } from '../../theme/color'
import VieScore from "../../components/quiz-visuel/vie-score";
import LogiqueQuizVisuel from "../../components/quiz-visuel/logique-quiz-visuel";
import { quizData } from '../../data/question-photo';


export default function QuizVisuel(){
    const [score, setScore] = useState(0);
    const [vies, setVies] = useState(3);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    if (isFinished) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>Quiz terminé 🎉</Text>
          <Text style={{ fontSize: 20 }}>Score final : {score}</Text>
    
          <TouchableOpacity
            onPress={() => {
              setScore(0);
              setVies(3);
              setCurrentQuestionIndex(0);
              setIsFinished(false);
            }}
            style={{
              marginTop: 20,
              padding: 15,
              backgroundColor: "black",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Rejouer</Text>
          </TouchableOpacity>
        </View>
      );
    }
    


    return(
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.line}>
                    <Text style={{marginTop:7}}><ArrowLeft /></Text>
                    <Text style={styles.title}>Quiz Iconographique</Text>
                </View>
                <Trait />
            </View>
            <ScrollView>
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
                        setIsFinished={setIsFinished}
                    />
                </View>
            </ScrollView>
        </View>

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
    gap:50,
    marginLeft:10,
  },
  title: {
    fontFamily:'Montserrat-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
  },
});