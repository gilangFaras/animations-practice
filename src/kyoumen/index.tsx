import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import React from 'react';
import Lyrics from './lyric';

const lyrics = ['夕立が名付けられた', '世界を剥がした時', 'それは波のように', '指の隙間をすり抜けて 消えて'];

const KyoumenPage = () => {
  return (
    <View style={styles.container}>
      {/* <Pressable onPress={startAnimation}>
        <Text>Start</Text>
      </Pressable> */}

      {/* lyrics  */}
      <Animated.View style={styles.lyricContainer}>
        {lyrics.map((text, index) => {
          return (
            <Lyrics key={index} text={text} index={index} />
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
