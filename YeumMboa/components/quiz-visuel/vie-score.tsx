import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
import Entypo from '@expo/vector-icons/Entypo';

export default function VieScore({vies,score}){
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.vies}>
                    <Text style={styles.textvie}>Vies : </Text>
                    <View style={styles.heartsContainer}>
                        {Array.from({length: vies}).map((_, i) => (
                            <Entypo key={i} name="heart" style={styles.heart}/>
                        ))}
                    </View>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoretext}>Score : </Text>
                    <Text style={styles.point}>{score} Points</Text>
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
    vies:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
    },
    heartsContainer:{
        flexDirection:'row',
        gap:3,
    },
    textvie:{
        fontFamily:'Montserrat-Bold',
    },
    heart:{
        color:colors['red'],
        fontSize:14,
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
        fontFamily:'Montserrat-Bold',
        fontSize:14,
    }
});