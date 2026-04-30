import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export default function VieScore({score, questionNumber}){
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.progression}>
                    <Text style={styles.textprogression}>Questions : </Text>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>{questionNumber} / 58</Text>
                    </View>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoretext}>Score : </Text>
                    <Text style={styles.scoretext}>{score}</Text>
                    <Text style={styles.point}>Points</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    progression:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
    },
    progressContainer:{
        flexDirection:'row',
        gap:3,
        backgroundColor:'white',
        padding:8,
        borderRadius:8,
    },
    textprogression:{
        fontFamily:'Montserrat-Bold',
    },
    progressText:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:12,
        color:colors['green'],
    },
    /* Score */
    score:{
        flexDirection:'row',
        gap:5,
        alignItems:'center'
    },
    scoretext:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:14,
    },
    point:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:15,
    }
});