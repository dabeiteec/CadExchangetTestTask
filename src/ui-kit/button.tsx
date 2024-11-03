import React from 'react';
import { Button } from 'antd';

interface ButtonProp {
    title: string;
    type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
}

export const PrimaryButton: React.FC<ButtonProp> = ({ title, onClick, disabled = false, loading = false, style }) => {
    return (
        <Button type="primary" onClick={onClick} disabled={disabled} loading={loading} style={style}>
            {title}
        </Button>
    );
};

export const DefaultButton: React.FC<ButtonProp> = ({ title, onClick, disabled = false, loading = false, style }) => {
    return (
        <Button onClick={onClick} disabled={disabled} loading={loading} style={style}>
            {title}
        </Button>
    );
};
