var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, TextField, IconButton } from "@mui/material/";
import { useDataDispatch } from "../../context/DataContext";
import RestaurantTablesJson from '../../RestaurantTables.json';
import RestaurantBarJson from '../../RestaurantBar.json';
import { createRestaurant } from "../../context/dataActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "@emotion/styled";
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var StyledPaper = styled(Paper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n  @media (max-width: 350px) {\n    height: 500px;\n  }\n"], ["\n  background: #e5e5e5;\n  position: absolute;\n  height: 300px;\n  padding: 25px;\n  @media (max-width: 350px) {\n    height: 500px;\n  }\n"])));
var FormWrapper = styled.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n  gap:20px;\n  @media (max-width: 350px) {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%;\n  gap:20px;\n  @media (max-width: 350px) {\n    flex-direction: column;\n  }\n"])));
var WelcomeModal = function (_a) {
    var setBranchName = _a.setBranchName;
    var dispatch = useDataDispatch().dispatch;
    var handleSubmit = function (e) {
        e.preventDefault();
        // setup state
        dispatch(createRestaurant({
            tables: RestaurantTablesJson,
            bar: RestaurantBarJson
        }));
        var inputElement = e.currentTarget.elements.namedItem("restaurant-name-field");
        var inputValue = inputElement.value;
        setBranchName(inputValue);
    };
    return (_jsx(StyledWrapper, { children: _jsxs(StyledPaper, { elevation: 24, children: [_jsx(Typography, { align: "center", variant: "h5", children: "Welcome to Restuarant Booking System" }), _jsx(Typography, { variant: "subtitle1", marginTop: 3, marginBottom: 2, align: "center", children: "Please enter a restaurant name to begin" }), _jsxs(FormWrapper, { onSubmit: handleSubmit, children: [_jsx(TextField, { required: true, id: "restaurant-name-field", label: "Required", defaultValue: "Nandos Shoreditch" }), _jsx(IconButton, { "aria-label": "CheckCircleIcon", type: "submit", children: _jsx(CheckCircleIcon, { color: "secondary", fontSize: "large" }) })] })] }) }));
};
export default WelcomeModal;
var templateObject_1, templateObject_2, templateObject_3;
