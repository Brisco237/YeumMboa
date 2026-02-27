import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import ArrowLeft from "../../components/arrow-left";
import Trait from '../../components/trait'; 
import { colors } from '../../theme/color'
import VieScore from "../../components/quiz-visuel/vie-score";

export default function QuizVisuel(){
    return(
        <View>
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
                        <VieScore />
                        <Trait />
                    </View>
                </ScrollView>
            </View>
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