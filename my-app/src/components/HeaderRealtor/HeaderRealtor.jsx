import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, TextInput } from 'react-native';


export default function HeaderRealtor() {
    const [number, onChangeText] = React.useState(null);
    return (
        <View style={styles.header}>
            <View style={styles.header_block}>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.buttonImg} source={require("../../../assets/icon/Hamburger_icon.png")} />
                </TouchableOpacity>

                <View style={styles.input_block}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={number}
                        placeholder="Поиск..."
                        keyboardType="default"
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.buttonImgSearch} source={require("../../../assets/icon/search_icon-01.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonBar}>
                    <TouchableOpacity style={styles.bellButton} onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.bellButtonImg} source={require("../../../assets/icon/bell_icon.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userIcon} onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.userPhotoImg} source={require("../../../assets/icon/user_photo.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        marginTop: 45,
        paddingHorizontal: 5,
        height: 42,
        width: '100%',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1.5,
        paddingBottom: 15,
    },

    header_block: {
        width: '100%',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input_block: {
        flex: 2.4,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 17,
    },
    button: {
        width: 30,
        height: 25,
        padding: 10,
        marginBottom: 15,
        marginLeft: 5,
        // marginRight: 5,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    buttonImgSearch: {
        width: 24,
        height: 24
    },
    buttonImg: {
        width: 22,
        height: 22
    },
    input: {
        width: '80%',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 1.5,
        borderStyle: 'solid',
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 10,
    },
    searchButton: {
        backgroundColor: '#0072db',
        width: 40,
        height: 40,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 0,
    },
    buttonBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    bellButton: {
        width: 20,
        height: 22,
        resizeMode: 'stretch',
        marginRight: 15,
        marginLeft: 0,
    },
    bellButtonImg: {
        width: 20,
        resizeMode: 'contain',
        height: 23
    },
    userPhotoImg: {
        width: 32,
        height: 32
    },
});
