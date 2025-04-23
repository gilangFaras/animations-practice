import {View, StyleSheet, Animated} from 'react-native';
import React, {useState} from 'react';
import Lyrics from './lyric';

const lyrics = ['夕立が名付けられた', '世界を剥がした時', 'それは波のように', '指の隙間をすり抜けて 消えて' ];

const KyoumenPage = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const onLineFinish = () => {
    console.log(currentLine)
    setCurrentLine(currentLine + 1);
  };

  return (
    <View style={styles.container}>
      {/* lyrics  */}
      <Animated.View style={styles.lyricContainer}>
        {lyrics.map((text, index) => {
          return (
            <Lyrics
              key={index}
              text={text}
              currentLine={currentLine}
              index={index}
              onLineFinish={onLineFinish}
            />
          );
        })}
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
});

export default KyoumenPage;
