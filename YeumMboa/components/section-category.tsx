import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../theme/color';


export default function SectionCategory() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Thèmes de Quiz !</Text>
            <View style={styles.box}>
                <View style={styles.theme}>
                    <FontAwesome5 name="globe-africa" style={styles.globe} />
                    <Text style={styles.themename}>Territoire</Text>
                    <Text style={styles.descriptheme}>Géo & Localisation</Text>
                </View>
                <View style={styles.theme}>
                    <FontAwesome name="image" style={styles.img} />
                    <Text style={styles.themename}>Iconographie</Text>
                    <Text style={styles.descriptheme}>Quiz visuel</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.theme}>
                    <FontAwesome6 name="location-dot" style={styles.localisation} />
                    <Text style={styles.themename}>Lieux de mémoire</Text>
                    <Text style={styles.descriptheme}>Indication sur la carte</Text>
                </View>
                <View style={styles.theme}>
                    <MaterialIcons name="museum" style={styles.museum} />
                    <Text style={styles.themename}>Sites Archéo</Text>
                    <Text style={styles.descriptheme}>Vestiges & fouilles</Text>
                </View>
            </View>
            <View style={styles.randomcategory}>
                <View>
                    <Text style={styles.randomtitle}>Quiz Aléatoire</Text>
                    <Text style={styles.randomsubtitle}>Un mélange de toutes les <br/> catégories</Text>
                </View>
                <FontAwesome5 name="random" style={styles.iconrandom} />
            </View>
            <Text style={styles.trait}></Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        marginTop:40,
    },
    title:{
        fontSize:20,
        fontFamily:'PlusJakartaSans-Bold',
        marginLeft:16,
    },
    box:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    theme:{
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        borderRadius:7,
        width:180,
        marginLeft:10,
        marginRight:10,

    },
    themename:{
        fontSize:14,
        fontFamily:"PlusJakartaSans-Bold",
        marginTop:5,
    },
    descriptheme:{
        fontFamily:'PlusJakartaSans-Regular',
        marginTop:5,
    },
    img:{
        color: colors["red"],
        marginTop:10,
        fontSize: 30,
        borderRadius:5,
        justifyContent:'center',
        padding:10,
    },
    globe:{
        color: colors["green"],
        marginTop:10,
        fontSize:30,
        borderRadius:5,
        justifyContent:'center',
        padding:10,
    },
    localisation:{
        color: colors["yellow"],
        marginTop:10,
        fontSize:30,
        borderRadius:5,
        justifyContent:'center',
        padding:10,
    },
    museum:{
        color: "gray",
        marginTop:10,
        fontSize:30,
        borderRadius:5,
        justifyContent:'center',
        padding:10,
    },
    /* random category */
    randomcategory:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        padding:15,
        borderRadius:10,
        backgroundColor:colors["yellow"],
        flexDirection:'row',
        justifyContent:'space-between',

    },
    randomtitle:{
        fontFamily:"PlusJakartaSans-Bold", 
        fontWeight:'bold',
        fontSize:18,
    },
    randomsubtitle:{
        marginTop:5,
        fontFamily:"PlusJakartaSans-Regular"
    },
    iconrandom:{
        marginTop:15,
        color:'black',
        padding:10,
        fontSize:30,
        backgroundColor:'white',
        borderRadius:10,
    },
    trait:{
        height:1,
        width:'100%',
        color:'gray',
    },
});