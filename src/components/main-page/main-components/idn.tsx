import React from "react";
import { DefaultButton } from "../../../ui-kit/button";
import { useNavigate } from "react-router-dom";

const SubFooter:React.FC=()=>{
    const navigate = useNavigate();
    
    const handleClick = () => {
        console.log("About button clicked!"); 
        navigate("/contact"); 
    };
    return(
        <section>
            <div className="Logo">
                <h2>Less important title</h2>
            </div>
            
            <DefaultButton title="About" onClick={handleClick} />
            
        </section>
    )
};
export default SubFooter;