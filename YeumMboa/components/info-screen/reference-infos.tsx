import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../../theme/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';


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
    }
});