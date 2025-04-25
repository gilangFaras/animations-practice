import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Characters from './characters';

const lyrics = ['A simple fold', "That I've told", ' myself to erase'];

const RandomScale = () => {
  const [currentLine, setCurrentLine] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.lines}>
        {lyrics[currentLine].split('').map((char, index) => {
          return <Characters key={index} character={char} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  lines: {
    flexDirection: 'row',
  },
});

export default RandomScale;
