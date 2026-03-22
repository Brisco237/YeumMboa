import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { DEPARTEMENTS_CAMEROUN } from '../../data/departements_cameroun';
import { colors } from '../../theme/color';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useEffect } from 'react';


const { width: screenWidth } = Dimensions.get('window');

export default function CarteDepartemental(
  {currentRegion,score,setScore,vies,setVies,
    gameOver,setRemainingRegions,remainingRegions,
    setGameOver,setCurrentRegion,setSelectedRegion,
    showAnswer,setShowAnswer,selectedRegion,setCorrectAnswers,
    correctAnswers,setIncorrectAnswers,incorrectAnswers,
    setQuestionNumber,questionNumber
    }
  ){
  const getRandomRegion = (regionsArray) => {
    const index = Math.floor(Math.random() * regionsArray.length);
    return regionsArray[index];
  };
  useEffect(() => {
    if (remainingRegions.length > 0) {
      setCurrentRegion(getRandomRegion(remainingRegions));
    }
  }, []);

  const handleRegionClick = (departement) => {
    if (showAnswer || gameOver) return;
    setSelectedRegion(departement);
    setShowAnswer(true);

    if(departement.name === currentRegion.name) {
      setScore(score + 10);
      setCorrectAnswers(correctAnswers + 1); 
    }else{
      setVies(vies - 1);
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setRemainingRegions((prev) =>
      prev.filter((r) => r.id !== currentRegion.id)
    );

    // Passer à la prochaine question après 1.5 sec
    setTimeout(() => {
      if (vies - (departement.name !== currentRegion.name ? 1 : 0) <= 0 || remainingRegions.length <= 1) {
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
    setQuestionNumber(questionNumber + 1);
  }; 









  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gesture pinch (zoom)
  const pinchGesture = Gesture.Pinch()
  .onUpdate((e) => {
    // Zoom autour du point des doigts
    const newScale = e.scale;
    // Calcul du déplacement pour garder le focus sur les doigts
    translateX.value = e.focalX - (e.focalX - translateX.value) * (newScale / scale.value);
    translateY.value = e.focalY - (e.focalY - translateY.value) * (newScale / scale.value);

    scale.value = newScale;
  })
  .onEnd(() => {
    if (scale.value < 1) scale.value = 1;
    if (scale.value > 5) scale.value = 5;
  });

  // Gesture pan (déplacement)
  const panGesture = Gesture.Pan()
  .onUpdate((e) => {
    translateX.value = Math.min(Math.max(e.translationX, -80), 80);
    translateY.value = Math.min(Math.max(e.translationY, -200), 80);
  });

  // Combiner les deux gestures
  const composedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

  // Style animé appliqué au SVG
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={animatedStyle}>
          <Svg
            width={screenWidth}
            height={screenWidth}
            viewBox="0 0 208.32686 296.17682"
            preserveAspectRatio="xMidYMid meet"
          >
            <G fill="#f8f6f6" stroke="#000000" strokeWidth="1">
              {DEPARTEMENTS_CAMEROUN.map((departement) => (
                <Path 
                  key={departement.id} 
                  d={departement.path} 
                  fill={
                    !showAnswer? "white": 
                    departement.name === currentRegion.name
                    ? colors['green']
                    : departement.name === selectedRegion?.name
                    ? colors['red']
                    : 'white'
                  } 
                  onPress={() => handleRegionClick(departement)}
                />
              ))}
            </G>
          </Svg>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors['background-light'],
    marginTop:20,
    borderWidth: 2,
    borderColor: colors['s-green'],
    borderRadius:10,
    borderStyle: 'dashed',
    padding:40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
  },
});