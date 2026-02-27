import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';
import Entypo from '@expo/vector-icons/Entypo';

export default function VieScore(){
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.vies}>
                    <Text style={styles.textvie}>Vies : </Text>
                    <Text>
                        <Entypo name="heart" style={styles.heart}/>
                        <Entypo name="heart" style={styles.heart}/>
                        <Entypo name="heart" style={styles.heart}/>
                    </Text>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoretext}>Score : </Text>
                    <Text style={styles.point}>0 Points</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    vies:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
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