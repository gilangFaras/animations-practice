import {View, StyleSheet, Animated} from 'react-native';
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
    const timer = setTimeout(() => {
      if (currentLine < lyrics.length-1) {
        setCurrentLine(currentLine + 1);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentLine]);

  return (
    <View style={styles.container}>
      {/* lyrics  */}
      <Animated.View style={styles.lyricContainer}>
        <View style={styles.lines}>
          {lyrics[currentLine].split('').map((char, idx) => {
            console.log(currentLine, lyrics[currentLine]);
            return (
              <Characters
                character={char}
                index={idx}
                key={`char-${idx}`}
                textLength={lyrics[currentLine].length}
                currentLine={currentLine}
              />
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  lyricContainer: {
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
