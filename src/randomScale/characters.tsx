import {Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';

const Characters = (props: {
  character: string;
  linesLength: number;
  currentLine: number;
}) => {
  const {character, linesLength, currentLine} = props;
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(1)).current;

  // Function to generate random number for animation in delay
  const randomNumber = (max: number) => {
    return Math.floor(Math.floor(Math.random() * max));
  };

  const animationOut = useCallback(() => {
    // Do animation out after 1 sec delay.
    Animated.timing(opacityAnimation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 600,
      easing: Easing.bezier(0.68, -0.01, 0.31, 0.99),
    }).start();
  }, [opacityAnimation]);

  const animationIn = useCallback(() => {
    // reset values
    opacityAnimation.setValue(1);
    scaleAnimation.setValue(0);

    Animated.timing(scaleAnimation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 900,
      easing: Easing.bezier(0.68, -0.01, 0.31, 0.99),
      delay: 50 * randomNumber(linesLength),
    }).start(() => {
      // starts animation out after current animation is done
      setTimeout(animationOut, 1000);
    });
  }, [scaleAnimation, linesLength, animationOut, opacityAnimation]);

  useEffect(() => {
    animationIn();
  }, [animationIn, currentLine]);

  return (
    <Animated.View
      style={{transform: [{scale: scaleAnimation}], opacity: opacityAnimation}}>
      <Text style={styles.lyrics}>{character}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  lyrics: {
    fontSize: 32,
    paddingVertical: 4,
    paddingRight: 2,
  },
});
export default Characters;
