import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
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
                <Text style={{fontFamily:'PlusJakartaSans-Bold', fontSize:12}}>Accueil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/classement')}
            >
                <SimpleLineIcons name="trophy" style={styles.iconmenu} />
                <Text style={{fontFamily:'PlusJakartaSans-Bold', fontSize:12}}>Classement</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/parcours')}
            >
                <FontAwesome6 name="clock-rotate-left" style={styles.iconmenu} />
                <Text style={{fontFamily:'PlusJakartaSans-Bold', fontSize:12}}>Parcours</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.iconenom}
                onPress={() => router.push('/(tabs)/parametre')}
            >
                <Octicons name="gear" style={styles.iconmenu} />
                <Text style={{fontFamily:'PlusJakartaSans-Bold', fontSize:12}}>Paramètre</Text>
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
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:12,
        flexDirection:'column',
        marginTop:10,
        alignItems:'center',
    },
});