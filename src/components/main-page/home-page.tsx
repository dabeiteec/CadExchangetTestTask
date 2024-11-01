import React from "react";
import Subtitle from "./main-components/subtitle";
import MainConteiner from "./main-components/main";
import Footer from "./main-components/footer";
import SubFooter from "./main-components/idn";

const MainPage: React.FC=()=>{
    return(
        <div>
           <Subtitle/>
           <MainConteiner/>
           <SubFooter/>
           <Footer/>
        </div>
    )
}
export default MainPage