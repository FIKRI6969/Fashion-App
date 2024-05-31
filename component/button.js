import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ButtonComponent = ({ backgroundColor, text }) => {
  return (
      <View style={{
        backgroundColor: backgroundColor,
        width: 343, 
        height: 48,
        borderRadius: 25,
        marginLeft: 25,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          lineHeight: 20,
        }}>
          {text}
        </Text>
      </View>
  )
};

export default ButtonComponent;