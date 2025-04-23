import {Animated, StyleSheet, Easing} from 'react-native';
import React, {useEffect} from 'react';
import Characters from './characters';

const Lyrics = (props: {
  text: string;
  currentLine: number;
  index: number;
  onLineFinish: () => void;
}) => {
  const {text, currentLine, onLineFinish, index} = props;
  const panY = new Animated.Value(100);

  // useEffect(() => {
  //   if (currentLine === index) {
  //     console.log
  //     Animated.timing(panY, {
  //       useNativeDriver: false,
  //       toValue: 0,
  //       duration: 1500,
  //       easing: Easing.bezier(0, 0, 0.29, 0.98),
  //     }).start();
  //   }
  // }, [currentLine]);

    return (
      <Animated.View style={[styles.lines, {transform: [{translateY: panY}]}]}>
        {currentLine >= index && text.split('').map((char, idx) => {
          console.log({text});
          return (
            <Characters
              character={char}
              index={idx}
              key={`char-${idx}`}
              textLength={text.length}
              onLineFinish={onLineFinish}
            />
          );
        })}
      </Animated.View>
    );
};

const styles = StyleSheet.create({
  lines: {
    flexDirection: 'row',
  },
});

export default Lyrics;
