import {Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useEffect} from 'react';

const Characters = (props: {character: string; index: number; textLength: number, onLineFinish: () => void}) => {
  const {character, index, textLength, onLineFinish} = props;

  const opacityAnimation = new Animated.Value(0);
  const panX = new Animated.Value(80);

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
        easing: Easing.bezier(0,0,0.22,1),
        delay: 205 * index,
      }),
    ]).start(() => {
      if(index === textLength - 1){
        onLineFinish();
      }
    });
  }, [index]);

  return (
    <Animated.View
      style={[
        styles.lyrics,
        {opacity: opacityAnimation, transform: [{translateX: panX}]},
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
