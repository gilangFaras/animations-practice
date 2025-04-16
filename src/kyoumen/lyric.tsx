import {Animated, StyleSheet, Easing} from 'react-native';
import React, {useEffect} from 'react';

const Lyrics = (props: {text: string; index: number}) => {
  const {text, index} = props;
  const opacityAnimation = new Animated.Value(0);
  const panY = new Animated.Value(100);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        useNativeDriver: false,
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        delay: 1000 * index,
      }),
      Animated.timing(panY, {
        useNativeDriver: false,
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.33,0,0,1.43),
        delay: 1000 * index,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.Text
      style={[
        styles.lyrics,
        {opacity: opacityAnimation, transform: [{translateY: panY}]},
      ]}>
      {text}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  lyrics: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 4,
  },
});

export default Lyrics;
