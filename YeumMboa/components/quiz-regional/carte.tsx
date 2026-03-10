import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { REGIONS_CAMEROUN } from '../../data/regions';

const { width: screenWidth } = Dimensions.get('window');

export default function AffichageCarte() {
  return (
    <View style={styles.container}>
      <Svg 
        width={screenWidth} 
        height={screenWidth} 
        viewBox="0 0 1000 1000"
      >
        <G fill="#16301a" stroke="#ffffff" strokeWidth="5">
          {REGIONS_CAMEROUN.map((region) => (
            <Path
              key={region.id}
              d={region.path}
            />
          ))}
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
