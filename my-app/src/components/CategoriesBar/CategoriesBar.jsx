import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CATEGORIES from '../../res/strings'

export default function CategoriesBar() {
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();

    const RenderItem = ({ item, id }) => {
        const backgroundColor = item.id === selectedId ? "whitesmoke" : "black";
        return (
            <TouchableOpacity key={id}
                onPress={() => {
                    return navigation.navigate(item.path),
                        setSelectedId(item.id)
                }
                }
                style={[styles.categories_item, backgroundColor]} >
                {item.icon}
                <Text
                    style={styles.categories_item_text}
                >{item.title}</Text>
            </TouchableOpacity >
        );
    };
    return (
        <SafeAreaView>
            <ScrollView
                style={styles.categories}
                horizontal={true} >
                <View style={styles.categories_block}>
                    {CATEGORIES.map((item, id) => {
                        return <RenderItem item={item} key={id} />
                    })}
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    categories: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    categories_block: {
        width: '150%',
        flex: 1,
        flexDirection: "row",
        paddingRight: 20,
    },
    categories_item: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 5,
        height: 90,
    },
    categories_item_text: {
        marginTop: 8,
        fontSize: 10,
    }
});
