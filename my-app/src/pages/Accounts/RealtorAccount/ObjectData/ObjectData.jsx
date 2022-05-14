import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import ObjectDataItem from './ObjectDataItem/ObjectDataItem';
// import axios from 'axios';

// Styles
import { style } from './style'
// Styles
const {
    Container,
    ContainerBlock,
    SwitchBlock,
    SwitchButton,
    SwitchBlockButtonTextDesktop,
    SwitchBlockButtonTextMobile,
    ContainerButtonsBlock,
    LinkToAddNewObject,
    LinkToAddNewObjectText,
} = style;

const ObjectData = ({ userObject, hashLinks }) => {
    const {
        userActiveObject,
        userArchiveObject
    } = userObject;

    // Get hash from url if it exist
    const location = useLocation();
    const pageHash = location.hash

    const [isActiveObject, setIsActiveObject] = useState(true);

    useEffect(() => {
        // Switch to archive if archive hash
        if (pageHash === hashLinks.subHash.slice(1)) setIsActiveObject(false)
    }, [pageHash, hashLinks.subHash]);

    const switchHandler = (bool) => {
        setIsActiveObject(bool)
        const hashToSwitch = bool === true ? hashLinks.hash : hashLinks.subHash
        window.location.hash = `#/realtor/account${hashToSwitch}`
    }
    // Length for switch buttons
    const userActiveObjectLength = userActiveObject !== undefined && userActiveObject.length
    const userArchiveObjectLength = userArchiveObject !== undefined && userArchiveObject.length

    const currentObjectData = isActiveObject ? userActiveObject : userArchiveObject;
    return (
        <Container>
            <ContainerButtonsBlock>
                {/* Switch buttons */}
                <SwitchBlock>
                    <SwitchButton
                        isActiveButton={isActiveObject}
                        onClick={() => switchHandler(true)}
                        type='button'
                    >
                        <SwitchBlockButtonTextDesktop>
                            Активные объекты ({userActiveObjectLength})
                        </SwitchBlockButtonTextDesktop>
                        <SwitchBlockButtonTextMobile>
                            Активных ({userActiveObjectLength})
                        </SwitchBlockButtonTextMobile>
                    </SwitchButton>

                    <SwitchButton
                        isActiveButton={!isActiveObject}
                        onClick={() => switchHandler(false)}
                        type='button'
                    >
                        <SwitchBlockButtonTextDesktop>
                            Архивные объекты ({userArchiveObjectLength})
                        </SwitchBlockButtonTextDesktop>
                        <SwitchBlockButtonTextMobile>
                            Архивных ({userArchiveObjectLength})
                        </SwitchBlockButtonTextMobile>
                    </SwitchButton>
                </SwitchBlock>

                <LinkToAddNewObject
                    as='a'
                    href='#/realtor/add'
                >
                    <LinkToAddNewObjectText>
                        Создать объявление
                    </LinkToAddNewObjectText>
                </LinkToAddNewObject>
            </ContainerButtonsBlock>

            <ContainerBlock>
                {currentObjectData.map((item, id) => {
                    return (
                        <ObjectDataItem
                            data={item}
                            key={id}
                            pageHash={pageHash}
                        />)
                })}
            </ContainerBlock>
        </Container>
    )
}
export default ObjectData;