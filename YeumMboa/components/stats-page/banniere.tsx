import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import {colors} from '../../theme/color';

export default function Banniere() {
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Meilleurs scores toutes catégories confondus</Text>
        <View style={{flexDirection:'row', alignItems:'center', gap:10 }}>
            <Text  style={styles.score}>20562</Text>
            <Text style={styles.points}>Points</Text>
        </View>
        <Text style={styles.categorybest}>
            Vous excellez dans la catégorie "Lieux de mémoires".
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors['red'],
    padding: 25,
    borderRadius: 10,
    marginTop:15,
    marginHorizontal:20,
    },
    h1:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color:'white'
    },
    score:{
        color:'white',
        fontFamily:'Montserrat-Bold',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    points:{
        color:'white',
        fontFamily:'Montserrat-Regular',
        fontSize: 14,
    },
    categorybest:{
        fontFamily:'PlusJakartaSans-Regular',
        fontSize: 14,
        marginTop:10,
        color:'white',
    }
});