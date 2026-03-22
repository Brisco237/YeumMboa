import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { REGIONS_CAMEROUN } from '../../data/regions';
import { colors } from '../../theme/color'
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useState } from 'react'


const { width: screenWidth } = Dimensions.get('window');

export default function CarteRegional({currentRegion}){
  const scale = useSharedValue(1);      
  const translateX = useSharedValue(0); 
  const translateY = useSharedValue(0);
  // Région choisi
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleRegionClick = (region) => {
    if (showAnswer) return;
    setSelectedRegion(region);
    setShowAnswer(true);
  }; 

  return (
    <View style={styles.container}>
      <Svg 
        width={screenWidth} 
        height={screenWidth} 
        viewBox="0 0 1000 1000"
      >
        <G fill="#f8f6f6" stroke="#000000" strokeWidth="2">
          {REGIONS_CAMEROUN.map((region) => (
            <Path
              key={region.id}
              d={region.path}
              fill={
                !showAnswer? "white": 
                region.name === currentRegion.name
                ? colors['green']
                : region.name === selectedRegion?.name
                ? colors['red']
                : 'white'
              } 
              onPress={() => handleRegionClick(region)}
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
    marginTop:30,
    borderWidth:2,
    borderColor:colors['s-green'],
    borderRadius: 10,
    borderStyle:'dashed',
    padding: 15,
  },
});
