import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Headline from '../komponen/Headline';
import InputText from '../komponen/Input-text';
import ButtonComponent from '../komponen/Button';
import Konfirmasi from '../komponen/Konfirmasi';
import IconButton from '../komponen/IconButton';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ marginBottom: 50 }}>
          <Headline text="Login" />
        </View>

        <View>
          
          <InputText
            placeholder="Email"
            borderColor="gray"
            keyboardType="email-address"
            placeholderTextColor="gray"
          />

          <InputText
            placeholder="Password"
            borderColor="gray"
            placeholderTextColor="gray"
            passwordRules="*"
            secureTextEntry
          />

        </View>

        <View style={{ marginTop: -10, marginLeft: 130 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Konfirmasi text="Forgot your password?" />
            <Image
              source={require('../gambar/round-arrow_right_alt-24px.png')}
              style={{ marginLeft: 210, marginTop: -24.5 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -12 }}>
          <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 80 }}>
          <Konfirmasi text="Or login with social account" />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              marginTop: -20,
              justifyContent: 'center',
            }}
          >
            <IconButton imageSource={require('../gambar/google.png')} />
            <IconButton imageSource={require('../gambar/facebook.png')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
