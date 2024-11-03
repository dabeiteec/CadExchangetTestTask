import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { sendFeedback } from '../../../api/message';
import { Form } from 'antd';

const PrimaryButton = React.lazy(() => import('../../../ui-kit/button').then(module => ({ default: module.PrimaryButton })));
const PrimaryInput = React.lazy(() => import('../../../ui-kit/input').then(module => ({ default: module.default })));
const Flex = React.lazy(() => import('antd').then(module => ({ default: module.Flex })));

const ContactForm: React.FC = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const mutation = useMutation({
        mutationFn: async () => {
            setLoading(true);
            const data = await sendFeedback(name, email, message);
            console.log(data.message);
            return data;
        },
        onSuccess: (data) => {
            setFeedbackMessage(data.message);
            setName('');
            setEmail('');
            setMessage('');
            setLoading(false);
        },
        onError: () => {
            setError(true);
            setLoading(false);
        },
    });

    const handleSubmit = () => {
        mutation.mutate();
    };

    return (
        <CustomFlex align="center" justify="center">
            {feedbackMessage ? (
                <CenteredMessage>{feedbackMessage}</CenteredMessage>
            ) : (
                <Form form={form} layout="vertical" style={{ width: '100%', maxWidth: '400px' }}>
                    <Flex vertical align='center'>
                        <CenterConeiner>
                            <AnimatedFormItem
                            label="Имя"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
                            index={0} 
                        >
                            <PrimaryInput
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Введите ваше имя"
                                aria-label="Введите ваше имя"
                            />
                        </AnimatedFormItem>
                        <AnimatedFormItem
                            label="Email"
                            rules={[
                                { required: true, message: 'Пожалуйста, введите ваш email!' },
                                { type: 'email', message: 'Неверный формат email!' },
                            ]}
                            index={1} 
                        >
                            <PrimaryInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Введите ваш email"
                                type="email"
                                aria-label="Введите ваше email"
                            />
                        </AnimatedFormItem>
                        <AnimatedFormItem
                            label="Сообщение"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваше сообщение!' }]}
                            index={2} 
                        >
                            <PrimaryInput
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Введите ваше сообщение"
                                aria-label="Введите ваше сообщение"
                            />
                        </AnimatedFormItem>
                        </CenterConeiner>
                        <div>
                            <AnimatedFormItem index={3}> 
                            <PrimaryButton
                                title={loading ? 'Отправка...' : 'Отправить'}
                                disabled={loading}
                                loading={loading}
                                onClick={handleSubmit}
                            />
                            </AnimatedFormItem>
                            {error && (
                                <ErrorMessage>Ошибка при отправке данных! Проверьте правильность введенных данных.</ErrorMessage>
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
    width:100%;
    padding:2rem;
    @media (max-width: 600px) {
        padding: 1rem; 
    }
`;

const AnimatedFormItem = styled(Form.Item)<{ index: number }>`
    width:100%;
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
