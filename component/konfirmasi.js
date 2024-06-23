import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const Konfirmasi = ({ text = "Default Text", color = "Black", fontSize = 14 }) => {
    const [fontsLoaded] = useFonts({
        'Medium': require('../fonts/Metropolis-Medium.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={style.container}>
                <Text>Font tidak ditemukan!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={style.center}>
                <Text style={[style.text, { color, fontSize: Number(fontSize)}]}
                >
                    {text}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        alignItems: "center",
    },
    text: {
        fontFamily: "Medium",
        padding: 3,
        lineHeight: 20,
    },
    errorText: {
        fontSize: 16,
        color: "red",
    }
});

export default Konfirmasi;