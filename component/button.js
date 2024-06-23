import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const ButtonComponent = ({ backgroundColor, text }) => {
  const [fontsLoaded] = useFonts({
    'Medium': require('../fonts/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: backgroundColor,
        borderRadius: 25,
        width: 343,
        height: 48,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginBottom: 100
      }}>
        <Text style={{
          fontFamily: 'Medium',
          fontSize: 14,
          lineHeight: 20,
          color: 'white'
        }}>
          {text}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ButtonComponent;