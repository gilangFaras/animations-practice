import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Characters from './characters';

const lyrics = ['A simple fold', "That I've told", ' myself to erase'];

const RandomScale = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    // Add timeout to set new lyric active line
    // will continue the animation into the next lyric line in 8 seconds
    const timer = setTimeout(() => {
      if (currentLine < lyrics.length - 1) {
        setCurrentLine(currentLine + 1);
      }
    }, 4000);

    // timeout cleanup
    return () => clearTimeout(timer);
  }, [currentLine]);

  return (
    <View style={styles.container}>
      <View style={styles.lines}>
        {lyrics[currentLine].split('').map((char, index) => {
          return (
            <Characters
              key={index}
              character={char}
              linesLength={lyrics[currentLine].length}
              currentLine={currentLine}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lines: {
    flexDirection: 'row',
  },
});

export default RandomScale;
