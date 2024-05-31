import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "./component/heading";
import InputText from "./component/inputText";
import Konfirmasi from "./component/konfirmasi";
import ButtonComponent from "./component/button";
import IconButton from "./component/iconButton";

const Login = () => {
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    marginTop: 50
                }}>
                    <Heading text="Login" />
                </View>

                <View style={{
                    marginTop: 50
                }}>
                <InputText placeholder="Email" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
                <InputText placeholder="Password" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
                </View>

                <View style={{
                    marginLeft: 220,
                    marginTop: 10
                }}>
                    <Konfirmasi text="Forgot Your Password?"/>
                </View>

                <View style={{
                    marginTop: 40
                }}>
                    <ButtonComponent backgroundColor="blue" text="LOGIN"/>
                </View>

                <View style={{
                    marginTop: 200,
                    alignItems: 'center'
                }}>
                    <Konfirmasi text="Or login with social account"/>
                </View>

                <View style={{
                    marginTop: 10
                }}>
                    <View style={{
                        gap: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <IconButton ImageSource={require('./Image/google.png')}/>
                        <IconButton ImageSource={require('./Image/facebook.png')}/>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;