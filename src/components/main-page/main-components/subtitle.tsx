import React from "react";

const Subtitle:React.FC=()=>{
    return(
        <div>
            <div>
                <h1>Most important title on the page</h1>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</small>
            </div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=dQw4w9WgXcQ."          
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Demo video">
            </iframe>
        </div>
    )
}
export default Subtitle