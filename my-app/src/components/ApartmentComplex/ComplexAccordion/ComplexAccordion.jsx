import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

// Icon
import { AntDesign } from '@expo/vector-icons';
// Accordion
import Collapsible from 'react-native-collapsible';

import { styles } from './style'
const {
    About,
    Block_header,
    Block_header_Text,
    About_block,
    About_block_ul,
    About_block_ul_li,
    About_block_ul_title,
    About_block_ul_value,
    Benefits_value,
    Description,
    Description_text,
} = styles;

const ComplexAccordion = ({ details }) => {
    const {
        name,
        description,
        objectDetails,
        objectBenefits,
    } = details;

    // Li component
    const Li = ({ data }) => {
        return <About_block_ul_li>
            {/* TODO add link */}
            <About_block_ul_title>
                {data.title} &nbsp;
            </About_block_ul_title>
            <About_block_ul_value>
                {data.value}
            </About_block_ul_value>
        </About_block_ul_li>
    }

    const [collapsed1, setCollapsed1] = useState(true);
    const [isEnabled1, setIsEnabled1] = useState(false);

    const [collapsed2, setCollapsed2] = useState(true);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const [collapsed3, setCollapsed3] = useState(true);
    const [isEnabled3, setIsEnabled3] = useState(false);

    // Open Accordion and change Arrow Icon
    const combine1 = function () {
        setCollapsed1(!collapsed1)
        setIsEnabled1((previousState) => !previousState)
    }
    const combine2 = function () {
        setCollapsed2(!collapsed2)
        setIsEnabled2((previousState) => !previousState)
    }
    const combine3 = function () {
        setCollapsed3(!collapsed3)
        setIsEnabled3((previousState) => !previousState)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <About >
                {/* First */}
                <Block_header onPress={combine1}   >
                    <Block_header_Text >
                        Про {name}
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
                                {objectDetails !== undefined ?
                                    objectDetails.map((item, id) => <Li data={item} key={id} />) : null
                                }
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>

                {/* Benefits */}
                <Block_header onPress={combine2}   >
                    <Block_header_Text >
                        Преимущества
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled2 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                   
                    {/*Content of Single Collapsible*/}
                <ScrollView>
                    <Collapsible collapsed={collapsed2} align="center">
                        <About_block>
                            <About_block_ul>
                                {objectBenefits !== undefined ?
                                    objectBenefits.map((item, id) => <Benefits_value key={id}>• &nbsp; {item}</Benefits_value>) : null
                                }
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>

                {/* Description*/}
                <Block_header onPress={combine3}  >
                    <Block_header_Text >
                        Описание
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled3 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>

                {/*Collapsible Content*/}
                <ScrollView>
                    <Collapsible collapsed={collapsed3} align="center">
                        <Description>
                            <Description_text>{description}</Description_text>
                        </Description>
                    </Collapsible>
                </ScrollView>

            </About >
        </SafeAreaView >
    );
};

export default ComplexAccordion;
