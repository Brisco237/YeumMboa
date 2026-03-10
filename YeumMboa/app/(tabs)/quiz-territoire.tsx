import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import ArrowLeft from "../../components/arrow-left";
import Trait from '../../components/trait'; 
import { colors } from '../../theme/color'
import ChoixQuiz from "@/components/quiz-territoire/choix-quiz";  
import { SafeAreaView } from 'react-native-safe-area-context';


export default function QuizTerritoire(){
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
              <View style={styles.line}>
                <Text><ArrowLeft /></Text>
                <Text style={styles.title}>Quiz Territoire</Text>
              </View>
              <Trait />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.title1}>Explorez le Cameroun</Text>
                    <Text style={styles.text}>Testez vos connaissance sur l'organisation administrative
                        et géographique du cameroun.
                    </Text>
                    <ChoixQuiz />
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
  title: {
    fontFamily:'Montserrat-Bold',
    fontSize: 20,
  },
  line:{
    marginTop:15,
    flexDirection:'row',
    gap:30,
    marginLeft:20,
    alignItems:'center'
  },
  title1:{
    marginTop:20,
    fontFamily:'Montserrat-Bold',
    fontSize:16,
  },
  text:{
    fontFamily:'Montserrat-Regular',
    marginTop:10,
    marginBottom:15,
    fontSize:12
  }

});