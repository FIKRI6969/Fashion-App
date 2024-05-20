import React from "react";
import { View, Text } from 'react-native';

const Teks = () => {
  return (
    <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            margin: 50,
        }}>
            SELAMAT DATANG
        </Text> 
    </View>
  );
}

export default Teks;