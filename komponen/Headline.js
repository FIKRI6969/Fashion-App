import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const Heading = ({ text }) => {
    const [fontsLoaded] = useFonts({
        'Medium': require('../font/MetropolisMedium.otf'),
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
                alignItems: 'right',
                marginLeft: 20
            }}>
                <Text style={{
                    fontSize: 34,
                    fontFamily: 'Medium',
                }}>
                    {text}
                </Text>
            </View>
        </SafeAreaView>
    )
};

export default Heading;