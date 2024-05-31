import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "./component/heading";
import InputText from "./component/inputText";
import ButtonComponent from "./component/button";
import Konfirmasi from "./component/konfirmasi";
import { View } from "react-native";

const ForgetPassword = () => {
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    marginTop: 100
                }}>
                    <Heading text="Forget Password" />
                </View>

                <View style={{
                    padding: 20,
                    marginTop: 20
                }}>
                    <Konfirmasi text="Please , enter your email address. You will receive a link to create a new password via email" fontSize={14}/>
                </View>

                <View style={{}}>
                    <InputText placeholder="Email" borderColor={"#9B9B9B"} placeholderTextColor={"#9B9B9B"}/>
                </View>

                <View style={{
                    marginTop: 5,
                    alignItems: 'center'
                }}>
                    <Konfirmasi text="Not a valid email address. Should be your@email.com" color="red" fontSize={11}/>
                </View>

                <View style={{
                    marginTop: 40
                }}>
                    <ButtonComponent backgroundColor="blue" text="SEND"/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgetPassword;