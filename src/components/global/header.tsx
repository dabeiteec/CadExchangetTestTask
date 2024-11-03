import React from "react";
import { PrimaryButton } from "../../ui-kit/button";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import styled from 'styled-components';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("About button clicked!"); 
        navigate("/contact"); 
    };
   
    return (
        <HeaderContainer>
            <Flex align="center" justify="space-evenly" >
                <Logo className="Logo">
                    <h2>My Company</h2>
                </Logo>
                <nav>
                    <PrimaryButton title="Contact us" onClick={handleClick} />
                </nav>   
            </Flex>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
background-color:white;
z-index:2;
padding: 20px;
position: sticky;
top: 0;
`;

const Logo = styled.div`
font-size: 24px;
font-weight: bold;
`;