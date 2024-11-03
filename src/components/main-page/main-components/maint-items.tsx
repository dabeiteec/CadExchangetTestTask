import React from "react";
import styled from "styled-components";
import MainItem from "./item";
import { DefaultButton } from "../../../ui-kit/button";
import { useNavigate } from "react-router-dom";

interface MainItemProps {
    id: number;
    title: string;
    description: string;
}

const itemData: MainItemProps[] = [
    { id: 1, title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum' },
    { id: 2, title: 'Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum2' },
    { id: 3, title: 'Title 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum3' },
    { id: 4, title: 'Title 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 4' },
    { id: 5, title: 'Title 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 5' },
    { id: 6, title: 'Title 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 6' },
];

const MainItems: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    };

    return (
        <Container>
            <CardContainer>
                {itemData.map(item => (
                    <StyledCard key={item.id}>
                        <MainItem title={item.title} description={item.description} />
                    </StyledCard>
                ))}
            </CardContainer>
            <MarginButton>
                <DefaultButton title="Contact us" onClick={handleClick} />
            </MarginButton>
        </Container>
    );
};

export default MainItems;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const StyledCard = styled.div`
    background: white;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent; 
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        border-color: black;  
    }
`;
const MarginButton = styled.div`
    margin-top:20px;

`