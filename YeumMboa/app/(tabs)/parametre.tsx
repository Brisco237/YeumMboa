import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import Trait from '../../components/trait';
import Logo from '../../components/logo';
import ReglageSon from '../../components/parametre-page/reglageson';
import {colors} from '../../theme/color';
import LangueSupport from '../../components/parametre-page/langue-support'; 


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
      <ScrollView>
        <View style={styles.logo} >
          <Logo />
        </View>
        <View>
          <ReglageSon />
        </View>
        <View>
          <LangueSupport />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors['background-light'],
  },
  arrowleft:{
    fontSize: 20,
    marginTop:5,
  },
  header: {
    marginTop:20,
    marginLeft:20,
    marginBottom:10,
    flexDirection:'row',
    gap:50,
  },
  title: {
    fontFamily:'PlusJakartaSans-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo:{
    marginTop:20,
    alignItems:'center',
  }
});