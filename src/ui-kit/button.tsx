import React from 'react';
import { Button } from 'antd';

interface ButtonProp {
    title: string;
    onClick?: (e:any) => void;
}

export const PrimaryButton: React.FC<ButtonProp> = ({ title, onClick }) => {
    return (
        <Button type="primary" onClick={onClick}>
            {title}
        </Button>
    );
};

export const DefaultButton: React.FC<ButtonProp> = ({ title, onClick }) => {
    return (
        <Button onClick={onClick}>
            {title}
        </Button>
    );
}
            // {/* Кнопка с контуром */}
            // <Button type="dashed" onClick={handleClick}>
            //     Dashed Button
            // </Button>

            // {/* Кнопка с предупреждающим стилем */}
            // <Button type="danger" onClick={handleClick}>
            //     Danger Button
            // </Button>

            // {/* Кнопка, которая неактивна */}
            // <Button type="primary" disabled>
            //     Disabled Button
            // </Button>