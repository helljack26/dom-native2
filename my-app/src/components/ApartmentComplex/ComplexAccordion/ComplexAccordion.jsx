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
    PartsBlock,
    BlockItem,
    BlockItemCol,
    BlockItemInfo,
    BlockItemName,
    BlockItemDescription,
    BlockItemLink,
    BlockItemLinkText,
    DoneLabel,
    LabelText,
    ExpiryDateLabel,
} = styles;

const ComplexAccordion = ({ details }) => {
    const {
        name,
        description,
        objectDetails,
        objectBenefits,
        parts,
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
    // Item component
    const PartsBlockItem = ({ data }) => {
        const { name, description, isDone, linkToChess } = data;
        if (data === undefined) {
            return
        } else {
            return (
                <BlockItem>
                    <BlockItemCol>
                        <BlockItemInfo>
                            <BlockItemName>
                                {name} &nbsp;
                            </BlockItemName>
                            <BlockItemDescription style={{ flexShrink: 2 }}>
                                {description}
                            </BlockItemDescription>
                        </BlockItemInfo>
                        <BlockItemLink
                        // onPress={() => {
                        //     /* 1. Navigate to the Details route with params */
                        //     navigation.navigate('ApartmentsComplexPageRealtor', {
                        //         complexId: data.complexId
                        //     });
                        // }}
                        >
                            <BlockItemLinkText>
                                Смотреть шахматку
                            </BlockItemLinkText>
                        </BlockItemLink>
                    </BlockItemCol>
                    <BlockItemCol>
                        {isDone !== undefined ? (
                            isDone === true ?
                                <DoneLabel>
                                    <LabelText>
                                        Сдан
                                    </LabelText>
                                </DoneLabel>
                                :
                                <ExpiryDateLabel>
                                    <LabelText>
                                        {isDone}
                                    </LabelText>
                                </ExpiryDateLabel>)
                            : null}
                    </BlockItemCol>
                </BlockItem>
            )
        }
    }
    const [collapsed1, setCollapsed1] = useState(true);
    const [isEnabled1, setIsEnabled1] = useState(false);

    const [collapsed2, setCollapsed2] = useState(true);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const [collapsed3, setCollapsed3] = useState(true);
    const [isEnabled3, setIsEnabled3] = useState(false);

    const [collapsed4, setCollapsed4] = useState(true);
    const [isEnabled4, setIsEnabled4] = useState(false);

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
    const combine4 = function () {
        setCollapsed4(!collapsed4)
        setIsEnabled4((previousState) => !previousState)
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
                <ScrollView>
                    {/*Content of Single Collapsible*/}
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

                {/* Parts */}
                <Block_header onPress={combine4}   >
                    <Block_header_Text >
                        Корпуса
                    </Block_header_Text>
                    <AntDesign
                        name={isEnabled4 ? 'up' : 'down'}
                        size={15}
                        color="black" />
                </Block_header>
                <ScrollView>
                    {/*Content of Single Collapsible*/}
                    <Collapsible collapsed={collapsed4} align="center">
                        <About_block>
                            <About_block_ul>
                                <PartsBlock>
                                    {parts.map((item, id) => <PartsBlockItem data={item} key={id} />)}
                                </PartsBlock>
                            </About_block_ul>
                        </About_block>
                    </Collapsible>
                </ScrollView>
            </About >
        </SafeAreaView >
    );
};

export default ComplexAccordion;
