import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color'; 
import ProgressBar from './progress-bar';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Banniere1(){
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Niveau actuel</Text>
            <Text style={styles.h1}>Mission 1 : Apprenti</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                <Text style={styles.progression}>Progression</Text>
                <Text style={styles.progression}>150 / 300 Points</Text>
            </View>
            <ProgressBar />
            <Text style={styles.evolution}>
                <FontAwesome6 name="arrow-trend-up" style={{fontSize:12,marginRight:15}}/> 
                Plus que 150 points pour atteindre le niveau 2
            </Text>
            <View style={styles.start}>
                <FontAwesome6 name="hourglass-start" size={16} color="white" />
                <Text style={{color:'white', fontFamily:'PlusJakartaSans-Bold'}}>Commercez le Quiz</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:10,
        paddingBottom:25,
        borderRadius:10,
    },
    text1:{
        fontFamily:'PlusJakartaSans-Bold',
        color: colors['green'],
        backgroundColor:colors['s-green'],
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:10,
        width:100,
        justifyContent:'center',
        fontSize:10,
        marginVertical:15,
    },
    h1:{
        fontSize:26,
        fontFamily:'PlusJakartaSans-Bold',
        fontWeight:'bold',
    },
    progression:{
        fontFamily:'PlusJakartaSans-Bold',
    },
    evolution:{
        marginTop:20,
        fontFamily:'PlusJakartaSans-Bold',
        color:colors['green'],
        fontSize:12,
    },
    start:{
        backgroundColor:colors['red'],
        padding:15,
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        marginTop:20,
        borderRadius:10
    }
});