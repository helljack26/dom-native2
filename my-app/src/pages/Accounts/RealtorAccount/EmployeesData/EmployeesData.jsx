import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import IMAGES from 'res/images'

// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    ContainerHeader,
    ContainerHeaderBlock,
    HeaderText,
    HeaderSubText,
    Drop,
    DropContainer,
    FormInputBlock,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitText,
    LinkToAddNewObject,
    LinkToAddNewObjectText,
    LinkToAddNewObjectIconMobile,
    LinkToAddNewObjectIconMobileCross,
    EmployeeItem,
    EmployeeItemBlock,
    EmployeeImage,
    EmployeeInfoName,
    EmployeeText,
    EmployeeInfoPosition,
    EmployeeInfoBlock,
    EmployeeInfoContainer,
    Button,
    ButtonContainedAbsolute,

    TooltipRemove,
    ButtonContainer,
    ErrorMessage,

} = style;

const EmployeesData = ({ userEmployees, tabTitle }) => {
    const { register, handleSubmit, resetField, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log("🚀 ~ file: EmployeesData.jsx ~ line 44 ~ onSubmit ~ data", data)

        // Clear input value
        resetField('newEmployeeNumber');
        toggling(false)
        return
    };
    // const {

    // } = userEmployees;
    const [isOpen, setIsOpen] = useState(false);
    const toggling = (state) => setIsOpen(state);

    const employeesCount = userEmployees !== undefined && userEmployees.length

    return (
        <Container>
            <ContainerHeader>
                <ContainerHeaderBlock>

                    <HeaderText >
                        {tabTitle}
                    </HeaderText>
                    <HeaderSubText>
                        {employeesCount} сотрудника
                    </HeaderSubText>
                </ContainerHeaderBlock>

                <Drop
                // onMouseLeave={() => toggling(false)}
                >
                    <LinkToAddNewObject onClick={() => toggling(!isOpen)}  >
                        <LinkToAddNewObjectText>
                            {isOpen ? 'X' : 'Добавить сотрудника'}
                        </LinkToAddNewObjectText>

                        {isOpen ? <LinkToAddNewObjectIconMobileCross
                            source={IMAGES.CrossIcon}
                        ></LinkToAddNewObjectIconMobileCross>
                            :
                            <LinkToAddNewObjectIconMobile
                                source={IMAGES.AddEmployeeIcon}
                            ></LinkToAddNewObjectIconMobile>
                        }
                    </LinkToAddNewObject>
                    {isOpen && (
                        <DropContainer as='form' onSubmit={handleSubmit(onSubmit)}>
                            <FormInputBlock>

                                <FormInputLabel htmlFor="newEmployeeNumber">
                                    Номер телефона нового сотрудника &nbsp;&nbsp;
                                    {errors.newEmployeeNumber && <ErrorMessage>{errors.newEmployeeNumber.message}</ErrorMessage>}
                                </FormInputLabel>

                                <FormInput
                                    type='number'
                                    style={{
                                        outlineColor: errors.newEmployeeNumber !== undefined && 'red'
                                    }}
                                    id="newEmployeeNumber"
                                    {...register('newEmployeeNumber', {
                                        required: "Обязательное поле",
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: "Не валидный e-mail"
                                        // }
                                    })} />
                            </FormInputBlock>
                            <ButtonSubmit
                                as='button' type="submit">
                                <ButtonSubmitText>
                                    Добавить
                                </ButtonSubmitText>
                            </ButtonSubmit>
                        </DropContainer>
                    )}
                </Drop>
            </ContainerHeader>

            <ContainerBlock>
                {userEmployees.map((item, id) => {
                    const {
                        //  userId,
                        userImage, userName, userSurName, userPosition, userEmail, userPhoneNumber } = item;
                    return (
                        <EmployeeItem key={id}>
                            <EmployeeItemBlock>
                                <EmployeeImage>
                                    <img src={userImage} width='100%' height='100%' alt={`${userName} ${userSurName}`} />
                                </EmployeeImage>
                                <EmployeeInfoContainer>

                                    <EmployeeInfoBlock>
                                        <EmployeeInfoName>
                                            {userName} {userSurName}
                                        </EmployeeInfoName>

                                        <EmployeeInfoPosition>
                                            {userPosition}
                                        </EmployeeInfoPosition>
                                    </EmployeeInfoBlock>

                                    <EmployeeText as='a' href={`tel:${userPhoneNumber}`}  >
                                        {userPhoneNumber}
                                    </EmployeeText>

                                    <EmployeeText as='a' href={`mailto:${userEmail}`}>
                                        {userEmail}
                                    </EmployeeText>
                                </EmployeeInfoContainer>

                            </EmployeeItemBlock>

                            <ButtonContainer>
                                <ButtonContainedAbsolute>

                                    <Button
                                        as='button'
                                        type='button'
                                        buttonImage={IMAGES.CrossIcon}
                                    >
                                    </Button>
                                    <TooltipRemove>Удалить</TooltipRemove>
                                </ButtonContainedAbsolute>

                            </ButtonContainer>
                        </EmployeeItem>

                    )
                })}
            </ContainerBlock>
        </Container >
    )
}
export default EmployeesData;