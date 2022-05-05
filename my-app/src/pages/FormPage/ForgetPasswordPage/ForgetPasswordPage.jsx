import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    ShowPasswordIcon,
    ShowPasswordBlueIcon
} = IMAGES;
// Styles
import { style } from '../LoginPage/style'
const {
    Container,
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
    FooterBlock,
    FooterText,
    ErrorMessage,
} = style;

const ForgetPasswordPage = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { email: '', password: '' }
    });

    const [codeWordShown, setCodeWordShown] = useState(false);
    const [inputFocus1, setInputFocus1] = useState(C.borderGray);
    const [inputFocus2, setInputFocus2] = useState(C.borderGray);

    const onSubmit = (data) => {
        // Clear input value
        resetField('email');
        resetField('password');
        return
    };

    return (
        <>
            <Container>
                <HeaderText>
                    Забыли пароль?
                </HeaderText>

                {/* Form */}
                <FormBlock >

                    {/* Email */}
                    <Controller
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
                            value: /\S+@\S+\.\S+/,
                            message: 'Не валидный email'
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputLabel>
                                    E-mail, указанный при регистрации &nbsp;&nbsp;
                                </FormInputLabel>
                                <FormInput
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus1(C.mainBlue)}
                                    onBlur={() => {
                                        onBlur
                                        setInputFocus1(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{
                                        borderColor: `${errors.email ? 'red' : inputFocus1}`
                                    }}
                                />
                                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="email"
                    />

                    {/* Code word */}
                    <Controller
                        control={control}
                        rules={{
                            required: 'Обязательное поле*',
                            message: 'Кодовое слово не совпадает'
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputLabel>
                                    Кодовое слово &nbsp;&nbsp;
                                </FormInputLabel>
                                <FormInputContainer>
                                    <FormInput
                                        secureTextEntry={!codeWordShown ? true : false}
                                        selectionColor={C.mainBlue}
                                        cursorColor={C.mainBlue}
                                        onFocus={() => setInputFocus2(C.mainBlue)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus2(C.borderGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{ borderColor: `${errors.codeWord ? 'red' : inputFocus2}` }}
                                    />
                                    <ShowPasswordIconButton
                                        type='button'
                                        onPress={() => setCodeWordShown(!codeWordShown)}
                                    >
                                        {!codeWordShown ?
                                            <ShowPasswordIcon width={20} height={20} />
                                            :
                                            <ShowPasswordBlueIcon width={20} height={20} />
                                        }
                                    </ShowPasswordIconButton>
                                </FormInputContainer>

                                {errors.codeWord && <ErrorMessage>{errors.codeWord.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="codeWord"
                    />

                    <ButtonSubmit onPress={handleSubmit(onSubmit)}>
                        <ButtonSubmitText>
                            Отправить пароль
                        </ButtonSubmitText>
                    </ButtonSubmit>

                    <FooterBlock>
                        <FooterText>
                            Вспомнили пароль?
                        </FooterText>

                        <Link onPress={() => navigation.navigate('LogimPage')}>
                            <LinkText>
                                Войдите в личный кабинет
                            </LinkText>
                        </Link>
                    </FooterBlock>
                </FormBlock>
            </Container>
        </>
    )
}

export default ForgetPasswordPage;