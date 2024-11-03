import React from 'react';
import styled from 'styled-components';

interface PrimaryInputProps {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #40a9ff;
        box-shadow: 0 0 5px rgba(64, 169, 255, 0.5);
    }
`;

const PrimaryInput: React.FC<PrimaryInputProps> = ({ value, placeholder, onChange, type = "text" }) => {
    return (
        <StyledInput 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default PrimaryInput;
