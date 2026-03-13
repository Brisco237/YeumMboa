import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { DEPARTEMENTS_CAMEROUN } from '../../data/departements_cameroun';
import { colors } from '../../theme/color';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width: screenWidth } = Dimensions.get('window');

export default function CarteDepartemental() {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gesture pinch (zoom)
  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = e.scale;
    })
    .onEnd(() => {
      if (scale.value < 1) scale.value = 1;
      if (scale.value > 4) scale.value = 4;
    });

  // Gesture pan (déplacement)
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
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
            viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <G fill="#000000" stroke="#ffffff" strokeWidth="1">
              {DEPARTEMENTS_CAMEROUN.map((departement) => (
                <Path key={departement.id} d={departement.path} />
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
    flex: 1,
    backgroundColor: colors['background-light'],
    marginTop: 40,
    borderWidth: 2,
    borderColor: colors['s-green'],
    borderRadius: 10,
    borderStyle: 'dashed',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});