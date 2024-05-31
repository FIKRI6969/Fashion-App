import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Konfirmasi = ({ text = "Default Text", color = "Black", fontSize = 14 }) => {
    return (
        <SafeAreaView>
            <View style={{
                alignItems: 'Right'
            }}>
                <Text style={{
                    fontSize: Number (fontSize),
                    color: color
                }}>
                    {text}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Konfirmasi;