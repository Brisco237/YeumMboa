import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color'; 

export default function ProgressBar(){

    return(
        <View style={styles.progressbar}>
            <Text style={styles.bar}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    progressbar:{
        marginTop:20,
        width:'100%',
        height:15,
        backgroundColor:'#e6d4d4',
        borderRadius:15,
    },
    bar:{
        width:'50%',
        height:15,
        borderRadius:15,
        backgroundColor:colors['green']
    }
});