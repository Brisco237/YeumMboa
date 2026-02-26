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
                        <Text style={styles.text}>Territoire <br/> Géo & Localisation</Text>
                    </View>
                    <Text style={styles.score}>3400 <br/> Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome name="image" style={styles.img} />
                        <Text style={styles.text}>Iconographie <br/> Quiz visuel</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:colors['red']}}>3400 <br/> Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome6 name="location-dot" style={styles.localisation} />
                        <Text style={styles.text}>Lieux de mémoire <br/> Indications sur carte</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:colors['yellow']}}>20562 <br/> Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome name="bank" style={styles.museum} />
                        <Text style={styles.text}>Sites Archéos <br/> Vestiges & Fouilles</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:'gray'}}>3400 <br/> Points</Text>
                </View>

                <View style={styles.cat1}>
                    <View style={styles.logotitre}>
                        <FontAwesome5 name="random" style={styles.iconrandom} />
                        <Text style={styles.text}>Quiz Aléatoire <br/> Toutes les catégories</Text>
                    </View>
                    <Text style={{fontFamily:'PlusJakartaSans-Bold', color:'gray'}}>3400 <br/> Points</Text>
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
        marginBottom:20,
    },
    content:{
        marginTop:25,
    },
    cat1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginVertical:10,
    },
    text:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:14,
        
    },
    globe:{
        fontSize:30,
        color:colors['green'],
    },
    img:{
        color: colors["red"],
        fontSize: 30,
    },
    localisation:{
        color: colors["yellow"],
        fontSize:30,
    },
    museum:{
        color: "gray",
        fontSize:30,
    },
    iconrandom:{
        color:'gray',
        fontSize:30,
    },
    score:{
        fontFamily:'PlusJakartaSans-Bold',
        color:colors['green'],
    },
    logotitre:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
});