import { ao as dt, ap as jsxRuntimeExports } from "./index-CNgC9Fou.js";
const StyledInput = dt.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #40a9ff;
        box-shadow: 0 0 5px rgba(64, 169, 255, 0.5);
    }
`;
const PrimaryInput = ({ value, placeholder, onChange, type = "text" }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StyledInput,
    {
      value,
      onChange,
      placeholder,
      type
    }
  );
};
export {
  PrimaryInput as default
};
