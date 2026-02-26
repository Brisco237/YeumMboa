import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';


export default function Menu() {
    const router = useRouter();

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/(tabs)')}
            >
                <MaterialIcons name="home-filled" style={styles.iconmenu} />
                <Text style={styles.iconenom}>Accueil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/missions')}
            >
                <Feather name="check-circle" style={styles.iconmenu} />
                <Text style={styles.iconenom}>Missions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/stats')}
            >
                <Ionicons name="stats-chart" style={styles.iconmenu} />
                <Text style={styles.iconenom}>Stats</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/parametre')}
            >
                <FontAwesome6 name="gear" style={styles.iconmenu} />
                <Text style={styles.iconenom}>Paramètre</Text>
            </TouchableOpacity>
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
        marginBottom:5,
    },   
    iconenom:{
        fontFamily:'Montserrat-Bold',
        fontSize:12,
        flexDirection:'column',
        marginTop:10,
        alignItems:'center',
    },
});