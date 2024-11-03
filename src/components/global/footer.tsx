import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <h3>Some Company 2024</h3>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    height: 80px;
    width: 100%;
    position: sticky;
    flex:1;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    box-sizing: border-box;
`;
