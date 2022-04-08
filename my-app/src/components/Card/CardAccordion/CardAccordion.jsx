import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './style'
import Collapsible from 'react-native-collapsible';
import { SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native';

const {
    About,
    Block_header,
    Block_header_Text,
    About_block,
    About_block_ul,
    About_block_ul_li,
    About_block_ul_title,
    About_block_ul_value,
    About_block_ul_link,
    Description,
    Description_text,
} = styles;

const CardAccordion = ({ objectDetails, description }) => {
    const { apartmentType,
        totalArea,
        distanceToSea,
        decorate,
        residentialComplex,
        placeOnChessBoard,
        apartmentClass,
        deadlines } = objectDetails;

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [collapsed1, setCollapsed1] = useState(true);
    const [collapsed2, setCollapsed2] = useState(true);

    const toggleExpanded1 = () => { setCollapsed1(!collapsed1) };
    const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
    const toggleExpanded2 = () => { setCollapsed2(!collapsed2) };
    const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
    const combine1 = function () {
        toggleSwitch1()
        toggleExpanded1()
    }
    const combine2 = function () {
        toggleSwitch2()
        toggleExpanded2()
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <About >
                {/* First */}
                <Block_header onPress={combine1}   >
                    <Block_header_Text >
                        Об объекте
                            </Block_header_Text>
                    <AntDesign
                        name={isEnabled1 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                <ScrollView>
                    {/*Content of Single Collapsible*/}
                    <Collapsible collapsed={collapsed1} align="center">
                        <About_block>
                            <About_block_ul>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Тип недвижимости:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {apartmentType}
                                    </About_block_ul_value>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Общая площадь:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {totalArea} м²
                                        </About_block_ul_value>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Расстояние до моря:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {distanceToSea} м
                                        </About_block_ul_value>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Отделка:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {!decorate ? 'без отделки' : '-'}
                                    </About_block_ul_value>
                                </About_block_ul_li>
                            </About_block_ul>
                            <About_block_ul>
                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        ЖК:
                                    </About_block_ul_title>
                                    {/* TODO add link */}
                                    <TouchableOpacity
                                    // onPress={() => {
                                    //     /* 1. Navigate to the Details route with params */
                                    //     navigation.navigate('CardPage', {
                                    //         itemId: id
                                    //     });
                                    // }}
                                    >
                                        <About_block_ul_link>{residentialComplex}</About_block_ul_link>
                                    </TouchableOpacity>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    {/* TODO add link */}
                                    <About_block_ul_title>
                                        Место на шахматке:
                                        </About_block_ul_title>
                                    <TouchableOpacity
                                    // onPress={() => {
                                    //     /* 1. Navigate to the Details route with params */
                                    //     navigation.navigate('CardPage', {
                                    //         itemId: id
                                    //     });
                                    // }}
                                    >
                                        <About_block_ul_link>{placeOnChessBoard}</About_block_ul_link>
                                    </TouchableOpacity>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Класс дома:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {apartmentClass}
                                    </About_block_ul_value>
                                </About_block_ul_li>

                                <About_block_ul_li>
                                    <About_block_ul_title>
                                        Срок сдачи:
                                        </About_block_ul_title>
                                    <About_block_ul_value>
                                        {deadlines}
                                    </About_block_ul_value>
                                </About_block_ul_li>
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>

                {/* Second */}
                <Block_header onPress={combine2}  >
                    <Block_header_Text >
                        Описание
                            </Block_header_Text>
                    <AntDesign
                        name={isEnabled2 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                {/*Content of Single Collapsible*/}
                <ScrollView>
                    <Collapsible collapsed={collapsed2} align="center">
                        <Description>
                            <Description_text>{description}</Description_text>
                        </Description>
                    </Collapsible>
                </ScrollView>
            </About >
        </SafeAreaView >
    );
};

export default CardAccordion;
