import{ao as e,ap as t,aq as s,ar as o,as as r}from"./index-DYmSg1OS.js";const c=()=>t.jsxs(l,{justify:"space-evenly",align:"center",gap:20,children:[t.jsxs(d,{vertical:!0,align:"center",children:[t.jsx(m,{children:"Most important title on the page"}),t.jsx(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante"})]}),t.jsx(x,{children:t.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",title:"Demo video"})})]}),l=e(s)`
    padding: 20px;
    @media (max-width:450px) {
        flex-direction:column;
    }
`,d=e(s)`
    opacity: 0;
    transform: translateX(-20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,m=e.h1`
    font-size: 24px;
    color: #333;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 0 10px;
`,p=e.small`
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
`,x=e.div`
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
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
`,u=({title:i,description:n})=>t.jsxs(f,{children:[t.jsx("div",{className:"Logo",children:t.jsx("h2",{children:i})}),t.jsx("span",{children:n})]}),f=e.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;  
`,h=[{id:1,title:"Title 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"},{id:2,title:"Title 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum2"},{id:3,title:"Title 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum3"},{id:4,title:"Title 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 4"},{id:5,title:"Title 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 5"},{id:6,title:"Title 6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 6"}],g=()=>{const i=o(),n=()=>{i("/contact")};return t.jsxs(j,{children:[t.jsx(b,{children:h.map(a=>t.jsx(y,{children:t.jsx(u,{title:a.title,description:a.description})},a.id))}),t.jsx(w,{children:t.jsx(r,{title:"Contact us",onClick:n})})]})},j=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`,b=e.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,y=e.div`
    background: white;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent; 
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        border-color: black;  
    }
`,w=e.div`
    margin-top:20px;

`,v=()=>t.jsxs(C,{children:[t.jsx(k,{children:t.jsx("h1",{children:"Also very important title"})}),t.jsx("div",{children:t.jsx(g,{})})]}),C=e.main`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 3s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,k=e.main`
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 2.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,I=()=>{const i=o(),n=()=>{console.log("About button clicked!"),i("/contact")};return t.jsxs(L,{children:[t.jsx("div",{className:"Logo",children:t.jsx("h2",{children:"Less important title"})}),t.jsx(r,{title:"Contact us",onClick:n})]})},L=e.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#f5f5f5;
    padding: 20px;
`,q=()=>t.jsxs("div",{children:[t.jsx(c,{}),t.jsx(v,{}),t.jsx(I,{})]});export{q as default};
