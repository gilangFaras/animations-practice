import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Tracking')}>
        <Text>Opacity + Tracking</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('RandomScale')}>
        <Text>Random Scale</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  button: {
    backgroundColor: 'cyan',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 8,
    alignSelf: 'stretch',
  },
});

export default HomeScreen;
