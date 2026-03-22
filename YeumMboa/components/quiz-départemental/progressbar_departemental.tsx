import { colors } from '@/theme/color';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function ProgressBarDepartement({currentRegion,questionNumber}){
    return(
        <View>
            <View style={styles.progressbar}>
                <View style={styles.textbar}>
                    <Text style={styles.text}>Progression</Text>
                    <Text style={styles.text}>Départements : {questionNumber} / 58</Text>
                </View>
                <View style={{ width:'100%',height:20, backgroundColor:'#e6d4d4',
                borderRadius:10, marginTop:10 
                    }}>
                    <View
                        style={{
                        width: `${(questionNumber / 58) * 100}%`,
                        height: '100%',
                        backgroundColor:colors['green'],
                        borderRadius: 10,
                        }}
                    />
                </View>
            </View>
            <View style={styles.questioncontainer}>
                <Text style={styles.questiontext}>Où se situe le département : </Text>
                <Text style={styles.regionquestion}>{currentRegion?.name}
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
