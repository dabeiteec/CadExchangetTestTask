import React from 'react';
import { Form } from 'antd';
import styled from 'styled-components';
import PrimaryInput from '../../../ui-kit/input';

interface InputContainerProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    index: number;
    validationRules?:any[];
}

const InputContainer: React.FC<InputContainerProps> = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    index,
    validationRules = [],
}) => (
    <AnimatedFormItem label={label} rules={validationRules} index={index}>
        <PrimaryInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            aria-label={placeholder}
        />
    </AnimatedFormItem>
);

export default InputContainer;

const AnimatedFormItem = styled(Form.Item)<{ index: number }>`
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    animation: popupAnimation forwards ease-in-out;
    animation-duration: 1s;
    animation-delay: ${(props) => props.index * 0.2}s;

    @keyframes popupAnimation {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
