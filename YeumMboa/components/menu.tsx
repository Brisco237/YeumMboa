import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';


export default function Menu() {
    return(
        <View style={styles.container}>
            <View style={styles.iconenom}>
                <MaterialIcons name="home-filled" style={styles.iconmenu} />
                Home
            </View>
            <View style={styles.iconenom}>
                <SimpleLineIcons name="trophy" style={styles.iconmenu} />
                Classement
            </View>
            <View style={styles.iconenom}>
                <FontAwesome6 name="clock-rotate-left" style={styles.iconmenu} />
                Parcours
            </View>
            <View style={styles.iconenom}>
                <Octicons name="gear" style={styles.iconmenu} />
                Parametre
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{      
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        flexDirection:'row',
        gap:5,
        justifyContent:'space-between',
        marginBottom:15,
    },
    iconmenu:{
        color:'gray',
        fontSize:25,
        marginBottom:10,
    },   
    iconenom:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:12,
        flexDirection:'column',
        marginTop:10,
        alignItems:'center',
    },
});