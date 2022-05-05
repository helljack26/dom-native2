import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import C from 'res/colors'
import HeaderDesktopUser from 'components/HeaderDesktopUser'
import HeaderMobileUser from 'components/HeaderMobileUser'

import Footer from 'components/Footer'
import TapbarMobile from 'components/TapbarMobile'

import IMAGES from 'res/images';
// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    HeaderText,
    FormBlock,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitText,
    ShowPasswordIconButton,
    Link,
    LinkText,
    AgreementBlock,
    AgreementText,
    FooterBlock,
    FooterText,
    CheckboxBlock,
    Checkbox,
    CheckboxImg,
    ErrorMessage,
} = style;

const RegistrationPage = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const [checkboxState, setCheckboxState] = useState(false);

    const [passwordShown, setPasswordShown] = useState(false);
    const [codeWordShown, setCodeWordShown] = useState(false);

    const onSubmit = (data) => {
        // Clear input value
        resetField('userValue');
        resetField('password');
        resetField('codeWord');
        setCheckboxState(false)
        window.location = '#/'
        return
    };

    return (
        <>
            <HeaderDesktopUser />
            <HeaderMobileUser />

            <Container>
                <ContainerBlock>
                    <HeaderText>
                        Регистрация
                    </HeaderText>

                    {/* Form */}
                    <FormBlock onSubmit={handleSubmit(onSubmit)}>

                        {/* Email or Number */}
                        <FormInputBlock>

                            <FormInputLabel htmlFor="userValue">
                                E-mail или номер телефона &nbsp;&nbsp;
                                {errors.userValue && <ErrorMessage>{errors.userValue.message}</ErrorMessage>}
                            </FormInputLabel>

                            <FormInput
                                style={{
                                    outlineColor: errors.userValue !== undefined && 'red'
                                }}

                                id="userValue"
                                {...register('userValue', {
                                    required: "Обязательное поле*",
                                    pattern: {
                                        // value: /\S+@\S+\.\S+/,
                                        message: "Введите ваш e-mail"
                                    }
                                })} />
                        </FormInputBlock>

                        {/* Password */}
                        <FormInputBlock>

                            <FormInputLabel htmlFor="password">
                                Пароль&nbsp;&nbsp;
                                {errors.password && <ErrorMessage role="alert">Не правильный пароль</ErrorMessage>}
                            </FormInputLabel>

                            <FormInputContainer>
                                <FormInput
                                    style={{
                                        outlineColor: errors.password !== undefined && 'red'
                                    }}
                                    as='input'
                                    type={passwordShown ? "text" : "password"}
                                    id="password"
                                    {...register("password", {
                                        required: "Обязательное поле*",
                                        pattern: {
                                            message: "Не правильный пароль"
                                        }
                                    })}
                                />

                                <ShowPasswordIconButton
                                    type='button'
                                    isActive={passwordShown}
                                    buttonImage={IMAGES.ShowPasswordIcon}
                                    onClick={() => setPasswordShown(!passwordShown)}
                                ></ShowPasswordIconButton>
                            </FormInputContainer>

                        </FormInputBlock>

                        {/* Code word */}
                        <FormInputBlock>

                            <FormInputLabel htmlFor="codeWord">
                                Кодовое слово&nbsp;&nbsp;
                                {errors.codeWord && <ErrorMessage role="alert">{errors.codeWord.message}</ErrorMessage>}
                            </FormInputLabel>

                            <FormInputContainer>
                                <FormInput
                                    style={{
                                        outlineColor: errors.codeWord !== undefined && 'red',
                                    }}
                                    as='input'
                                    type={codeWordShown ? "text" : "password"}
                                    id="codeWord"
                                    {...register("codeWord", {
                                        required: "Обязательное поле*",
                                        pattern: {
                                            message: "Введите кодовое слово"
                                        }
                                    })}
                                />

                                <ShowPasswordIconButton
                                    type='button'
                                    isActive={codeWordShown}
                                    buttonImage={IMAGES.ShowPasswordIcon}
                                    onClick={() => setCodeWordShown(!codeWordShown)}
                                ></ShowPasswordIconButton>
                            </FormInputContainer>

                        </FormInputBlock>

                        <AgreementBlock>
                            <CheckboxBlock
                                htmlFor="checkbox"
                                style={{
                                    border: errors.checkbox !== undefined ? '1px solid red' : `1px solid ${C.borderGray}`
                                }}
                            >
                                <Checkbox
                                    as='input'
                                    id="checkbox"
                                    type="checkbox" value={true}
                                    {...register("checkbox",
                                        { required: true }
                                    )}
                                    onClick={() => setCheckboxState(checkboxState === true ? false : true)}

                                />
                                <CheckboxImg>
                                    {checkboxState === true ? <img src={IMAGES.CheckedIcon} alt='Checked icon' /> : null}
                                </CheckboxImg>

                            </CheckboxBlock>


                            <AgreementText>
                                Я соглашаюсь с
                                <Link href='#/rules'>
                                    <LinkText> правилами использования сервиса</LinkText>
                                </Link>
                                , а также с передачей
                                и обработкой моих данных сервисом. Я подтверждаю своё совершеннолетие и
                                ответственность за размещение объявления
                            </AgreementText>
                        </AgreementBlock>

                        <ButtonSubmit
                            as='button'
                            type="submit"
                        >
                            <ButtonSubmitText>
                                Зарегистрироваться
                            </ButtonSubmitText>
                        </ButtonSubmit>

                        <FooterBlock>
                            <FooterText>
                                Уже есть аккаунт?
                            </FooterText>

                            <Link href='#/login'>
                                <LinkText>Войдите в личный кабинет</LinkText>
                            </Link>
                        </FooterBlock>
                    </FormBlock>
                </ContainerBlock>

            </Container>

            <Footer />
            <TapbarMobile />
        </>
    )
}

export default RegistrationPage;