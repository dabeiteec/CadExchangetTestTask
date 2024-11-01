import React from "react";
import { PrimaryButton } from "../../ui-kit/button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("About button clicked!"); 
        navigate("/contact"); 
    };

    return (
        <header>
            <div className="Logo">
                <h2>My Favorite Company</h2>
            </div>
            <nav>
                <PrimaryButton title="About" onClick={handleClick} />
            </nav>
        </header>
    );
};

export default Header;
