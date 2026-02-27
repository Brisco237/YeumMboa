import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../../theme/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


export default function ReferenceInfo(){
    return(
        <View>
            <View style={styles.reference}>
                <Text style={styles.title}>Sources & References</Text>
                <View style={styles.ref}>
                    <FontAwesome name="graduation-cap" style={styles.cap} />
                    <Text style={styles.text}>
                        Histoire du cameroun, A.Mveng, presence Africaine, Paris, 1964.
                    </Text>
                </View>
                <View style={styles.ref}>
                    <FontAwesome name="graduation-cap" style={styles.cap} />
                    <Text style={styles.text}>
                        Naissance du maquis dans le sud du cameroun(1920-1960), 
                        A. Mbembé, presence Africaine, Paris, 1982.
                    </Text>
                </View>
                <View style={styles.ref}>
                    <FontAwesome name="graduation-cap" style={styles.cap} />
                    <Text style={styles.text}>
                        Main basse sur le cameroun, Mongo Beti, presence Africaine, Paris, 1972.
                    </Text>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.titleinfos}>Informations Technique</Text>
                <View style={{marginTop:15}}>
                    <View style={styles.infos}>
                        <View style={styles.textinfos}>
                            <Entypo name="info-with-circle" style={styles.iconinfos} />
                            <Text style={styles.nameinfos}>Version</Text>
                        </View>
                        <Text style={styles.nameinfos}>v1.0.0</Text>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.textinfos}>
                            <MaterialIcons name="wifi-off" style={styles.iconinfos} />
                            <Text style={styles.nameinfos}>Mode hors ligne</Text>
                        </View>
                        <Text style={styles.horsligneinfos}>Activé</Text>
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.textinfos}>
                            <SimpleLineIcons name="globe" style={styles.iconinfos} />
                            <Text style={styles.nameinfos}>Langue disponible</Text>
                        </View>
                        <View style={styles.languecontainer}>
                            <Text style={styles.langue}>FR</Text>
                            <Text style={styles.langue}>En</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    reference:{
        marginTop:20,
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
    },
    title:{
        fontFamily:'Montserrat-Bold',
        marginTop:10,
        marginBottom:10
    },
    ref:{
        flexDirection:'row',
        gap:10,
        marginTop:10,
        alignItems:'center',
    },
    cap:{
        fontSize:12,
        color:colors['red'],
    },
    text:{
        fontFamily:'Montserrat-Regular',
        fontSize:12,
    },
    /* infos */
    titleinfos:{
        fontFamily:'Montserrat-Bold',
        fontSize:18,
    },
    infos:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        padding:10,
        marginBottom:5
    },
    textinfos:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
    },
    nameinfos:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:10,
    },
    horsligneinfos:{
        backgroundColor:colors['s-green'],
        fontFamily:'Montserrat-Bold',
        padding:5,
        fontSize:10,
        borderRadius:10,
    },
    iconinfos:{
        fontSize:14,
    },
    languecontainer:{
        flexDirection:'row',
        gap:5
    },
    langue:{
        fontFamily:'Montserrat-Bold',
        backgroundColor:colors['s-green'],
        padding:5,
        fontSize:10
    }

});