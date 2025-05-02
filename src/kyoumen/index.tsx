import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Characters from './characters';

const lyrics = [
  '夕立が名付けられた',
  '世界を剥がした時',
  'それは波のように',
  '指の隙間をすり抜けて 消えて',
];

const KyoumenPage = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    // Add timeout to set new lyric active line
    // will continue the animation into the next lyric line in 8 seconds
    const timer = setTimeout(() => {
      if (currentLine < lyrics.length - 1) {
        setCurrentLine(currentLine + 1);
      }
    }, 8000);

    // timeout cleanup
    return () => clearTimeout(timer);
  }, [currentLine]);

  return (
    <View style={styles.container}>
      <View style={styles.lines}>
        {/* Breaking down lyrics into characters so it can be animated separately */}
        {/* Lyrics shown will be according to `currentLine` variables which determines the active lyrics line */}
        {lyrics[currentLine].split('').map((char, idx) => {
          return (
            <Characters
              character={char}
              index={idx}
              key={`char-${idx}`}
              textLength={lyrics[currentLine].length}
              currentLine={currentLine} // passing active current line so that the animation will reset every new line
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
  startButton: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  lines: {
    flexDirection: 'row',
  },
});

export default KyoumenPage;
