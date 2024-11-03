import React from "react";
import styled from "styled-components";
import { Flex } from "antd";
import YouTube from "react-youtube";

const Subtitle: React.FC = () => {
    const videoOptions = {
        height: '315',
        width: '560',
        playerVars: {
            autoplay: 0, 
        },
    };
    return (
        <StyledFlex justify="space-evenly" align="center" gap={20}>
            <FlexColumn vertical align="center">
                <Title>Most important title on the page</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                </Description>
            </FlexColumn>
            <VideoWrapper>  
                <YouTube videoId="dQw4w9WgXcQ" opts={videoOptions} />
            </VideoWrapper>
        </StyledFlex>
    );
};

export default Subtitle;

const StyledFlex = styled(Flex)`
    padding: 20px;
    @media (max-width:1000px) {
        flex-direction:column;
    }
`;

const FlexColumn = styled(Flex)`
    opacity: 0;
    transform: translateX(-20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 0 10px;
`;

const Description = styled.small`
    color: #000000;
    font-size: 14px;
    text-align: center;
    max-width: 400px;
    display: inline-block;
    line-height: 1.5;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0);
    background: linear-gradient(90deg, #f6f7f9, #e6e9ec);
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const VideoWrapper = styled.div`
    overflow: hidden;
    transition: transform 0.3s ease;
    transform: translateX(20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:hover {
        transform: scale(1.03);
    }
    
    @media (max-width: 450px) {
        width: calc(100% - 20px); 
        margin: 0 10px;
    }
`;
