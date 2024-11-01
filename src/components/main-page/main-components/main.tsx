import React from "react";
import MainItems from "./maint-items";

const MainConteiner:React.FC=()=>{

    return(
        <main>
            <div className="Logo">
                <h1>Also very important title</h1>
            </div>
            <div>
                <MainItems/>
            </div>
        </main>
    )
};
export default MainConteiner;