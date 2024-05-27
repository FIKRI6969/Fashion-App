import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import CustomButton from "./tombol";
import Teks from "./text";

const TampilanUtama = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Teks />
        <Image
          source={require('./bmth.jpeg')}
          style={{ width: 300, height: 300, marginVertical: 90 }}
          />
          <ButtonComponent backgroundColor='red' text='Login'/>
      </View>
    </SafeAreaView>
  );
}

const ButtonComponent = ({backgroundColor, text})=>{
  return(
    <View style={{
      backgroundColor: backgroundColor,
       width: 100, height: 50,
      bondenRadius: 10,
      marginLeft: 10
  }}>
      <Text style={{
          color: 'white',
          textAlign:'center',
          lineHeight: 50,
          fontSize: 20,
          fontWeight: 'bold'
      }}>
          {text}
      </Text>
      </View>
    
  )
}

export default TampilanUtama;