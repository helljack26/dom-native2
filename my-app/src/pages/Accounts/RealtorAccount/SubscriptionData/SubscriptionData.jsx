import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";

import IMAGES from 'res/images'

// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    ContainerHeader,
    ContainerBlockRow,
    ContainerBlockRowTitle,
    ContainerBlockRowValue,
    HeaderText,
    LinkToAddNewObject,
    LinkToAddNewObjectText,
    DropApartmentTypeBlock,
    Drop,
    DropHeader,
    DropContainer,
    DropContainerList,
    DropContainerLi,
} = style;

const SubscriptionData = ({ userEmployees, userSubscription, tabTitle }) => {
    const { handleSubmit } = useForm();

    const {
        // subscriptionId,
        subscriptionDueDate,
        subscriptionEmployeesMax,
        subscriptionType,
        subscriptionTypes
    } = userSubscription;

    const currentNumberOfEmployees = userEmployees !== undefined ? userEmployees.length : null

    const getDaysLeftString = (dueDate) => {
        const currentDate = Date.now();
        const subscriptionDeadline = new Date(dueDate);
        const convertedDate = +subscriptionDeadline.getDate() + "." + (subscriptionDeadline.getMonth() + 1) + "." + subscriptionDeadline.getFullYear()
        const daysLeft = Math.floor((dueDate - currentDate) / 86400000)
        const isDay = dueDate > 86400000 ? `${daysLeft} дней` : 'Сегодня'

        return { convertedDate, isDay }
    }
    const { convertedDate
        // isDay
    } = getDaysLeftString(subscriptionDueDate)

    const [isOpen, setIsOpen] = useState(false);
    const [subscriptionTypeState, setSubscriptionTypeState] = useState();
    const toggling = (state) => setIsOpen(state);
    const onSubscriptionTypeSelectClicked = value => () => { setSubscriptionTypeState(value); setIsOpen(false); };

    // Submit handler
    const onSubmit = (data) => {
        if (subscriptionTypeState !== subscriptionType) {
            data.newSubscription = subscriptionTypeState
            console.log('кайф', data)
        }
        return
    };
    return (
        <Container as='form' onSubmit={handleSubmit(onSubmit)}>
            <ContainerHeader>

                <HeaderText >
                    {tabTitle}
                </HeaderText>

            </ContainerHeader>

            <ContainerBlock>
                <ContainerBlockRow>
                    <ContainerBlockRowTitle>
                        Ваш тариф:
                    </ContainerBlockRowTitle>
                    <ContainerBlockRowValue>
                        {subscriptionType}
                    </ContainerBlockRowValue>
                </ContainerBlockRow>

                <ContainerBlockRow>
                    <ContainerBlockRowTitle>Тариф заканчивается:</ContainerBlockRowTitle>
                    <ContainerBlockRowValue>{convertedDate}</ContainerBlockRowValue>
                </ContainerBlockRow>

                <ContainerBlockRow>
                    <ContainerBlockRowTitle>Добавлено агентов:</ContainerBlockRowTitle>

                    <ContainerBlockRowValue>
                        {currentNumberOfEmployees} из {subscriptionEmployeesMax} возможных
                    </ContainerBlockRowValue>
                </ContainerBlockRow>

                <DropApartmentTypeBlock>
                    <ContainerBlockRowTitle>Тарифы</ContainerBlockRowTitle>

                    <Drop onMouseLeave={() => toggling(false)}>
                        <DropHeader value='any' onClick={() => toggling(true)}
                            style={{ backgroundImage: `url(${isOpen ? IMAGES.arrow_down : IMAGES.arrow_up})` }}
                        >
                            {subscriptionTypeState || subscriptionType}
                        </DropHeader>

                        {isOpen && (
                            <DropContainer>
                                <DropContainerList>
                                    {subscriptionTypes.map((option, id) => {
                                        const isActive = option === subscriptionTypeState
                                        return <DropContainerLi isActive={isActive} value={option} key={id}
                                            onClick={onSubscriptionTypeSelectClicked(option)}>
                                            {option}
                                        </DropContainerLi>
                                    })}
                                </DropContainerList>
                            </DropContainer>
                        )}
                    </Drop>
                </DropApartmentTypeBlock>

                {/* Continue */}
                <LinkToAddNewObject
                    as='button'
                    type="submit">
                    <LinkToAddNewObjectText>Продолжить</LinkToAddNewObjectText>
                </LinkToAddNewObject>

            </ContainerBlock>
        </Container >
    )
}
export default SubscriptionData;