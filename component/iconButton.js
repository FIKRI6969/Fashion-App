import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IconButton = ({ ImageSource}) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Image source={ImageSource} style={styles.image}/>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 92,
        height: 64,
        marginTop: -5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,
    },

    image: {
        width: 30,
        height: 30,
    }
});

export default IconButton;