import { ao as dt, ap as jsxRuntimeExports, aq as Flex, ar as useNavigate, as as DefaultButton } from "./index-CAhXaqTw.js";
const Subtitle = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledFlex, { justify: "space-evenly", align: "center", gap: 20, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FlexColumn, { vertical: true, align: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Title$1, { children: "Most important title on the page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        title: "Demo video"
      }
    ) })
  ] });
};
const StyledFlex = dt(Flex)`
    padding: 20px;
    @media (max-width:450px) {
        flex-direction:column;
    }
`;
const FlexColumn = dt(Flex)`
    opacity: 0;
    transform: translateX(-20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
const Title$1 = dt.h1`
    font-size: 24px;
    color: #333;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 0 10px;
`;
const Description = dt.small`
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
`;
const VideoWrapper = dt.div`
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
`;
const MainItem = ({ title, description }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledCard$1, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: description })
  ] });
};
const StyledCard$1 = dt.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;  
`;
const itemData = [
  { id: 1, title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum" },
  { id: 2, title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum2" },
  { id: 3, title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum3" },
  { id: 4, title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 4" },
  { id: 5, title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 5" },
  { id: 6, title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 6" }
];
const MainItems = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContainer, { children: itemData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(StyledCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MainItem, { title: item.title, description: item.description }) }, item.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarginButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultButton, { title: "Contact us", onClick: handleClick }) })
  ] });
};
const Container = dt.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
const CardContainer = dt.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const StyledCard = dt.div`
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
`;
const MarginButton = dt.div`
    margin-top:20px;

`;
const MainConteiner = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MainContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Also very important title" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MainItems, {}) })
  ] });
};
const MainContainer = dt.main`
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
`;
const Title = dt.main`
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 2.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
const SubFooter = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("About button clicked!");
    navigate("/contact");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SubFooterContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Less important title" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultButton, { title: "Contact us", onClick: handleClick })
  ] });
};
const SubFooterContainer = dt.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#f5f5f5;
    padding: 20px;
`;
const MainPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Subtitle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MainConteiner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubFooter, {})
  ] });
};
export {
  MainPage as default
};
