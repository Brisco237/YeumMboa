import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Fontisto from '@expo/vector-icons/Fontisto';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PageResultat({
    currentQuestionIndex,setCurrentQuestionIndex,score,setScore,
    vies,setVies,setIsFinished,isFinished,
    correctAnswers,
    incorrectAnswers,message,onRestart
    }){
    
    const router = useRouter();
    const totalQuestions = currentQuestionIndex + 1;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.trophé}>
                <AntDesign name="trophy" style={styles.logotrophé} />
            </View>
            <View style={styles.scorefinal}>
                <Text style={styles.text}>VOTRE SCORE FINAL</Text>
                <Text style={styles.score}>{score}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.taux}>
                <View style={styles.correct}>
                    <Text><AntDesign name="check-circle" style={styles.check} /></Text>
                    <Text style={styles.reponsecorrect}>{percentage} %</Text>
                </View>
                <View style={styles.correct}>
                    <Text><Entypo name="heart" style={styles.heart}/></Text>
                    <Text style={styles.reponsecorrect}> {vies} / 3</Text>
                </View>
            </View>
            <View style={styles.resume}>
                <Text style={styles.head}>Résumé de la session</Text>
                <View style={styles.resume1}>
                    <View style={styles.correct1}>
                        <Entypo name="check" style={styles.check2} />
                        <Text style={styles.text2}>Réponse correct</Text>
                    </View>
                    <Text style={styles.text2}>{correctAnswers}</Text>
                </View>
                <View style={styles.resume2}>
                    <View style={styles.correct1}>
                        <Entypo name="cross" style={styles.cross} />
                        <Text style={styles.text2}>Réponse incorrect</Text>
                    </View>
                    <Text style={styles.text2}>{incorrectAnswers}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onRestart} style={styles.bouttonrejouer}>
                <View style={styles.rejouer}>
                    <FontAwesome name="rotate-left" style={styles.rotate} />
                    <Text style={styles.text3}>Rejouer</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bouttonrejouer} onPress={()=>router.back()}>
                <View style={styles.rejouer}>
                    <Fontisto name="home" style={styles.rotate} />
                    <Text style={styles.text3}>Home</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    trophé:{
        backgroundColor:colors['s-red'],
        padding:30,
        marginTop:20,
        borderRadius:10,
        alignItems:'center'
    },
    logotrophé:{
        fontSize:50,
        color:colors['yellow'],
    },
    scorefinal:{
        marginTop:15,
        alignItems:'center'
    },
    text:{
        fontFamily:'Montserrat-Bold',
        fontSize:15,
    },
    score:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:50,
        color:colors['red']
    },
    message:{
        fontFamily:'PlusJakartaSans-Regular',
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginTop:10
    },
    taux:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15
    },
    correct:{
        flexDirection:'row',
        gap:10,
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        alignItems:'center'
    },
    reponsecorrect:{
        fontFamily:'Montserrat-Bold',
        fontSize:20
    },
    heart:{
        color:colors['red'],
        fontSize:20,
    },
    check:{
        color:colors['green'],
        fontSize:20,
    },
    resume:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginTop:15
    },
    head:{
        fontFamily:'Montserrat-Bold',
        fontSize:14
    },
    resume1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        alignItems:'center'
    },
    resume2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        alignItems:'center'
    },
    correct1:{
        flexDirection:'row',
        gap:10,
        fontFamily:'Montserrat-Bold',
        alignItems:'center'
    },
    text2:{
        fontFamily:'Montserrat-Regular',
    },
    check2:{
        color:colors['green'],
        fontSize:20,
        backgroundColor:colors['s-green'],
        padding:5,
        borderRadius:10
    },
    cross:{
        color:colors['red'],
        fontSize:20,
        backgroundColor:colors['s-red'],
        padding:5,
        borderRadius:10
    },
    bouttonrejouer:{
        marginTop:10,
        backgroundColor:colors['green'],
        padding:10,
        borderRadius:10,
        alignItems:'center'
    },
    rejouer:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    rotate:{
        fontSize:15,
        color:'white'
    },
    text3:{
        color:'white',
        fontSize:14,
        fontFamily:'PlusJakartaSans-Bold',
    },
    /* Boutton retour accueille */
    home:{
        marginTop:10,
        backgroundColor:colors['green']
    }

});