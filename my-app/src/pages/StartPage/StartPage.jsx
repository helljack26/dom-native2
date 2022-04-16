import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function StartPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('User')}>
                <Text style={styles.buttonText}  >
                    User
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Realtor')}>
                <Text style={styles.buttonText} >
                    Realtor
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        fontFamily: FONTS.regular,
    },
    button: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#0072db',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: FONTS.medium,
        color: 'white',
    }
})