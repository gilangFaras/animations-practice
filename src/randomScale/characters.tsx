import {Text, Animated, StyleSheet} from 'react-native';
import React from 'react';

const Characters = (props: {character: string}) => {
  const {character} = props;

  return (
    <Animated.View style={[styles.lyrics]}>
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
