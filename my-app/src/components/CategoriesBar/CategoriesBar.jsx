import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, ScrollView, SafeAreaView, View } from 'react-native';
// import { Link } from "react-router-native";

const CATEGORIES = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Квартиры",
        path: "/apartments",
        uri: require("../../../assets/categories-icon/apartment_categorie.png"),
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Дома",
        path: "/houses",
        uri: require("../../../assets/categories-icon/houses_categorie.png"),
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Участки",
        path: "/plots",
        uri: require("../../../assets/categories-icon/plots_categorie.png"),
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Коммерция",
        path: "/commerce",
        uri: require("../../../assets/categories-icon/commerce_categorie.png"),
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Аренда",
        path: "/rent",
        uri: require("../../../assets/categories-icon/rent_categorie.png"),
    },
];

export default function CategoriesBar() {
    const [selectedId, setSelectedId] = useState(null);

    const RenderItem = ({ item, id }) => {
        const backgroundColor = item.id === selectedId ? "whitesmoke" : "black";
        return (
            <TouchableOpacity key={id}
                onPress={() => setSelectedId(item.id)}
                style={[styles.categories_item, backgroundColor]}>
                <Image style={styles.buttonImg} source={item.uri} />
                <Text
                    style={styles.categories_item_text}
                >{item.title}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView
                style={styles.categories}
                horizontal={true}
            >
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
        marginTop: 10,
        fontSize: 10,
    }
});
