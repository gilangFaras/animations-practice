import {Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useEffect} from 'react';

const Characters = (props: {
  character: string;
  index: number;
  textLength: number;
  currentLine:number;
}) => {
  const {character, index, currentLine} = props;

  const opacityAnimation = new Animated.Value(0);
  const panX = new Animated.Value(80);
  const panY = new Animated.Value(100);

  const animationOut = () => {
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
    ]).start();
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        useNativeDriver: false,
        toValue: 1,
        duration: 600,
        easing: Easing.ease,
        delay: 200 * index,
      }),
      Animated.timing(panX, {
        useNativeDriver: false,
        toValue: 0,
        duration: 550,
        easing: Easing.bezier(0, 0, 0.22, 1),
        delay: 205 * index,
      }),
      Animated.timing(panY, {
        useNativeDriver: false,
        toValue: 0,
        duration: 1500,
        easing: Easing.bezier(0, 0, 0.29, 0.98),
      }),
    ]).start(() => {
      setTimeout(animationOut, 2500);
    });
  }, [currentLine]);

  return (
    <Animated.View
      style={[
        styles.lyrics,
        {opacity: opacityAnimation, transform: [{translateX: panX}, {translateY:panY}]},
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
