import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { DEPARTEMENTS_CAMEROUN } from '../../data/departements_cameroun';
import { colors } from '../../theme/color'

const { width: screenWidth } = Dimensions.get('window');

export default function CarteDepartemental(){
  return (
  <View style={styles.container}>
    <Svg 
      width={screenWidth}  
      height={screenWidth} 
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
    >
      <G fill="#000000" stroke="#ffffff" 
        strokeWidth="1"
      >
        {DEPARTEMENTS_CAMEROUN.map((departement) => (
          <Path key={departement.id} d={departement.path}/>
        ))}
      </G>
    </Svg>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors['background-light'],
    marginTop:40,
    borderWidth:2,
    borderColor:colors['s-green'],
    borderRadius:10,
    borderStyle:'dashed',
    padding:15,
  },
});
