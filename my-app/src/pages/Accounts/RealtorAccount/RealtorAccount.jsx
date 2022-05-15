import React from 'react';
import { useEffect, useState } from 'react';

import { accountRealtorData } from '@/stores/accountRealtorData.js'

import PersonalData from './PersonalData/PersonalData';
import ObjectData from './ObjectData/ObjectData';
// import EmployeesData from './EmployeesData/EmployeesData';
// import SubscriptionData from './SubscriptionData/SubscriptionData';

// Images
import IMAGES from '@/res/images'
const {
    ExitIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    MainContainer,
    Container,
    ContainerBlock,
    HeaderText,
    Header,
    HeaderNavbar,
    HeaderNavbarLink,
    HeaderNavbarLinkText,
    HeaderBlock,
    HeaderExitBlock,
    HeaderExitButton,
    HeaderExitButtonText,
} = style;

const ACCOUNTHASHLINK = [
    { title: 'Личные данные', hash: '' },
    { title: 'Мои объекты', hash: 'ActiveTab', subHash: 'ArchiveTab' },
    // {     title: 'Сообщения',     hash: '/#message' },
    { title: 'Сотрудники', hash: 'Employees' },
    { title: 'Подписка', hash: 'Subscribtion' },
]

const RealtorAccount = () => {
    const request = accountRealtorData(1)

    const {
        userPersonalData,
        userObject,
        // userMessage,
        userEmployees,
        userSubscription
    } = request;

    const [tab, setTab] = useState('');

    // const isObjectData = tab === 'ActiveTab' || tab === 'ArchiveTab'

    return (
        <>
            <MainContainer>
                <Header>
                    <HeaderBlock>

                        <HeaderText>
                            Личный кабинет
                        </HeaderText>

                        <HeaderNavbar>
                            {ACCOUNTHASHLINK.map((item, id) => {
                                const { title, hash } = item;
                                const isActive = tab === hash
                                return (
                                    <HeaderNavbarLink
                                        isActive={isActive}
                                        onPress={() => setTab(hash)}
                                        key={id}
                                    >
                                        <HeaderNavbarLinkText
                                            isActive={isActive}
                                        >
                                            {title}
                                        </HeaderNavbarLinkText>
                                    </HeaderNavbarLink>
                                )
                            })}

                        </HeaderNavbar>
                    </HeaderBlock>

                    <HeaderExitBlock>
                        <HeaderExitButton>
                            <ExitIcon width={16} />
                            <HeaderExitButtonText>
                                Выйти
                            </HeaderExitButtonText>
                        </HeaderExitButton>
                    </HeaderExitBlock>

                </Header>

                <Container>
                    <ContainerBlock>

                        {tab === ACCOUNTHASHLINK[0].hash && <PersonalData userPersonalData={userPersonalData} />}

                        {tab === ACCOUNTHASHLINK[1].hash && <ObjectData userObject={userObject} />}

                        {/* {pageHash === ACCOUNTHASHLINK[2].hash.slice(1) && <EmployeesData userEmployees={userEmployees} tabTitle={ACCOUNTHASHLINK[2].title} />} */}

                        {/* {pageHash === ACCOUNTHASHLINK[3].hash.slice(1) && <SubscriptionData userEmployees={userEmployees} userSubscription={userSubscription} tabTitle={ACCOUNTHASHLINK[3].title} />} */}
                    </ContainerBlock>

                </Container>
            </MainContainer>
        </>
    )
}


export default RealtorAccount;