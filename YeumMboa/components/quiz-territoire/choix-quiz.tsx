import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/color';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function ChoixQuiz(){
    const router = useRouter();

    return (
        <View style={{marginBottom:15}}>
            <View style={styles.box}>
                <View style={styles.boxhead}>
                    <FontAwesome5 name="map" style={styles.map} />
                    <Text style={styles.textbox}>10 Régions</Text>
                </View>
                <Text style={styles.title}>Quiz Régional</Text>
                <Text style={styles.textdes}>Testez vos connaissances sur l'organisation 
                    administrative et géographique du pays.</Text>
                <View style={styles.boxfoot}>
                    <Text style={styles.level}>Niveau : Facile</Text>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz-regional')}>
                        <Text style={styles.demarrer}>Démarrer</Text>
                        <FontAwesome name="play" style={styles.iconstart} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.boxhead}>
                    <MaterialCommunityIcons name="map-search" style={styles.mapsearch} />
                    <Text style={styles.textbox2}>58 Départements</Text>
                </View>
                <Text style={styles.title}>Quiz Départementale</Text>
                <Text style={styles.textdes}>Testez votre précision sur les subdivisions 
                    départementales du 237.</Text>
                <View style={styles.boxfoot}>
                    <Text style={styles.level}>Niveau : Moyen</Text>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz-departemental')}>
                        <Text style={styles.demarrer}>Démarrer</Text>
                        <FontAwesome name="play" style={styles.iconstart} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.boxhead}>
                    <MaterialCommunityIcons name="map-marker-radius" style={styles.mapmarker} />
                    <Text style={styles.textbox3}>360 Arrondissements</Text>
                </View>
                <Text style={styles.title}>Quiz Arrondissement</Text>
                <Text style={styles.textdes}>Le défis ultime pour avoir la pleine 
                    connaissance des 360 arrondissements du Cameroun.</Text>
                <View style={styles.boxfoot}>
                    <Text style={styles.level}>Niveau : Expert</Text>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/choix-quiz-arrondissement')}>
                        <Text style={styles.demarrer}>Démarrer</Text>
                        <FontAwesome name="play" style={styles.iconstart} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        marginBottom:10,
    },
    map:{
        fontSize:18,
        backgroundColor:colors['s-green'],
        padding:10,
        borderRadius:10,
    },
    boxhead:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textbox:{
        fontSize:10,
        fontFamily:'PlusJakartaSans-Bold',
        backgroundColor:colors['s-green'],
        padding:10,
        borderRadius:10,
    },
    title:{
        marginTop:20,
        fontFamily:'Montserrat-Bold',
        fontSize:14,
    },
    textdes:{
        fontSize:12,
        fontFamily:'Montserrat-Regular',
        marginTop:10,

    },
    boxfoot:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        alignItems:'center',
    },
    button:{
        flexDirection:'row',
        gap:10,
        backgroundColor:colors['red'],
        alignItems:'center',
        padding:10,
        borderRadius:10,
        color:'white',
    },
    iconstart:{
        fontSize:10,
        color:'white',
    },
    demarrer:{
        color:'white',
        fontFamily:'Montserrat-Bold',
        fontSize:10,
    },
    level:{
        fontFamily:'Montserrat-Bold',
        fontSize:12,
    },
    /* Box 2 */
    mapsearch:{
        fontSize:18,
        backgroundColor:colors['s-red'],
        padding:10,
        borderRadius:10,
    },
    textbox2:{
        fontSize:10,
        fontFamily:'PlusJakartaSans-Bold',
        backgroundColor:colors['s-green'],
        padding:10,
        borderRadius:10,
    },
    /* Box 3 */
    mapmarker:{
        fontSize:18,
        backgroundColor:colors['yellow'],
        padding:10,
        borderRadius:10,
    },
    textbox3:{
        fontSize:10,
        fontFamily:'PlusJakartaSans-Bold',
        backgroundColor:colors['s-green'],
        padding:10,
        borderRadius:10,
    },
});