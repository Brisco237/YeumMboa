import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { REGIONS_CAMEROUN } from '../../data/regions';
import { colors } from '../../theme/color'
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useState,useEffect } from 'react'


const { width: screenWidth } = Dimensions.get('window');

export default function CarteRegional(
    {currentRegion,score,setScore,vies,setVies,
    gameOver,setRemainingRegions,remainingRegions,
    setGameOver,setCurrentRegion,setSelectedRegion,
    showAnswer,setShowAnswer,selectedRegion,setCorrectAnswers,
    correctAnswers,setIncorrectAnswers,incorrectAnswers
    }
  ){
  const scale = useSharedValue(1);      
  const translateX = useSharedValue(0); 
  const translateY = useSharedValue(0);

  const getRandomRegion = (regionsArray) => {
    const index = Math.floor(Math.random() * regionsArray.length);
    return regionsArray[index];
  };
  useEffect(() => {
    if (remainingRegions.length > 0) {
      setCurrentRegion(getRandomRegion(remainingRegions));
    }
  }, []);

  const handleRegionClick = (region) => {
    if (showAnswer || gameOver) return;
    setSelectedRegion(region);
    setShowAnswer(true);

    if (region.name === currentRegion.name) {
      setScore(score + 10);
      setCorrectAnswers(correctAnswers + 1); 
    } else{
      setVies(vies - 1);
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setRemainingRegions((prev) =>
      prev.filter((r) => r.id !== currentRegion.id)
    );

    // Passer à la prochaine question après 1.5 sec
    setTimeout(() => {
      if (vies - (region.name !== currentRegion.name ? 1 : 0) <= 0 || remainingRegions.length <= 1) {
        setGameOver(true); // fin du quiz
      } else {
        // Tirer une nouvelle région parmi celles restantes
        const next = getRandomRegion(
          remainingRegions.filter((r) => r.id !== currentRegion.id)
        );
        setCurrentRegion(next);
        setSelectedRegion(null);
        setShowAnswer(false);
      }
    }, 1500)
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
