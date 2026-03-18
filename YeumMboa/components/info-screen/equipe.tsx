import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../../theme/color';

export default function Equipe(){
    return(
        <View>
            <Text style={styles.title}>Equipe de conception</Text>
            <View style={styles.box1}>
                <View style={styles.p1}>
                    <Image source={require('../../assets/images/profile.webp')}
                    style={styles.image}></Image>
                    <Text style={styles.nom}>Kamdem Brice</Text>
                    <Text style={styles.role}>Dev & Historien</Text>
                </View>
                <View style={styles.p1}>
                    <Image source={require('../../assets/images/moumié.png')}
                    style={styles.image}></Image>
                    <Text style={styles.nom}>Moumié Felix</Text>
                    <Text style={styles.role}>Historien</Text>
                </View>
            </View>

            <View style={styles.box2}>
                <View style={styles.p1}>
                    <Image source={require('../../assets/images/ouandié.png')}
                    style={styles.image}></Image>
                    <Text style={styles.nom}>Ernest Ouandié</Text>
                    <Text style={styles.role}>Historien</Text>
                </View>
                <View style={styles.p1}>
                    <Image source={require('../../assets/images/um.png')}
                    style={styles.image}></Image>
                    <Text style={styles.nom}>Ruben Um</Text>
                    <Text style={styles.role}>Historien</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:18,
        marginTop:20,
    },
    box1:{
        flexDirection:'row',
        gap:5,
        marginTop:20,
    },
    box2:{
        flexDirection:'row',
        gap:5,
        marginTop:7,
    },
    p1:{
       backgroundColor:'white',
       padding:15,
       borderRadius:10, 
       flex:1,
       alignItems:'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:50,
        marginBottom:10,
    },
    nom:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:14,
    },
    role:{
        marginTop:5,
        fontSize:12,
        color:colors['red'],
        fontFamily:'Montserrat-Regular',
        alignItems:'center'
    }
})