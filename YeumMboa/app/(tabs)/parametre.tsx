import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import Trait from '../../components/trait';
import Logo from '../../components/logo';
import ReglageSon from '../../components/parametre-page/reglageson';
import {colors} from '../../theme/color';


export default function SettingsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <AntDesign name="arrow-left" style={styles.arrowleft} />
        </TouchableOpacity>
        <Text style={styles.title}>Paramètres</Text>
      </View>
      <Trait />
      <View style={styles.logo} >
        <Logo />
      </View>
      <View>
        <ReglageSon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors['background-light'],
  },
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
    marginTop:30,
    alignItems:'center',
  }
});