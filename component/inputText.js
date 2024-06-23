import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useFonts } from "expo-font";

const InputText = ({ placeholder, borderColor, placeholderTextColor }) => {
    const [fontsLoaded] = useFonts({
        
        'Medium': require('../fonts/Metropolis-Medium.otf'),
       
    });
    if (!fontsLoaded) {
        return (
            <View>
                <Text>Font tidak ditemukan!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, { borderColor, fontFamily: 'Medium' }]}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        height: 64,
        width: 343,
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        fontFamily: 'Medium',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default InputText;