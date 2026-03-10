import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { REGIONS_CAMEROUN } from '../../data/regions'; // Ton fichier avec les 10 régions

const { width: screenWidth } = Dimensions.get('window');

export default function AffichageCarte() {
  return (
    <View style={styles.container}>
      {/* Le cadre du SVG */}
      <Svg 
        width={screenWidth} 
        height={screenWidth} 
        viewBox="0 0 1000 1000" // Garde bien 1000 car tes coordonnées "d" sont basées dessus
      >
        <G fill="#6f9c76" stroke="#ffffff" strokeWidth="2">
          {REGIONS_CAMEROUN.map((region) => (
            <Path
              key={region.id}
              d={region.path}
              // Ajoute onPress ici plus tard pour le quiz
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
    justifyContent: 'center', // Centre la carte au milieu de l'écran
  },
});
