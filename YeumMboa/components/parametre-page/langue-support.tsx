import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, version } from 'react';
import { colors } from '../../theme/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function LangueSupport() {
    const [language, setLanguage] = useState("Français");

    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Langue</Text>
            <View style={styles.buttonlangue}>
                <TouchableOpacity style={[styles.button,language === "Français" && styles.active]} 
                    onPress={()=>setLanguage('Français')}>
                    <Text style={language === "Français" && {color:"white",fontFamily:'Montserrat-Bold'}}>
                      <Text style={{fontFamily:'Montserrat-Bold'}}>Français</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,language === "Anglais" && styles.active]} 
                    onPress={()=>setLanguage('Anglais')}>
                    <Text style={language === "Anglais" && {color:"white",fontFamily:'Montserrat-Bold'}}>
                      <Text style={{fontFamily:'Montserrat-Bold'}}>Anglais</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title2}>Support</Text>
            <View style={styles.buttonsupport}>
                <TouchableOpacity onPress={()=>{}} style={{flexDirection:'row',gap:10, alignItems:'center'}}>
                  <FontAwesome name="envelope-o" size={20} color="black" />
                  <Text style={styles.textsupport}>Contacter le support</Text>
                </TouchableOpacity>
                <Fontisto name="arrow-right" size={12} color="gray" />
            </View>
            <View style={styles.infosupport}>
                <Text style={styles.emailsupport}>kamdembrice770@gmail.com</Text>
                <Text style={styles.versionapp}>Version 1.0.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    height:'100%',
  },
  title1:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:14,
    marginLeft:15,
    color:'black',
  },
  title2:{
    marginTop:30,
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:14,
    marginLeft:15,
    color:'black',
  },
  buttonlangue:{
    marginTop:20,
    marginLeft:15,
    marginRight:20,
    flexDirection:'row',
  },
  button:{
    flex:1,
    padding:10,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
    marginHorizontal:5,
  },
  active:{
    backgroundColor: colors['red'],
  },
  text:{
    color:'white',
  },
  buttonsupport:{
    marginTop:20,
    marginLeft:15,
    backgroundColor:'white',
    padding:15,
    borderRadius:10,
    marginRight:20,
    marginBottom:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textsupport:{
    fontFamily:'PlusJakartaSans-Regular',
    color:'black',
    fontSize:14,
    marginTop:2,
  },
  infosupport:{
    alignItems:'center',
    marginBottom:30,
  },
  emailsupport:{
    fontFamily:'PlusJakartaSans-Regular',
    color:'gray',
    fontSize:12,
  }, 
  versionapp:{
    marginTop:10,
    fontFamily:'PlusJakartaSans-Regular',
    color:'gray',
    fontSize:12,
  }
});