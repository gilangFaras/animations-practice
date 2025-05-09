import {Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';

const Characters = (props: {
  character: string;
  index: number;
  textLength: number;
  currentLine: number;
}) => {
  const {character, index, currentLine} = props;

  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const panX = useRef(new Animated.Value(80)).current;
  const panY = useRef(new Animated.Value(100)).current;

  const animationOut = useCallback(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0, 0, 0.29, 0.98),
        delay: 200 * index,
      }),
      Animated.timing(panY, {
        useNativeDriver: false,
        toValue: -80,
        duration: 2000,
        easing: Easing.bezier(0, 0, 0.29, 0.98),
      }),
    ]).start(() => {
      // reset values after animation is done
      panY.setValue(100);
      panX.setValue(80);
    });
  }, [opacityAnimation, panY, index, panX]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        useNativeDriver: false,
        toValue: 1,
        duration: 600,
        easing: Easing.ease,
        delay: 200 * index, // Added delay according to it's index so that the characters sequentially animates in
      }),
      Animated.timing(panX, {
        useNativeDriver: false,
        toValue: 0,
        duration: 550,
        easing: Easing.bezier(0, 0, 0.22, 1),
        delay: 205 * index, // Added delay according to it's index so that the characters sequentially animates in
      }),
      Animated.timing(panY, {
        useNativeDriver: false,
        toValue: 0,
        duration: 1500,
        easing: Easing.bezier(0, 0, 0.29, 0.98),
      }),
    ]).start(() => {
      // After this parallel animations are done, it will run animationOut function in 2.5 seconds
      // So it waits for the animation to be done first, before running the next set of animation(s)
      setTimeout(animationOut, 2500);
    });
  }, [currentLine, animationOut, index, opacityAnimation, panX, panY]);

  return (
    <Animated.View
      style={[
        styles.lyrics,
        {
          opacity: opacityAnimation,
          transform: [{translateX: panX}, {translateY: panY}],
        },
      ]}>
      <Text>{character}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  lyrics: {
    fontSize: 26,
    fontWeight: '500',
    paddingVertical: 4,
    paddingRight: 2,
  },
});

export default Characters;
