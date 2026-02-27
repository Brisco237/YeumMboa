import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import ArrowLeft from "../../components/arrow-left";
import Trait from '../../components/trait'; 
import { colors } from '../../theme/color'
import ChoixQuiz from "@/components/quiz-territoire/choix-quiz";  


export default function QuizTerritoire(){
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.line}>
                    <Text style={{marginTop:7}}><ArrowLeft /></Text>
                    <Text style={styles.title}>Quiz Territoire</Text>
                </View>
                <Trait />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Explorez le Cameroun</Text>
                    <Text style={styles.text}>Testez vos connaissance sur l'organisation administrative
                        et géographique du cameroun.
                    </Text>
                    <ChoixQuiz />
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
  text:{
    fontFamily:'Montserrat-Regular',
    marginTop:10,

  }

});