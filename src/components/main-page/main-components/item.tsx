import React from "react";

interface MainItemProps {
    title: string;
    description: string;
}

const MainItem: React.FC<MainItemProps> = ({ title, description }) => {
    return (
        <article>
            <div className="Logo">
                <h2>{title}</h2>
            </div>
            <span>{description}</span>
        </article>
    );
};

export default MainItem;