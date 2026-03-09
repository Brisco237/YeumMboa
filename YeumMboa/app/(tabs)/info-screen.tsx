import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../components/logo';
import ArrowLeft from '../../components/arrow-left';
import Trait from '../../components/trait';
import {colors} from '../../theme/color';
import InfoMission from '../../components/info-screen/info-mission';
import Equipe from '../../components/info-screen/equipe';
import ReferenceInfo from '../../components/info-screen/reference-infos';


export default function InfoSreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.line}>
                    <Text style={{marginTop:7}}><ArrowLeft /></Text>
                    <Text style={styles.title}>À propos de l'application</Text>
                </View>
                <Trait />
            </View>
            <ScrollView>
                <View style={{marginHorizontal:20}}>
                    <View style={{alignItems:'center',marginVertical:15}}><Logo/></View>
                    <View><InfoMission /></View>
                    <View><Equipe /></View>
                    <View><ReferenceInfo /></View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors['background-light'],
    marginBottom:20
  },
  title: {
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    marginTop:20,
    fontWeight:'bold'
  },
  header: {
    backgroundColor:'white',
  },
  line:{
    flexDirection:'row',
    gap:30,
    marginLeft:10,
    alignItems:'center'
  },

});