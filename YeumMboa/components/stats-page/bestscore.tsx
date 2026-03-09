import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import {colors} from '../../theme/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Logo from '../logo';



export default function BestScore(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontFamily:'PlusJakartaSans-Bold', fontSize:20}}>Meilleurs scores</Text>
                <AntDesign name="align-center" size={22} color="black" />
            </View>
            <View style={styles.content}>
                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome5 name="globe-africa" style={styles.globe} />
                        <Text style={styles.text}>Territoire {"\n"} Géo & Localisation</Text>
                    </View>
                    <Text style={styles.score}>3400 {"\n"} Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome name="image" style={styles.img} />
                        <Text style={styles.text}>Iconographie {"\n"} Quiz visuel</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold',color:colors['red'],fontSize:12}}>3400 {"\n"} Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome6 name="location-dot" style={styles.localisation} />
                        <Text style={styles.text}>Lieux de mémoire {"\n"}Indications sur carte</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:colors['yellow'],fontSize:12}}>20562 {"\n"} Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome name="bank" style={styles.museum} />
                        <Text style={styles.text}>Sites Archéos {"\n"} Vestiges & Fouilles</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:'gray',fontSize:12}}>3400 {"\n"} Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome5 name="random" style={styles.iconrandom} />
                        <Text style={styles.text}>Quiz Aléatoire {"\n"} Toutes les catégories</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:'gray',fontSize:12}}>3400 {"\n"} Points</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginTop:20,
        marginBottom:20,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    content:{
        marginTop:2,
    },
    cat1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginVertical:2,
    },
    text:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:12,      
    },
    globe:{
        fontSize:15,
        color:colors['green'],
    },
    img:{
        color: colors["red"],
        fontSize:15,
    },
    localisation:{
        color: colors["yellow"],
        fontSize:15,
    },
    museum:{
        color: "gray",
        fontSize:15,
    },
    iconrandom:{
        color:'gray',
        fontSize:15,
    },
    score:{
        fontFamily:'PlusJakartaSans-Bold',
        color:colors['green'],
        fontSize:12
    },
    logotitre:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
});