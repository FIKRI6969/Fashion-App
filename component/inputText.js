import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InputText = ({ placeholder, borderColor, placeholderTextColor }) => {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, {borderColor}]}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },

    input: {
        width: 343,
        height: 64,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 8,
        backgroundColor: 'white',
    },

    text: {
        fontSize: 16
    }
});

export default InputText;