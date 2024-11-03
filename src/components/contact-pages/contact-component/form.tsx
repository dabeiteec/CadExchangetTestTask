import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { useMutation } from '@tanstack/react-query';
import getFeedBack from '../../../api/message';
import InputContainer from './input-container';
import { PrimaryButton } from '../../../ui-kit/button';
import { Flex } from 'antd';

const ContactForm: React.FC = () => {
    const [form] = Form.useForm();
    const [hasError, setHasError] = useState<boolean>(false);
    const [answerMessage, setAnswerMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

    const mutation = useMutation({
        mutationFn: async () => {
            setIsLoading(true);
            const data = await getFeedBack(name, email, message);
            return data;
        },
        onSuccess: (data) => {
            setAnswerMessage(data.message);
            setName('');
            setEmail('');
            setMessage('');
            setIsLoading(false);
        },
        onError: () => {
            setHasError(true);
            setIsLoading(false);
        },
    });

    const handleSubmit = () => {
        form
            .validateFields() 
            .then(() => {
                mutation.mutate();
            })
            .catch(() => {
                setHasError(true);
            });
    };
    const fieldsData = [
        {
            label: 'Имя',
            value: name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
            placeholder: 'Введите ваше имя',
            validationRules: [{ required: true, message: 'Пожалуйста, введите ваше имя!' }],
        },
        {
            label: 'Email',
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            placeholder: 'Введите ваш email',
            type: 'email',
            validationRules: [
                { required: true, message: 'Пожалуйста, введите ваш email!' },
                { type: 'email', message: 'Неверный формат email!' },
            ],
        },
        {
            label: 'Сообщение',
            value: message,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value),
            placeholder: 'Введите ваше сообщение',
            validationRules: [{ required: true, message: 'Пожалуйста, введите ваше сообщение!' }],
        },
    ];
    return (
        <CustomFlex align="center" justify="center">
            {answerMessage ? (
                <CenteredMessage>{answerMessage}</CenteredMessage>
            ) : (
                <Form
                    form={form}
                    layout="vertical"
                    style={{ width: '100%', maxWidth: '400px' }}
                >
                    <Flex vertical align="center">
                        <CenterConeiner>
                        {fieldsData.map((field, index) => (
                                <InputContainer
                                    key={index}
                                    label={field.label}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder={field.placeholder}
                                    type={field.type}
                                    index={index}
                                    validationRules={field.validationRules}
                                />
                            ))}
                        </CenterConeiner>
                        <div>
                            <AnimatedFormItem index={3}>
                                <PrimaryButton
                                    title={isLoading ? 'Отправка...' : 'Отправить'}
                                    disabled={!isFormValid || isLoading} 
                                    loading={isLoading}
                                    onClick={handleSubmit}
                                />
                            </AnimatedFormItem>
                            {hasError && (
                                <ErrorMessage>Ошибка при отправке данных! Сервер не доступен!</ErrorMessage>
                            )}
                        </div>
                    </Flex>
                </Form>
            )}
        </CustomFlex>
    );
};

export default ContactForm;

const CenterConeiner = styled.section`
    width: 100%;
    padding: 2rem;
    @media (max-width: 600px) {
        padding: 1rem;
    }
`;

const AnimatedFormItem = styled(Form.Item)<{ index: number }>`
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    animation: popupAnimation forwards ease-in-out;
    animation-duration: 1s;
    animation-delay: ${(props) => props.index * 0.2}s;
    @media (max-width: 600px) {
        animation-duration: 0.5s;
    }
    @keyframes popupAnimation {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CustomFlex = styled(Flex)`
    margin-top: 5rem;
    @media (max-width: 600px) {
        margin-top: 3rem;
    }
`;

const ErrorMessage = styled.div`
    color: red;
`;

const CenteredMessage = styled.h1`
    color: #333;
    font-size: 1.5rem;
    text-align: center;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    transform: translateY(100px);
    animation: messageFly 2s forwards;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
    @keyframes messageFly {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
