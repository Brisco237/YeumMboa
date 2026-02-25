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
                    <FontAwesome name="bank" style={styles.museum} />
                    <Text style={styles.themename}>Sites Archéo</Text>
                    <Text style={styles.descriptheme}>Vestiges & fouilles</Text>
                </View>
            </View>
            <View style={styles.randomcategory}>
                <FontAwesome5 name="random" style={styles.iconrandom} />
                <Text style={styles.randomtitle}>Quiz Aléatoire</Text>
                <Text style={styles.randomsubtitle}>Un mélange de toutes les catégories</Text>
            </View>
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
        marginTop:10,
        flexDirection:'row',
        gap:5,
        marginLeft:10,
        marginRight:10,
    },
    theme:{
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        borderRadius:7,
        flex:1,

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
        marginLeft:10,
        marginRight:10,
        padding:20,
        borderRadius:7,
        backgroundColor:colors["yellow"],
        alignItems:'center',
    },
    randomtitle:{
        fontFamily:"PlusJakartaSans-Bold", 
        fontWeight:'bold',
        fontSize:14,
    },
    randomsubtitle:{
        marginTop:5,
        fontFamily:"PlusJakartaSans-Regular",
    },
    iconrandom:{
        color:'gray',
        marginBottom:10,
        padding:10,
        fontSize:30,
        backgroundColor:'white',
        borderRadius:10,
    },
});