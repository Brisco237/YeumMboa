import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../../theme/color';
import Entypo from '@expo/vector-icons/Entypo';

export default function InfoMission(){
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Entypo name="flag" style={styles.flag} />
                    <Text style={{fontFamily:'Montserrat-Bold'}}>Notre Mission</Text>
                </View>
                <Text style={styles.text}>
                    YeumMboa s'engage à préserver et à promouvoir la richesse du patrimoine 
                    culturel et historique du Cameroun à travers une plateforme éducative innovante.
                    Notre objectif est de rendre la connaissance accessible à tous, en célébrant la 
                    diversité qui fait la force de notre nation.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
    },
    flag:{
        color:colors['red'],
        fontSize:18,
    },
    head:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    text:{
        fontFamily:'PlusJakartaSans-Regular',
        fontSize:14,
        marginTop:15,
    },
})