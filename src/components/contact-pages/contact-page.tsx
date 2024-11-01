import React from "react";
import { PrimaryButton } from "../../ui-kit/button";
import ContactForm from "./contact-component/form";

const ContactPage: React.FC = () => {
    const handleClick = () => {
        console.log("About button clicked!");
    };

    return (
        <div>
            <ContactForm/>
        </div>
    );
};

export default ContactPage;