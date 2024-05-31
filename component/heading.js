import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Heading = ({ text }) => {
    return (
        <SafeAreaView>
        <View style={{
            marginLeft: 20,
            marginBottom: 20,
            alignItems: 'Right'
        }}>
            <Text style={{
                fontSize: 34,
                fontWeight: 'bold',
            }}>
            {text}
            </Text>
        </View>
        </SafeAreaView>
    )
};

export default Heading;