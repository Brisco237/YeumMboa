import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../theme/color';


export default function ParcoursProgression(){
    return(
        <View style={{marginBottom:20}}>
            <Text style={styles.title}>Parcours de Progression</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        marginTop:20,
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
    }

});