import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../theme/color';
import Trait from '../trait';


export default function ReglageSon() {
  const [isMusic, setIsMusic] = useState(false);
  const [isSoundEffects, setIsSoundEffects] = useState(false);
  
  const toggleMusic = () => {
    setIsMusic(previousState => !previousState);
  };
  
  const toggleSoundEffects = () => {
    setIsSoundEffects(previousState => !previousState);
  };

  return (
    <View>
      <View style={styles.son}>
        <Text style={styles.titleson}>Réglage du son</Text>
        <View style={styles.containerson}>
          <View style={styles.son1}>
            <View style={styles.musique}>
              <Ionicons name="musical-notes" style={styles.iconson} />
              <Text style={styles.textson}>Musique</Text> 
            </View>
            <Switch
              trackColor={{ false: "#767577", true:'#c6eec0' }}
              thumbColor={isMusic ? "#c6eec0" : "#f4f3f4"}
              onValueChange={toggleMusic}
              value={isMusic}
              style={styles.switch}
            />
          </View>
          <Trait />
          <View style={styles.son1}>
            <View style={styles.musique}>
              <Feather name="volume-2" style={styles.iconson2} />
              <Text style={styles.textson}>Effets sonores</Text> 
            </View>
            <Switch
              trackColor={{ false: "#767577", true:'#c6eec0' }}
              thumbColor={isSoundEffects ? "#edf394" : "#f4f3f4"}
              onValueChange={toggleSoundEffects}
              value={isSoundEffects}
              style={styles.switch}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowleft:{
    fontSize: 24,
    marginTop:5,
  },
  header: {
    marginTop:30,
    marginLeft:20,
    marginBottom:10,
    flexDirection:'row',
    gap:50,
  },
  title: {
    fontFamily:'PlusJakartaSans-Bold',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo:{
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
  },
  son:{
    marginTop:40,
  },
  titleson:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize: 18,
    marginLeft:15,
    color:'black',
  },
  son1:{
    marginTop:15,
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  containerson:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  musique:{
    flexDirection:'row',
    gap:15,
  },
  iconson:{
    fontSize: 20,
    color: colors['green'],
    backgroundColor:'#c6eec0',
    padding:10,
    borderRadius:5,
  },
  textson:{
    fontFamily:'PlusJakartaSans-Regular',
    fontSize: 16,
    marginTop:10,
  },
  switch:{
    height:25,
  },
  iconson2:{
    color:'white',
    fontSize: 20,
    backgroundColor:colors['yellow'],
    padding:10,
    borderRadius:5,
  }
});