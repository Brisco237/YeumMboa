import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Menu from '../../components/menu';
import { colors } from '../../theme/color';
import Trait from '../../components/trait'
import Banniere1 from '../../components/missions-page/banniere1'; 
import ParcoursProgression from '@/components/missions-page/parcours-progression';


export default function MissionsScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Missions</Text>
        <Trait />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Banniere1 />
          <ParcoursProgression />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors['background-light'],
    marginHorizontal:20,
  },
  header:{
    backgroundColor:'white',
    alignItems:'center',
  },
  title:{
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    marginTop:20,
  }
});