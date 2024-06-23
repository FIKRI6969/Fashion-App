import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Heading from "../component/Heading";
import InputText from "../component/InputText";
import Konfirmasi from "../component/Konfirmasi";
import ButtonComponent from "../component/Button";
import IconButton from "../component/IconButton";

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    marginBottom: 50
                }}>
                    <Heading text="Login" />
                </View>
            </View>

            <View style={{}}>
                <InputText placeholder="Email" />
                <InputText placeholder="Password" />
            </View>

            <View style={{
                marginTop: 20,
                marginLeft: 150
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                <Konfirmasi text="Forget your password" />
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <ButtonComponent backgroundColor={"blue"} text="LOGIN" />
            </View>

            <View style={{
                marginTop: -60
            }}>
                <Konfirmasi text="Or login with social account" />
            </View>

            <View style={{
                marginTop: -10
            }}>
                <View style={{
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 10,
                    justifyContent: "center"
                }}>
                    <IconButton imageSource={require('../Icon/google.png')}/>
                    <IconButton imageSource={require('../Icon/facebook.png')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;