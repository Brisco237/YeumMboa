import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { REGIONS_CAMEROUN } from '../../data/regions';
import { colors } from '../../theme/color'

const { width: screenWidth } = Dimensions.get('window');

export default function CarteRegional() {
  return (
    <View style={styles.container}>
      <Svg 
        width={screenWidth} 
        height={screenWidth} 
        viewBox="0 0 1000 1000"
      >
        <G fill="#000000" stroke="#ffffff" strokeWidth="4">
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
    backgroundColor:colors['background-light'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    borderWidth:2,
    borderColor:colors['s-green'],
    borderRadius: 10,
    borderStyle:'dashed',
    padding: 15,
  },
});
