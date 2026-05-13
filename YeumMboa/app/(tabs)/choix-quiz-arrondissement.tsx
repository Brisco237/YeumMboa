import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ArrowLeft from '../../components/arrow-left';
import { colors } from '../../theme/color'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react'

export default function QuizArrondissement(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <ArrowLeft/>
                <Text style={styles.title}>Quiz arrondissement</Text>
            </View>
            <ScrollView style={styles.body}>
                
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    body:{
        marginHorizontal:20
    },
    head:{
        flexDirection:'row',
        alignItems:'center',
        gap:30,
        backgroundColor:'white',
        padding:10
    },
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
    },
})