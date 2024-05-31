import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "./component/heading";
import InputText from "./component/inputText";
import Konfirmasi from "./component/konfirmasi";
import ButtonComponent from "./component/button";
import IconButton from "./component/iconButton";

const SignUp = () => {
    return (
        <SafeAreaView>
            <View style={{
                marginTop: 100,
            }}>
                <Heading text="Sign up" />
            </View>

            <View style={{}}>
                <InputText placeholder="Name" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
                <InputText placeholder="Email" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
                <InputText placeholder="Password" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
            </View>

            <View style={{
                marginLeft: 170,
                alignItems: 'center',
                marginTop: 10,

            }}>
                <Konfirmasi text="Alredy have an account?"/>
            </View>

            <View style={{
                marginTop: 5
            }}>
                <ButtonComponent backgroundColor="blue" text="SIGN UP"/>
            </View>

            <View style={{
                marginTop: 150,
                alignItems: 'center'
            }}>
                <Konfirmasi text="Sign up with"/>
            </View>

            <View style={{
                marginTop: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 20
                }}>
                    <IconButton ImageSource={require('./Image/google.png')}/>
                    <IconButton ImageSource={require('./Image/facebook.png')}/>
            </View>
            </View>
        </SafeAreaView>
    )
};

export default SignUp;