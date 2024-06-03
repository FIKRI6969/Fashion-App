import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metro-Semibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.defaultText}>Hello There</Text>
      <Text style={styles.boldText}>Metro Bold</Text>
      <Text style={styles.semiboldText}>Metro SemiBold</Text>
      <Text style={styles.blackText}>Metro Black</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 24,
    color: 'red',
  },
  defaultText: {
    fontSize: 30,
  },
  boldText: {
    fontFamily: 'Metro-Bold',
    fontSize: 30,
  },
  mediumText: {
    fontFamily: 'Metro-Medium',
    fontSize: 30,
  },
  semiboldText: {
    fontFamily: 'Metro-Semibold',
    fontSize: 30,
  },
  blackText: {
    fontFamily: 'Metro-Black',
    fontSize: 30,
  },
});

export default App;
