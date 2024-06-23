import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Heading from "../component/Heading";
import InputText from "../component/InputText";
import Konfirmasi from "../component/Konfirmasi";
import ButtonComponent from "../component/Button";
import IconButton from "../component/IconButton";

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{
                marginTop: 30,
            }}>
                <Heading text="Sign up" />
            </View>

            <View style={{}}>
                <InputText placeholder="Name" />
                <InputText placeholder="Email" />
                <InputText placeholder="Password" />
            </View>

            <View style={{
                marginLeft: 170,
                marginTop: -5,

            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Konfirmasi text="Alredy have an account?" fontSize={14}/>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: -10
            }}>
                <ButtonComponent backgroundColor="blue" text="SIGN UP"/>
            </View>

            <View style={{
                marginTop: -60
            }}>
                <Konfirmasi text="Sign up with" fontSize={14}/>
            </View>

            <View style={{
                marginTop: -10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 20,
                    marginTop: 10
                }}>
                    <IconButton imageSource={require('../Icon/google.png')}/>
                    <IconButton imageSource={require('../Icon/facebook.png')}/>
            </View>
            </View>
        </SafeAreaView>
    )
};

export default SignUp;