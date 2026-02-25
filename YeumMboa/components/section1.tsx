import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/color';
import { getReactNavigationConfig } from 'expo-router/build/getReactNavigationConfig';

export default function Section1() {
    return (
        <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bienvenue sur YeumMboa !</Text>
                <Text style={styles.sectionDescription}>
                    Découvrez le Cameroun à travers une expérience ludique et interactive. 
                    Explorez et apprenez plus sur le Cameroun tout en jouant.
                </Text>
                <View style={styles.buttons}>
                    <Text style={styles.btn1}>Culture</Text>
                    <Text style={styles.btn2}>Histoire</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop:20,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: colors["green"],
        padding: 20,
        borderRadius: 10,
    },
    sectionTitle: {
        fontFamily:'PlusJakartaSans-bold',
        color:'#fff',
        fontSize: 24,
    },
    sectionDescription: {
        color:'#fff',
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'PlusJakartaSans-Regular',
        lineHeight: 24,
    },
    btn1:{
        fontFamily:'PlusJakartaSans-bold',
        backgroundColor: colors["yellow"],
        padding:10,
        borderRadius:5,
    },
    btn2:{
        fontFamily:'PlusJakartaSans-bold',
        backgroundColor: colors["background-light"],
        padding:10,
        borderRadius:5,
    }, 
    buttons:{
        marginTop:20,
        flexDirection:'row',
        gap:5,
    },
});