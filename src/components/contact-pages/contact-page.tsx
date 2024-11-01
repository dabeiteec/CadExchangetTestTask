import React from "react";
import { PrimaryButton } from "../../ui-kit/button";

const ContactPage: React.FC = () => {
    const handleClick = () => {
        console.log("About button clicked!");
    };

    return (
        <div>
            <div className="Logo">
                <h2>My Favorite Company</h2>
            </div>
            <nav>
                <PrimaryButton title="About" onClick={handleClick} />
            </nav>
        </div>
    );
};

export default ContactPage;