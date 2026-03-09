import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Menu from '../../components/menu';
import { colors } from '../../theme/color';
import Trait from '../../components/trait'
import Banniere1 from '../../components/missions-page/banniere1'; 
import ParcoursProgression from '@/components/missions-page/parcours-progression';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../../components/arrow-left';


export default function MissionsScreen() {
  return (
    <SafeAreaView style={styles.containersafe}>
      <View style={styles.header}>
        <View style={styles.line}>
          <Text><ArrowLeft /></Text>
          <Text style={styles.title}>Mes Missions</Text>
        </View>
        <Trait />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Banniere1 />
          <ParcoursProgression />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containersafe:{
    flex:1,
  },
  line:{
    flexDirection:'row',
    gap:30,
    alignItems:'center',
    marginTop:15,
    marginLeft:20
  },
  container: {
    backgroundColor:colors['background-light'],
    marginHorizontal:20,
  },
  header:{
    backgroundColor:'white',
  },
  title:{
    fontFamily:'Montserrat-Bold',
    fontSize:20,
  }
});