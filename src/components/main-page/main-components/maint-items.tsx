import React from "react";
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
        console.log("About button clicked!"); 
        navigate("/contact"); 
    };
    return (
        <div>
             <div>
                {itemData.map(item => (
                    <MainItem key={item.id} title={item.title} description={item.description} />
                ))}
            </div>
            <DefaultButton title="About" onClick={handleClick} />
        </div>
       
    );
};

export default MainItems;