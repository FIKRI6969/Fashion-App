import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
    { id: '1', title: 'My orders', subtitle: 'Already have 12 orders' },
    { id: '2', title: 'Shipping addresses', subtitle: '3 addresses' },
    { id: '3', title: 'Payment methods', subtitle: 'Visa **34' },
    { id: '4', title: 'Promocodes', subtitle: 'You have special promocodes' },
    { id: '5', title: 'My reviews', subtitle: 'Reviews for 4 items' },
    { id: '6', title: 'Settings', subtitle: 'Notifications, password' }
];

const ProfileScreen = () => {

    const [fontsLoaded] = useFonts({
        'Bold': require('../font/MetropolisBold.otf'),
        'Medium': require('../font/MetropolisMedium.otf'),
        'SemiBold': require('../font/MetropolisSemiBold.otf'),
        'Black': require('../font/MetropolisBlack.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Font tidak ditemukan!!!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../icon/search.png')} style={styles.searchIcon} />
            </View>
            <View style={styles.profileHeader}>
                <Text style={styles.profileTitle}>My profile</Text>
                <View style={styles.profileInfo}>
                    <Image source={require('../gambar/Fikri.jpeg')} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>Fikri</Text>
                        <Text style={styles.profileEmail}>fikri@gmail.com</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                        <Image source={require('../icon/right-icon.png')} style={styles.itemArrow} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    profileHeader: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileTitle: {
        fontSize: 30,
        fontFamily: 'Bold',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    profileEmail: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'Medium',
    },
    list: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Medium',
    },
    itemArrow: {
        width: 24,
        height: 24,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default ProfileScreen;
