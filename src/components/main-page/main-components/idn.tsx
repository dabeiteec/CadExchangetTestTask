import React from "react";
import { DefaultButton } from "../../../ui-kit/button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SubFooter:React.FC=()=>{
    const navigate = useNavigate();
    
    const handleClick = () => {
        console.log("About button clicked!"); 
        navigate("/contact"); 
    };
    return(
        <SubFooterContainer>
            <div className="Logo">
                <h2>Less important title</h2>
            </div>
            <DefaultButton title="Contact us" onClick={handleClick} />  
        </SubFooterContainer>
    )
};
export default SubFooter;

const SubFooterContainer = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#f5f5f5;
    padding: 20px;
`;