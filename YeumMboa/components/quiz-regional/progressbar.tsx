import { colors } from '@/theme/color';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProgressBar from '../../components/missions-page/progress-bar'


export default function HeadProgressBar(){
    return(
        <View>
            <View style={styles.progressbar}>
                <View style={styles.textbar}>
                    <Text style={styles.text}>Progression</Text>
                    <Text style={styles.text}>Régions : 0 / 10</Text>
                </View>
                <ProgressBar/>
            </View>
            <View style={styles.questioncontainer}>
                <Text style={styles.questiontext}>Où se situe la région du</Text>
                <Text style={styles.regionquestion}>Nord-Ouest 
                    <Text style={{color:'black',textDecorationLine:'none'}}> ?</Text>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    progressbar:{
        marginTop:20
    },
    textbar:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontFamily:'PlusJakartaSans-Bold'
    },
    questioncontainer:{
        marginTop:20,
        alignItems:'center'
    },
    questiontext:{
        fontFamily:'Montserrat-Bold',
        fontSize:18
    },
    regionquestion:{
        fontSize:20,
        color:colors['red'],
        textDecorationLine:'underline',
        fontFamily:'Montserrat-Bold',
        paddingLeft:10
    },
});
