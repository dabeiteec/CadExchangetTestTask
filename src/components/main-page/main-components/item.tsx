import React from "react";
import styled from "styled-components";

interface MainItemProps {
    title: string;
    description: string;
}

const MainItem: React.FC<MainItemProps> = ({ title, description }) => {
    return (
        <StyledCard>
            <div className="Logo">
                <h2>{title}</h2>
            </div>
            <span>{description}</span>
        </StyledCard>
    );
};

export default MainItem;
const StyledCard = styled.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;  
`;