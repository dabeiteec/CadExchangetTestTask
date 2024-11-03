import React from "react";
import MainItems from "./maint-items";
import styled from "styled-components";

const MainConteiner:React.FC=()=>{

    return(
        <MainContainer>
            <Title>
                <h1>Also very important title</h1>
            </Title>
            <div>
                <MainItems/>
            </div>
        </MainContainer>
    )
};
export default MainConteiner;

const MainContainer = styled.main`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 3s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
const Title = styled.main`
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 2.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;



